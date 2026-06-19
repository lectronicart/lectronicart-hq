// ===== Journal window =====
// Notes are saved as plain text in localStorage while you work. Markdown files
// are created only when you export, because a static web page cannot quietly
// write into your project folder without asking.

var Journal=(function(){
  const KEY="coding101-journal-v1";
  const START=new Date(2026,5,15);
  const TOTAL_DAYS=252;
  const TEMPLATE=[
    "## What I Worked On",
    "",
    "## What I Learned",
    "",
    "## What Confused Me",
    "",
    "## Questions For Codex",
    "",
    "## Next Step",
    ""
  ].join("\n");

  function iso(d){
    return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
  }

  function esc(s){
    return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }

  function escAttr(s){
    return esc(s).replace(/"/g,"&quot;");
  }

  function buildDays(){
    const days=[];
    const cur=new Date(START);
    let dayN=1;
    WEEKS.forEach((week,weekIndex)=>{
      week.days.forEach(day=>{
        const date=new Date(cur);
        days.push({
          key:iso(date),
          date,
          dayN,
          week:weekIndex+1,
          phase:week.p,
          title:day.t
        });
        cur.setDate(cur.getDate()+1);
        dayN++;
      });
    });
    return days;
  }

  function loadEntries(){
    try{
      const raw=localStorage.getItem(KEY);
      return raw?JSON.parse(raw)||{}:{};
    }catch(e){
      return {};
    }
  }

  function saveEntries(entries){
    localStorage.setItem(KEY,JSON.stringify(entries));
  }

  function niceDate(date){
    return date.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});
  }

  function shortDate(date){
    return date.toLocaleDateString("en-US",{month:"short",day:"numeric"});
  }

  function hasText(value){
    return Boolean(String(value||"").trim());
  }

  function markdownFor(day,text){
    const body=hasText(text)?String(text).trim():TEMPLATE.trim();
    return "# "+day.key+" - Day "+day.dayN+"\n\n"
      +"## "+day.title+"\n\n"
      +body+"\n";
  }

  function downloadFile(win,filename,text){
    const blob=new Blob([text],{type:"text/markdown"});
    const url=URL.createObjectURL(blob);
    const a=win.document.createElement("a");
    a.href=url;
    a.download=filename;
    win.document.body.appendChild(a);
    a.click();
    win.document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function headAssets(){
    return Array.from(document.head.querySelectorAll('link[rel="preconnect"], link[rel="stylesheet"], style'))
      .map(el=>el.outerHTML)
      .join("\n");
  }

  function open(startKey){
    if(typeof WEEKS==="undefined"){
      alert("The journal needs js/data.js to load first.");
      return;
    }

    const days=buildDays();
    const dayByKey=Object.fromEntries(days.map(day=>[day.key,day]));
    let selectedKey=dayByKey[startKey]?startKey:days[0].key;
    let entries=loadEntries();

    const win=window.open("","builderCalendarJournal","width=1180,height=760,resizable=yes,scrollbars=yes");
    if(!win){
      alert("The browser blocked the journal window. Allow pop-ups for this file, then try again.");
      return;
    }

    win.document.open();
    win.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">'
      +'<meta name="viewport" content="width=device-width, initial-scale=1.0">'
      +'<base href="'+escAttr(document.baseURI)+'">'
      +'<title>Builder Calendar Journal</title>'
      +headAssets()
      +'</head><body class="journal-window">'
      +'<main class="journal-app">'
      +'<section class="journal-topbar">'
      +'<div><span class="journal-kicker">local markdown journal</span>'
      +'<h1>Builder Journal</h1>'
      +'<p>Write one plain Markdown note for each calendar day. The browser saves drafts locally; export Markdown files when you want to archive them in docs/journal.</p></div>'
      +'<div class="journal-actions">'
      +'<button id="journalSaveFiles" type="button">Save Markdown Files</button>'
      +'<button id="journalDownloadCurrent" type="button">Download Current</button>'
      +'</div>'
      +'</section>'
      +'<section class="journal-layout">'
      +'<aside class="journal-sidebar">'
      +'<label for="journalDaySelect">Choose entry</label>'
      +'<select id="journalDaySelect"></select>'
      +'<div class="journal-day-list" id="journalDayList"></div>'
      +'</aside>'
      +'<section class="journal-editor">'
      +'<div class="journal-entry-head">'
      +'<div class="meta" id="journalMeta"></div>'
      +'<h2 id="journalTitle"></h2>'
      +'<p id="journalTopic"></p>'
      +'</div>'
      +'<div class="journal-editor-actions">'
      +'<button id="journalTemplate" type="button">Use Template</button>'
      +'<span class="journal-status" id="journalStatus">Ready</span>'
      +'</div>'
      +'<textarea id="journalText" spellcheck="true" placeholder="Write your notes in Markdown here."></textarea>'
      +'</section>'
      +'<section class="journal-binder">'
      +'<div class="journal-binder-head">'
      +'<h2>Binder View</h2>'
      +'<p>All saved entries appear here together, oldest first.</p>'
      +'</div>'
      +'<div id="journalBinderEntries"></div>'
      +'</section>'
      +'</section>'
      +'</main>'
      +'</body></html>');
    win.document.close();
    win.focus();

    const doc=win.document;
    const select=doc.getElementById("journalDaySelect");
    const dayList=doc.getElementById("journalDayList");
    const meta=doc.getElementById("journalMeta");
    const title=doc.getElementById("journalTitle");
    const topic=doc.getElementById("journalTopic");
    const text=doc.getElementById("journalText");
    const status=doc.getElementById("journalStatus");
    const binder=doc.getElementById("journalBinderEntries");

    function setStatus(message){
      status.textContent=message;
    }

    function persist(){
      const value=text.value;
      if(hasText(value))entries[selectedKey]=value;
      else delete entries[selectedKey];
      try{
        saveEntries(entries);
        setStatus("Saved locally");
      }catch(e){
        setStatus("Saving is blocked in this browser");
      }
      renderDayList();
      renderBinder();
    }

    function selectDay(key){
      if(!dayByKey[key])return;
      selectedKey=key;
      renderSelected();
      renderDayList();
    }

    function renderSelected(){
      const day=dayByKey[selectedKey];
      select.value=selectedKey;
      meta.textContent=niceDate(day.date)+" · Day "+day.dayN+" of "+TOTAL_DAYS+" · Week "+day.week;
      title.textContent=day.title;
      topic.textContent="Markdown file: docs/journal/"+day.key+".md";
      text.value=entries[selectedKey]||"";
      setStatus(hasText(text.value)?"Saved locally":"Blank entry");
    }

    function renderDayList(){
      dayList.innerHTML="";
      days.forEach(day=>{
        const btn=doc.createElement("button");
        btn.type="button";
        btn.className=(day.key===selectedKey?"is-selected ":"")+(hasText(entries[day.key])?"has-entry":"");
        btn.innerHTML="<strong>Day "+day.dayN+" · "+shortDate(day.date)+"</strong><span>"+esc(day.title)+"</span>";
        btn.addEventListener("click",()=>selectDay(day.key));
        dayList.appendChild(btn);
      });
    }

    function renderBinder(){
      const written=days.filter(day=>hasText(entries[day.key]));
      binder.innerHTML="";
      if(!written.length){
        const empty=doc.createElement("p");
        empty.className="journal-empty";
        empty.textContent="No journal entries yet. Pick a day, write a few sentences, and they will appear here.";
        binder.appendChild(empty);
        return;
      }
      written.forEach(day=>{
        const article=doc.createElement("article");
        article.className="journal-binder-entry";
        article.innerHTML="<h3>"+esc(niceDate(day.date))+" · Day "+day.dayN+"</h3>"
          +"<p class=\"journal-topic\">"+esc(day.title)+"</p>"
          +"<pre></pre>";
        article.querySelector("pre").textContent=entries[day.key];
        binder.appendChild(article);
      });
    }

    async function saveMarkdownFiles(){
      const written=days.filter(day=>hasText(entries[day.key]));
      if(!written.length){
        setStatus("Write an entry first");
        return;
      }

      if("showDirectoryPicker" in win){
        try{
          const dir=await win.showDirectoryPicker({mode:"readwrite"});
          for(const day of written){
            const handle=await dir.getFileHandle(day.key+".md",{create:true});
            const writable=await handle.createWritable();
            await writable.write(markdownFor(day,entries[day.key]));
            await writable.close();
          }
          setStatus("Saved "+written.length+" Markdown file"+(written.length===1?"":"s"));
          return;
        }catch(e){
          if(e.name==="AbortError"){
            setStatus("Folder save canceled");
            return;
          }
          setStatus("Folder save failed; downloading instead");
        }
      }

      written.forEach(day=>{
        downloadFile(win,day.key+".md",markdownFor(day,entries[day.key]));
      });
      setStatus("Downloaded "+written.length+" Markdown file"+(written.length===1?"":"s"));
    }

    select.innerHTML=days.map(day=>
      '<option value="'+escAttr(day.key)+'">Day '+day.dayN+' · '+esc(shortDate(day.date))+' · '+esc(day.title)+'</option>'
    ).join("");
    select.addEventListener("change",()=>selectDay(select.value));
    text.addEventListener("input",persist);
    doc.getElementById("journalTemplate").addEventListener("click",()=>{
      if(hasText(text.value)&&!win.confirm("Replace this entry with the starter template?"))return;
      text.value=TEMPLATE;
      persist();
      text.focus();
    });
    doc.getElementById("journalDownloadCurrent").addEventListener("click",()=>{
      const day=dayByKey[selectedKey];
      downloadFile(win,day.key+".md",markdownFor(day,text.value));
      setStatus("Downloaded "+day.key+".md");
    });
    doc.getElementById("journalSaveFiles").addEventListener("click",saveMarkdownFiles);

    renderSelected();
    renderDayList();
    renderBinder();
    text.focus();
  }

  return {open,KEY};
})();
