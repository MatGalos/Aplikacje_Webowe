(()=>{"use strict";class t{deleteNote(t){let e=this.getNotes().filter((e=>e.id!=t));localStorage.setItem("notes",JSON.stringify(e))}addNote(t){let e,n=localStorage.getItem("notes");e=JSON.parse(n),e||(e=[]),e.push(t),localStorage.setItem("notes",JSON.stringify(e))}getNotes(){let t=localStorage.getItem("notes");return JSON.parse(t)}}class e{id;title;content;createdAt;constructor(t,e){this.id=class{static newGuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}}.newGuid(),this.title=t,this.content=e,this.createdAt=new Date}}class n{deleteNote(t){let e,n=sessionStorage.getItem("notes");e=JSON.parse(n);let s=e.filter((e=>e.id!=t));sessionStorage.setItem("notes",JSON.stringify(s))}addNote(t){let e,n=sessionStorage.getItem("notes");e=JSON.parse(n),e||(e=[]),e.push(t),sessionStorage.setItem("notes",JSON.stringify(e))}getNotes(){let t=sessionStorage.getItem("notes");return JSON.parse(t)}}(new class{notesContainer;storage;lstorage;constructor(){this.storage=new n,this.lstorage=new t,this.addTitleInput(),this.addContentInput(),this.addButton(),this.notesContainer=document.createElement("div"),document.body.append(this.notesContainer)}addTitleInput(){const t=document.createElement("div"),e=document.createElement("span");e.textContent="Title:";const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("id","title"),t.appendChild(e),t.appendChild(n),document.body.appendChild(t)}addContentInput(){const t=document.createElement("div"),e=document.createElement("span");e.textContent="Content:";const n=document.createElement("textarea");n.setAttribute("id","content"),t.appendChild(e),t.appendChild(n),document.body.appendChild(t)}addButton(){const t=document.createElement("div"),n=document.createElement("button");n.textContent="Add",n.addEventListener("click",(()=>{let t=document.getElementById("title").value,n=document.getElementById("content").value;this.storage.addNote(new e(t,n)),this.lstorage.addNote(new e(t,n)),this.refreshList()})),t.appendChild(n),document.body.appendChild(t)}refreshList(){this.notesContainer.innerHTML="";const t=this.storage.getNotes(),e=this.lstorage.getNotes();(t||e)&&t.forEach((t=>{const e=document.createElement("div");e.innerHTML=t.title;const n=document.createElement("div");n.innerHTML=t.content;const s=document.createElement("button");s.textContent="Remove",s.setAttribute("data-id",t.id.toString()),s.addEventListener("click",(t=>{const e=t.target.getAttribute("data-id");this.storage.deleteNote(e),this.lstorage.deleteNote(e),this.refreshList()})),this.notesContainer.appendChild(e),this.notesContainer.appendChild(n),this.notesContainer.appendChild(s),this.notesContainer.appendChild(document.createElement("hr"))}),this)}}).refreshList()})();