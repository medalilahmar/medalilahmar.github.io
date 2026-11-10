/* enhance.js — à charger APRÈS script.js. */
(()=>{
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Titre du poste écrit en tapant (relancé à chaque changement de langue)
  let typeTimer;
  function typeRole(delay=0){
    const el=$(".hero h2");if(!el||reduce)return;
    clearTimeout(typeTimer);
    const full=el.textContent;el.setAttribute("aria-label",full);
    el.textContent="";el.classList.add("typing");
    let i=0;
    const step=()=>{el.textContent=full.slice(0,++i);
      if(i<full.length)typeTimer=setTimeout(step,55);else el.classList.remove("typing")};
    typeTimer=setTimeout(step,delay);
  }

  // Langue mémorisée + détection du français
  const toggle=$("#lang-toggle");
  try{
    const saved=localStorage.getItem("lang");
    const pref=saved||((navigator.language||"").toLowerCase().startsWith("fr")?"fr":"en");
    if(pref==="fr"&&typeof setLanguage==="function")setLanguage("fr");
  }catch(e){}
  typeRole(700);
  toggle&&toggle.addEventListener("click",()=>{
    try{localStorage.setItem("lang",document.documentElement.lang)}catch(e){}
    typeRole();
  });

  // Apparition au défilement
  if(!reduce&&"IntersectionObserver" in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-in");io.unobserve(e.target)}}),{threshold:.12});
    [".section-heading",".about-copy",".quick-facts>div",".skill-card",".project-card",".timeline-item",".contact-box"]
      .forEach(sel=>$$(sel).forEach((el,i)=>{el.classList.add("js-reveal");el.style.setProperty("--d",(i%4)*0.09+"s");io.observe(el)}));
  }

  // Barre de progression, ombre de l'en-tête
  const bar=document.createElement("div");bar.className="e-progress";document.body.prepend(bar);
  const header=$(".site-header");
  const onScroll=()=>{const h=document.documentElement;
    bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%";
    header&&header.classList.toggle("scrolled",h.scrollTop>10)};
  addEventListener("scroll",onScroll,{passive:true});onScroll();

  // Lien de menu actif
  const links=$$("#nav-links a[href^='#']");
  const spy=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting)links.forEach(a=>a.classList.toggle("is-active",a.getAttribute("href")==="#"+e.target.id))
  }),{rootMargin:"-45% 0px -50% 0px"});
  $$("main section[id]").forEach(s=>spy.observe(s));

  // Inclinaison des cartes + déplacement léger de la photo (souris uniquement)
  if(!reduce&&matchMedia("(hover:hover)").matches){
    $$(".project-card,.skill-card").forEach(c=>{
      c.classList.add("tilt");
      c.addEventListener("mousemove",e=>{
        const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        c.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-4px)`});
      c.addEventListener("mouseleave",()=>c.style.transform="");
    });
    const photo=$(".hero-photo"),hero=$("#home");
    if(photo&&hero)hero.addEventListener("mousemove",e=>{
      photo.style.transform=`translate(${(e.clientX/innerWidth-.5)*14}px,${(e.clientY/innerHeight-.5)*14}px)`});
  }
})();