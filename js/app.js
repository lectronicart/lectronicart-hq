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
    if(raw){done=new Set(JSON.parse(raw));}
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
    c.className="cell p"+info.phase+(info.rest?" rest":"")+(done.has(key)?" done":"")+(key===tISO?" today":"");
    c.innerHTML='<span class="dnum">'+d+'<span class="daycount">d'+info.dayN+"</span></span>"
      +'<span class="ttl">'+esc(info.t)+"</span>"
      +'<span class="preview">'+esc(info.d[0])+"</span>"
      +'<span class="chips">'+info.g.map(t=>'<span class="chip '+t+'">'+t+"</span>").join("")+"</span>";
    c.addEventListener("click",()=>openDay(key));
    grid.appendChild(c);
  }
  const wb=document.getElementById("weekBanner");
  const inMonth=Object.values(DAYMAP).filter(x=>x.date.getMonth()===m&&x.date.getFullYear()===y);
  if(inMonth.length){
    const themes=[...new Set(inMonth.map(x=>"W"+x.week+": "+x.theme))];
    wb.innerHTML="<b>This month:</b> "+themes.join(" · ");
  }else wb.textContent="";
  renderTerm();
}
function renderTerm(){
  const n=done.size, pct=Math.round(n/TOTAL_DAYS*100);
  const filled=Math.round(pct/100*24);
  document.getElementById("termbar").textContent="▓".repeat(filled)+"░".repeat(24-filled);
  document.getElementById("termpct").textContent=" "+n+"/"+TOTAL_DAYS+" days ("+pct+"%)"+(memoryOnly?" · saving off — progress won't persist":"");
}
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;");}

let openKey=null;
function openDay(key){
  const info=DAYMAP[key]; if(!info)return;
  openKey=key;
  const p=document.getElementById("panel");
  p.className="panel p"+info.phase;
  const dstr=info.date.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"});
  document.getElementById("pMeta").textContent="Day "+info.dayN+" of "+TOTAL_DAYS+" · "+dstr+" · Phase "+info.phase;
  document.getElementById("pTitle").textContent=info.t;
  document.getElementById("pWeek").innerHTML="<b>Week "+info.week+"</b> — "+esc(info.theme);
  document.getElementById("pHrs").textContent="⏱ Planned: "+info.h;
  document.getElementById("pTasks").innerHTML=info.d.map(t=>"<li>"+esc(t)+"</li>").join("");
  const links=document.getElementById("pLinks");
  links.innerHTML=(info.l||[]).map(a=>'<a href="'+a[1]+'" target="_blank" rel="noopener">'+esc(a[0])+" ↗</a>").join("");
  updateDoneBtn();
  document.getElementById("overlay").classList.add("open");
}
function updateDoneBtn(){
  const b=document.getElementById("doneBtn");
  if(done.has(openKey)){b.textContent="✓ Done — tap to undo";b.classList.add("is-done");}
  else{b.textContent="Mark day complete";b.classList.remove("is-done");}
}
document.getElementById("doneBtn").addEventListener("click",()=>{
  if(!openKey)return;
  if(done.has(openKey))done.delete(openKey);else done.add(openKey);
  saveProgress();updateDoneBtn();render();
});
document.getElementById("closeBtn").addEventListener("click",closePanel);
document.getElementById("overlay").addEventListener("click",e=>{if(e.target.id==="overlay")closePanel();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closePanel();});
function closePanel(){document.getElementById("overlay").classList.remove("open");openKey=null;}
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
  el.addEventListener("click",()=>{
    const d=new Date(el.dataset.goto+"T12:00:00");
    const mi=MONTHS.findIndex(mm=>mm[0]===d.getFullYear()&&mm[1]===d.getMonth());
    if(mi>=0){viewIdx=mi;render();}
  });
});
loadProgress();
