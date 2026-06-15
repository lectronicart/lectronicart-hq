// ===== Engine =====
const START=new Date(2026,5,15); // Mon Jun 15 2026
const TOTAL_DAYS=252;
const DAYMAP={};
(function build(){
  let cur=new Date(START);
  let dayN=1;
  WEEKS.forEach((wk,wi)=>{
    wk.days.forEach((day,di)=>{
      const key=iso(cur);
      DAYMAP[key]={...day,week:wi+1,theme:wk.theme,phase:wk.p,dayN:dayN,date:new Date(cur)};
      cur.setDate(cur.getDate()+1); dayN++;
    });
  });
})();
function iso(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}

const MONTHS=[[2026,5],[2026,6],[2026,7],[2026,8],[2026,9],[2026,10],[2026,11],[2027,0],[2027,1]]; // Jun 2026 - Feb 2027
const MONTH_NAMES=["January","February","March","April","May","June","July","August","September","October","November","December"];
let viewIdx=0;
let done=new Set();
let memoryOnly=false;
const KEY="coding101-progress-v1";

function loadProgress(){
  try{
    const raw=localStorage.getItem(KEY);
    if(raw){
      // progress is stored as day numbers (1–252) so it survives a future
      // "shift my start date" feature. Early saves used dates like
      // "2026-06-15" — convert those to day numbers on the way in.
      const entries=JSON.parse(raw).map(e=>typeof e==="string"&&DAYMAP[e]?DAYMAP[e].dayN:e);
      done=new Set(entries.filter(n=>Number.isInteger(n)&&n>=1&&n<=TOTAL_DAYS));
    }
  }catch(e){ memoryOnly=true; /* private mode or storage blocked */ }
  render();
}
function saveProgress(){
  if(memoryOnly)return;
  try{localStorage.setItem(KEY,JSON.stringify([...done]));}
  catch(e){memoryOnly=true;}
}

function todayISO(){return iso(new Date());}

