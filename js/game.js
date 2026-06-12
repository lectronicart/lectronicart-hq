// ===== Game engine =====
// Two halves:
//   GameCalc — pure math, no browser stuff. tools/verify.js runs these exact
//              functions in Node, so the rules checked are the rules shipped.
//   Game / GameUI — storage + screen. Only runs in a browser.
//
// One rule above all: XP, levels, and badges are always COMPUTED from the
// done-set + curriculum. We never store a computed number. The only things
// saved are facts we can't recompute: WHEN you marked days (activity log),
// which dates shields were spent on, your best streak, and what you've
// already been congratulated for.

const GameCalc={
  // day numbers are 1..252; every week is exactly 7 days, so simple math
  // finds the day's entry in WEEKS
  dayInfo(n){return WEEKS[Math.floor((n-1)/7)].days[(n-1)%7];},

  // XP measures showing up, not mastery (the calendar is self-reported).
  // Study day: planned hours x 20. Shipping is the hard part: SHIP +20.
  // Building beats reading: BUILD +10. Rest day: 10 — recovery counts.
  xpForDay(d){
    if(d.rest)return 10;
    const m=d.h.match(/[\d.]+/g);
    let xp=Math.round((m?parseFloat(m[m.length-1]):0)*20);
    if(d.g.includes("SHIP"))xp+=20;
    if(d.g.includes("BUILD"))xp+=10;
    return xp;
  },

  // a perfect week = all 7 of its days marked done
  weeksPerfect(done){
    let c=0;
    for(let w=0;w<WEEKS.length;w++){
      let all=true;
      for(let n=w*7+1;n<=w*7+7;n++)if(!done.has(n)){all=false;break;}
      if(all)c++;
    }
    return c;
  },

  totalXP(done){
    let xp=0;
    done.forEach(n=>{if(n>=1&&n<=252)xp+=this.xpForDay(this.dayInfo(n));});
    return xp+this.weeksPerfect(done)*50; // +50 per perfect week
  },

  levelFor(xp){
    let i=0;
    while(i+1<LEVELS.length&&xp>=LEVELS[i+1].xp)i++;
    const next=LEVELS[i+1]||null;
    return {n:i+1,title:LEVELS[i].title,blurb:LEVELS[i].blurb,
            floor:LEVELS[i].xp,next:next?next.xp:null};
  },

  tagDays(done,tag){
    let c=0;
    done.forEach(n=>{if(n>=1&&n<=252&&this.dayInfo(n).g.includes(tag))c++;});
    return c;
  },

  phaseComplete(done,p){
    for(let w=0;w<WEEKS.length;w++){
      if(WEEKS[w].p!==p)continue;
      for(let n=w*7+1;n<=w*7+7;n++)if(!done.has(n))return false;
    }
    return true;
  },

  badgeEarned(b,stats){
    const c=b.cond;
    switch(c.type){
      case "days_done":      return stats.daysDone>=c.n;
      case "streak":         return stats.bestStreak>=c.n;
      case "phase_complete": return stats.phases.includes(c.p);
      case "tag_days":       return stats.tag(c.tag)>=c.n;
      case "weeks_perfect":  return stats.weeksPerfect>=c.n;
      case "all_done":       return stats.daysDone>=252;
      default:               return false;
    }
  },

  // The streak walks backward from today, one calendar date at a time.
  // A date counts if you marked any day done on it. Sundays never break
  // the chain (rest is part of the system). A missed study day spends a
  // shield if one is available; otherwise the chain ends there.
  // Returns the streak plus any shield dates newly spent, so the caller
  // can save them — past spends are passed back in, keeping recomputation
  // stable across sessions.
  streak(activeSet,spentSet,shieldsAvail,todayKey){
    if(activeSet.size===0)return{current:0,newShieldDates:[]};
    const parse=k=>{const[p,q,r]=k.split("-").map(Number);return new Date(p,q-1,r);};
    const fmt=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
    const earliest=[...activeSet].sort()[0];
    let cur=0;const spent=[];
    const d=parse(todayKey);
    if(!activeSet.has(todayKey))d.setDate(d.getDate()-1); // today isn't a miss until it's over
    while(fmt(d)>=earliest){
      const k=fmt(d);
      if(activeSet.has(k))cur++;
      else if(d.getDay()===0){/* Sunday bridges */}
      else if(spentSet.has(k)){/* already covered by a past shield */}
      else if(spent.length<shieldsAvail)spent.push(k);
      else break;
      d.setDate(d.getDate()-1);
    }
    if(cur===0)return{current:0,newShieldDates:[]}; // never waste shields protecting nothing
    return{current:cur,newShieldDates:spent};
  }
};

