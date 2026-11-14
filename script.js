const button=document.querySelector(".menu-button");
const nav=document.querySelector("#nav");
if(button&&nav){
  button.addEventListener("click",()=>{
    const open=button.getAttribute("aria-expanded")==="true";
    button.setAttribute("aria-expanded",String(!open));
    button.setAttribute("aria-label",open?"Avaa valikko":"Sulje valikko");
    nav.classList.toggle("open",!open);
  });
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    nav.classList.remove("open");
    button.setAttribute("aria-expanded","false");
    button.setAttribute("aria-label","Avaa valikko");
  }));
}
const year=document.querySelector("#year");
if(year)year.textContent=new Date().getFullYear();
const form=document.querySelector("#contact-form");
if(form)form.addEventListener("submit",event=>{
  event.preventDefault();
  const data=new FormData(form);
  const recipient="jouni.a.tormanen@gmail.com";
  const subject="Aava Marine – yhteydenotto: "+(data.get("purpose")||"Yhteydenotto");
  const body=[
    "Aava Marinen verkkosivujen yhteydenotto",
    "",
    "Asia: "+(data.get("purpose")||""),
    "Nimi: "+(data.get("name")||""),
    "Sähköposti: "+(data.get("email")||""),
    "Vene tai hakutoive: "+(data.get("boat")||""),
    "",
    "Lisätietoja:",
    (data.get("message")||"")
  ].join("\\n");
  const mailto="mailto:"+recipient+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
  const status=document.querySelector("#form-status");
  status.textContent="Sähköpostiohjelmasi avautuu valmiilla viestillä. Tarkista viesti ja paina Lähetä.";
  window.location.href=mailto;
});