function render(){
  const [y,m]=MONTHS[viewIdx];
  document.getElementById("monthLabel").textContent=MONTH_NAMES[m]+" "+y;
  document.getElementById("prevM").disabled=viewIdx===0;
  document.getElementById("nextM").disabled=viewIdx===MONTHS.length-1;

  const grid=document.getElementById("grid");
  grid.innerHTML="";
  const first=new Date(y,m,1);
  const lead=(first.getDay()+6)%7; // Mon=0
  const dim=new Date(y,m+1,0).getDate();
  const tISO=todayISO();

  for(let i=0;i<lead;i++){const c=document.createElement("div");c.className="cell out";grid.appendChild(c);}
  for(let d=1;d<=dim;d++){
    const dt=new Date(y,m,d), key=iso(dt), info=DAYMAP[key];
    const c=document.createElement("div");
    if(!info){c.className="cell out";c.innerHTML='<span class="dnum">'+d+"</span>";grid.appendChild(c);continue;}
    c.className="cell p"+info.phase+(info.rest?" rest":"")+(done.has(info.dayN)?" done":"")+(key===tISO?" today":"");
    // make the cell reachable and pressable with a keyboard, like a real button
    c.tabIndex=0;
    c.dataset.key=key;
    c.setAttribute("role","button");
    c.setAttribute("aria-label","Day "+info.dayN+": "+info.t);
    c.innerHTML='<span class="dnum">'+d+'<span class="daycount">d'+info.dayN+"</span></span>"
      +'<span class="ttl">'+esc(info.t)+"</span>"
      +'<span class="preview">'+esc(info.d[0])+"</span>"
      +'<span class="chips">'+info.g.map(t=>'<span class="chip '+t+'">'+t+"</span>").join("")+"</span>";
    c.addEventListener("click",()=>openDay(key));
    c.addEventListener("keydown",e=>{
      if(e.key==="Enter"||e.key===" "){e.preventDefault();openDay(key);}
    });
    grid.appendChild(c);
  }
  const wb=document.getElementById("weekBanner");
  const inMonth=Object.values(DAYMAP).filter(x=>x.date.getMonth()===m&&x.date.getFullYear()===y);
  if(inMonth.length){
    const themes=[...new Set(inMonth.map(x=>"W"+x.week+": "+x.theme))];
    wb.innerHTML="<b>This month:</b> "+themes.join(" · ");
  }else wb.textContent="";
  renderTerm();
  if(typeof Game!=="undefined")Game.refresh(done); // game layer recomputes from the done-set
}
function renderTerm(){
  const n=done.size, pct=Math.round(n/TOTAL_DAYS*100);
  const filled=Math.round(pct/100*24);
  document.getElementById("termbar").textContent="▓".repeat(filled)+"░".repeat(24-filled);
  document.getElementById("termpct").textContent=" "+n+"/"+TOTAL_DAYS+" days ("+pct+"%)"+(memoryOnly?" · saving off — progress won't persist":"");
  document.getElementById("saveState").textContent=memoryOnly?"saving off":"local save active";
}
function esc(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function escAttr(s){return esc(s).replace(/"/g,"&quot;");}

let openKey=null;
let activeGuideTab="overview";
const GUIDE_TABS=["overview","steps","finish"];

function openDay(key){
  const info=DAYMAP[key]; if(!info)return;
  openKey=key;
  activeGuideTab="overview";
  const p=document.getElementById("panel");
  p.className="panel p"+info.phase;
  const dstr=info.date.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"});
  document.getElementById("pMeta").textContent="Day "+info.dayN+" of "+TOTAL_DAYS+" · "+dstr+" · Phase "+info.phase;
  document.getElementById("pTitle").textContent=info.t;
  document.getElementById("pWeek").innerHTML="<b>Week "+info.week+"</b> — "+esc(info.theme);
  document.getElementById("pHrs").textContent="⏱ Planned: "+info.h;
  renderGuide(info);
  updateDoneBtn();
  document.getElementById("overlay").classList.add("open");
}
function linkListHtml(links){
  return (links||[]).map(a=>'<a href="'+escAttr(a[1])+'" target="_blank" rel="noopener">'+esc(a[0])+" ↗</a>").join("");
}
function guideSection(title, body){
  return '<div class="guide-section"><h3>'+esc(title)+'</h3><p>'+esc(body)+'</p></div>';
}
function guideBulletList(items){
  return '<ul class="lesson-focus">'+items.map(item=>'<li>'+esc(item)+'</li>').join("")+'</ul>';
}
function renderGuide(info){
  const tabs=document.getElementById("pTabs");
  const guideWrap=document.getElementById("pGuide");
  const tasks=document.getElementById("pTasks");
  const legacyLinks=document.getElementById("pLinks");
  const guide=info.guide;
  if(!guide){
    tabs.hidden=true;
    guideWrap.hidden=true;
    tasks.hidden=false;
    legacyLinks.hidden=false;
    tasks.innerHTML=info.d.map(t=>"<li>"+esc(t)+"</li>").join("");
    legacyLinks.innerHTML=linkListHtml(info.l);
    return;
  }
  tabs.hidden=false;
  guideWrap.hidden=false;
  tasks.hidden=true;
  tasks.innerHTML="";
  legacyLinks.hidden=true;
  legacyLinks.innerHTML="";

  const chips=info.g.map(t=>'<span class="chip '+t+'">'+t+"</span>").join("");
  const sources=linkListHtml(info.l);
  const lessonFocus=Array.isArray(guide.lessonFocus)&&guide.lessonFocus.length?guide.lessonFocus:[guide.summary].filter(Boolean);
  document.getElementById("panelOverview").innerHTML=
    guideSection("Goal", guide.goal)
    +guideSection("Why It Matters", guide.why)
    +'<div class="guide-section guide-facts"><h3>Session</h3>'
    +'<div class="fact-row"><span>Planned</span><b>'+esc(info.h)+'</b></div>'
    +'<div class="fact-row"><span>Tags</span><span class="guide-chips">'+chips+'</span></div>'
    +(lessonFocus.length?'<div class="focus-row"><span>Lesson</span>'+guideBulletList(lessonFocus)+'</div>':'')
    +(sources?'<div class="links guide-links">'+sources+'</div>':'')
    +'</div>'
    +guideSection("AI Rule", guide.rule);
  document.getElementById("panelSteps").innerHTML=
    '<ol class="guide-steps">'+guide.steps.map((step,i)=>
      '<li><span class="step-num">'+(i+1)+'</span><p>'+esc(step)+'</p></li>'
    ).join("")+'</ol>';
  document.getElementById("panelFinish").innerHTML=
    guideSection("Done Means", guide.done)
    +guideSection("Coach Prompt", guide.coach)
    +guideSection("Reflect", guide.reflect);
  setGuideTab(activeGuideTab);
}
function setGuideTab(tab){
  if(!GUIDE_TABS.includes(tab))tab="overview";
  activeGuideTab=tab;
  GUIDE_TABS.forEach(name=>{
    const selected=name===tab;
    const btn=document.getElementById("tab"+name[0].toUpperCase()+name.slice(1));
    const panel=document.getElementById("panel"+name[0].toUpperCase()+name.slice(1));
    btn.setAttribute("aria-selected",selected?"true":"false");
    btn.tabIndex=selected?0:-1;
    panel.hidden=!selected;
    panel.classList.toggle("active",selected);
  });
}
function updateDoneBtn(){
  const b=document.getElementById("doneBtn");
  if(done.has(DAYMAP[openKey].dayN)){b.textContent="✓ Done — tap to undo";b.classList.add("is-done");}
  else{b.textContent="Mark day complete";b.classList.remove("is-done");}
}
document.getElementById("pTabs").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-tab]");
  if(btn)setGuideTab(btn.dataset.tab);
});
document.getElementById("pTabs").addEventListener("keydown",e=>{
  if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;
  e.preventDefault();
  const cur=GUIDE_TABS.indexOf(activeGuideTab);
  let next=cur;
  if(e.key==="ArrowLeft")next=(cur+GUIDE_TABS.length-1)%GUIDE_TABS.length;
  if(e.key==="ArrowRight")next=(cur+1)%GUIDE_TABS.length;
  if(e.key==="Home")next=0;
  if(e.key==="End")next=GUIDE_TABS.length-1;
  setGuideTab(GUIDE_TABS[next]);
  document.querySelector('#pTabs button[data-tab="'+GUIDE_TABS[next]+'"]').focus();
});
document.getElementById("doneBtn").addEventListener("click",()=>{
  if(!openKey)return;
  const n=DAYMAP[openKey].dayN;
  if(done.has(n)){
    done.delete(n);
    if(typeof Game!=="undefined")Game.recordActivity(n,false);
  }else{
    done.add(n);
    if(typeof Game!=="undefined"){Game.recordActivity(n,true);Game.xpFlash(n);}
  }
  saveProgress();updateDoneBtn();render();
});
document.getElementById("closeBtn").addEventListener("click",closePanel);
document.getElementById("overlay").addEventListener("click",e=>{if(e.target.id==="overlay")closePanel();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closePanel();});
function closePanel(){
  document.getElementById("overlay").classList.remove("open");
  // hand keyboard focus back to the day cell the panel was showing
  if(openKey){
    const cell=document.querySelector('.cell[data-key="'+openKey+'"]');
    if(cell)cell.focus();
  }
  openKey=null;
}
function shiftDay(n){
  if(!openKey)return;
  const d=new Date(DAYMAP[openKey].date);d.setDate(d.getDate()+n);
  const k=iso(d);
  if(DAYMAP[k]){
    const mi=MONTHS.findIndex(mm=>mm[0]===d.getFullYear()&&mm[1]===d.getMonth());
    if(mi>=0&&mi!==viewIdx){viewIdx=mi;render();}
    openDay(k);
  }
}
document.getElementById("prevD").addEventListener("click",()=>shiftDay(-1));
document.getElementById("nextD").addEventListener("click",()=>shiftDay(1));
document.getElementById("prevM").addEventListener("click",()=>{if(viewIdx>0){viewIdx--;render();}});
document.getElementById("nextM").addEventListener("click",()=>{if(viewIdx<MONTHS.length-1){viewIdx++;render();}});
document.getElementById("todayBtn").addEventListener("click",()=>{
  const t=new Date();
  let mi=MONTHS.findIndex(mm=>mm[0]===t.getFullYear()&&mm[1]===t.getMonth());
  if(mi<0)mi=0;
  viewIdx=mi;render();
  if(DAYMAP[todayISO()])openDay(todayISO());
});
document.querySelectorAll(".phase").forEach(el=>{
  el.tabIndex=0;
  el.setAttribute("role","button");
  el.setAttribute("aria-label",el.querySelector("h3").textContent);
  el.addEventListener("click",()=>{
    const d=new Date(el.dataset.goto+"T12:00:00");
    const mi=MONTHS.findIndex(mm=>mm[0]===d.getFullYear()&&mm[1]===d.getMonth());
    if(mi>=0){viewIdx=mi;render();}
  });
  el.addEventListener("keydown",e=>{
    if(e.key==="Enter"||e.key===" "){e.preventDefault();el.click();}
  });
});
loadProgress();