// ---- browser half: storage, header, celebrations, trophy case ----
if(typeof document!=="undefined"){

const SHIELD_CAP=2;
var Game={
  activity:{},  // "2026-06-15": [1,2] — which days were marked on which date
  state:{seenLevel:1,seenBadges:[],shieldDates:[],bestStreak:0},
  memoryOnly:false,
  AKEY:"coding101-activity-v1",
  SKEY:"coding101-game-v1",

  load(){
    try{
      const a=localStorage.getItem(this.AKEY);
      if(a)this.activity=JSON.parse(a)||{};
      const s=localStorage.getItem(this.SKEY);
      if(s)Object.assign(this.state,JSON.parse(s)||{});
      if(!Array.isArray(this.state.seenBadges))this.state.seenBadges=[];
      if(!Array.isArray(this.state.shieldDates))this.state.shieldDates=[];
    }catch(e){this.memoryOnly=true;this.activity={};}
  },
  save(){
    if(this.memoryOnly)return;
    try{
      localStorage.setItem(this.AKEY,JSON.stringify(this.activity));
      localStorage.setItem(this.SKEY,JSON.stringify(this.state));
    }catch(e){this.memoryOnly=true;}
  },

  // called from app.js when a day is marked or unmarked
  recordActivity(dayN,marked){
    if(marked){
      const t=todayISO();
      this.activity[t]=this.activity[t]||[];
      if(!this.activity[t].includes(dayN))this.activity[t].push(dayN);
    }else{
      // un-marking removes the day from whichever date it was logged under
      for(const k in this.activity){
        const i=this.activity[k].indexOf(dayN);
        if(i>=0)this.activity[k].splice(i,1);
      }
    }
    this.save();
  },

  stats(done){
    const daysDone=done.size;
    const weeksPerfect=GameCalc.weeksPerfect(done);
    const phases=[1,2,3,4].filter(p=>GameCalc.phaseComplete(done,p));
    const activeSet=new Set(Object.keys(this.activity).filter(k=>this.activity[k].length>0));
    const avail=Math.max(0,Math.min(SHIELD_CAP,weeksPerfect-this.state.shieldDates.length));
    const st=GameCalc.streak(activeSet,new Set(this.state.shieldDates),avail,todayISO());
    if(st.newShieldDates.length){this.state.shieldDates.push(...st.newShieldDates);this.save();}
    if(st.current>this.state.bestStreak){this.state.bestStreak=st.current;this.save();}
    const xp=GameCalc.totalXP(done);
    return{
      xp,level:GameCalc.levelFor(xp),daysDone,weeksPerfect,phases,
      streak:st.current,bestStreak:this.state.bestStreak,
      shields:Math.max(0,Math.min(SHIELD_CAP,weeksPerfect-this.state.shieldDates.length)),
      tag:t=>GameCalc.tagDays(done,t)
    };
  },

  // called from app.js render() — recompute everything, celebrate what's new
  refresh(done){
    const s=this.stats(done);
    if(s.level.n>this.state.seenLevel){
      GameUI.toast("⚡ LEVEL UP — lvl "+s.level.n+": "+s.level.title);
      GameUI.confetti();
    }
    this.state.seenLevel=s.level.n; // drops silently if days were unmarked
    const earned=BADGES.filter(b=>GameCalc.badgeEarned(b,s));
    earned.forEach(b=>{
      if(!this.state.seenBadges.includes(b.id))GameUI.toast(b.icon+" Badge earned: "+b.name);
    });
    this.state.seenBadges=earned.map(b=>b.id);
    this.save();
    GameUI.renderHeader(s);
    this.last=s;
  },

  // small "+50 XP" that floats up from the done button when marking a day
  xpFlash(dayN){
    GameUI.xpFlash("+"+GameCalc.xpForDay(GameCalc.dayInfo(dayN))+" XP");
  }
};

var GameUI={
  reducedMotion(){return window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;},

  renderHeader(s){
    const span=document.getElementById("termgame");
    if(span){
      let bar="★ max";
      if(s.level.next){
        const f=Math.round((s.xp-s.level.floor)/(s.level.next-s.level.floor)*8);
        bar="▓".repeat(f)+"░".repeat(8-f);
      }
      span.textContent=" · lvl "+s.level.n+" "+s.level.title+" "+bar
        +" · ⚡"+s.xp.toLocaleString()+" XP · 🔥"+s.streak
        +(s.shields?" 🛡️"+s.shields:"");
    }
    const btn=document.getElementById("trophyLvl");
    if(btn)btn.textContent="lvl "+s.level.n;
  },

  toast(msg){
    const box=document.getElementById("toasts");
    if(!box)return;
    while(box.children.length>=2)box.removeChild(box.firstChild);
    const t=document.createElement("div");
    t.className="toast";t.textContent=msg;
    box.appendChild(t);
    setTimeout(()=>{if(t.parentNode)t.parentNode.removeChild(t);},4000);
  },

  confetti(){
    if(this.reducedMotion())return;
    const colors=["#2563EB","#7C3AED","#059669","#E11D48","#D97706"];
    for(let i=0;i<14;i++){
      const dot=document.createElement("span");
      dot.className="confetti-dot";
      dot.style.left=(46+Math.random()*8)+"%";
      dot.style.top=(8+Math.random()*6)+"%";
      dot.style.background=colors[i%colors.length];
      dot.style.animationDelay=(Math.random()*0.25)+"s";
      document.body.appendChild(dot);
      setTimeout(()=>{if(dot.parentNode)dot.parentNode.removeChild(dot);},1400);
    }
  },

  xpFlash(text){
    if(this.reducedMotion())return;
    const wrap=document.querySelector(".donewrap");
    if(!wrap)return;
    const f=document.createElement("span");
    f.className="xp-flash";f.textContent=text;
    wrap.appendChild(f);
    setTimeout(()=>{if(f.parentNode)f.parentNode.removeChild(f);},900);
  },

  renderTrophy(){
    const s=Game.last||Game.stats(done);
    document.getElementById("tLevel").textContent="lvl "+s.level.n+" — "+s.level.title;
    document.getElementById("tBlurb").textContent=s.level.blurb;
    document.getElementById("tStats").innerHTML=
      "⚡ "+s.xp.toLocaleString()+" XP · "+s.daysDone+"/252 days · "
      +s.weeksPerfect+" perfect weeks<br>🔥 streak "+s.streak
      +" (best "+s.bestStreak+") · 🛡️ shields "+s.shields+"/"+SHIELD_CAP;
    const grid=document.getElementById("tBadges");
    grid.innerHTML="";
    BADGES.forEach(b=>{
      const got=s&&GameCalc.badgeEarned(b,s);
      const el=document.createElement("div");
      el.className="badge"+(got?"":" locked");
      el.innerHTML='<span class="bicon">'+b.icon+'</span><span><span class="bname">'
        +b.name+'</span><br><span class="bdesc">'+b.desc+"</span></span>";
      grid.appendChild(el);
    });
    const ladder=document.getElementById("tLadder");
    ladder.innerHTML="";
    LEVELS.forEach((L,i)=>{
      const li=document.createElement("li");
      li.className=(i+1===s.level.n?"current":(s.xp>=L.xp?"reached":""));
      li.textContent="lvl "+(i+1)+" · "+L.title+" — "+L.xp.toLocaleString()+" XP";
      ladder.appendChild(li);
    });
  },

  openTrophy(){
    this.renderTrophy();
    document.getElementById("trophyOverlay").classList.add("open");
  },
  closeTrophy(){
    document.getElementById("trophyOverlay").classList.remove("open");
    const btn=document.getElementById("trophyBtn");
    if(btn)btn.focus();
  }
};

Game.load();
document.getElementById("trophyBtn").addEventListener("click",()=>GameUI.openTrophy());
document.getElementById("trophyClose").addEventListener("click",()=>GameUI.closeTrophy());
document.getElementById("trophyOverlay").addEventListener("click",e=>{
  if(e.target.id==="trophyOverlay")GameUI.closeTrophy();
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&document.getElementById("trophyOverlay").classList.contains("open"))
    GameUI.closeTrophy();
});

}
