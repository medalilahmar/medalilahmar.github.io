const translations={
en:{skip:"Skip to content",navAbout:"About",navSkills:"Skills",navProjects:"Projects",navJourney:"Journey",navContact:"Contact",status:"Open to Cloud & DevOps opportunities",hello:"HELLO, I'M",heroDesc:"I build, automate and secure cloud-native environments through DevOps, DevSecOps and cybersecurity practices.",ctaProjects:"Explore my projects",ctaCV:"View my CV",ctaContact:"Get in touch",s1:"Projects",s2:"Tech domains",s3:"Technologies",s4:"Cloud platforms",aboutEyebrow:"A LITTLE ABOUT ME",aboutTitle:"Connecting infrastructure,<br>automation & security.",aboutText:"I am a computer engineering graduate focused on Cloud Computing, DevOps and cybersecurity. I enjoy automating infrastructure, improving delivery pipelines and integrating security throughout the software lifecycle.",aboutText2:"This portfolio showcases selected academic and engineering projects, the tools I work with, and my continuous learning journey.",f1:"Infrastructure & platforms",f2:"Security automation",f3:"Reliable delivery",skillsEyebrow:"TOOLS OF THE TRADE",skillsTitle:"Skills & technologies",skillsSub:"Technologies used across my labs, projects and learning.",skillsNote:"Skills reflect technologies explored in projects and labs; experience levels vary by tool.",projEyebrow:"SELECTED WORK",projTitle:"Projects that put ideas to work.",allGh:"All projects on GitHub",p1c:"Final-year project",p1:"A DevSecOps platform concept combining automated security scans, centralized findings, risk prioritization and an ML-assisted analysis workflow.",p2c:"Cloud security project",p2:"A cloud security lab integrating AWS CloudTrail logs with S3 and a Wazuh-based SIEM for monitoring and threat visibility.",p3c:"Infrastructure lab",p3:"A private-cloud project focused on high availability, Kubernetes, Docker, Ansible-based infrastructure as code, and Prometheus/Grafana monitoring.",p4c:"Internship project",p4:"Automation work involving Python, XML, desktop tooling and container/configuration workflows using Docker and Ansible.",repo:"View repository",viewProfile:"View GitHub profile",repoNote:"Project links currently lead to my GitHub profile. Replace each link with its exact repository URL before publishing.",jEyebrow:"BACKGROUND",jTitle:"Education & learning",e1d:"Engineering degree",e1t:"Computer Engineering — ESPRIT",e1p:"Focus: Software Development, Cloud Computing, Cybersecurity and DevOps.",e2t:"Cloud Foundations & Operations",e2p:"Training in cloud fundamentals, cloud security foundations and cloud operations.",cEyebrow:"LET'S CONNECT",cTitle:"Building something reliable?",cText:"I’m interested in opportunities around Cloud, DevOps, DevSecOps and infrastructure automation.",mail:"Email me",copy:"Copy email",copied:"Copied ✓",dl:"Download CV",rights:"Built with care.",title:"Mohamed Ali Lahmer | Cloud & DevOps Engineer",roles:["Cloud & DevOps Engineer","DevSecOps Enthusiast","Infrastructure Automation"]},
fr:{skip:"Aller au contenu",navAbout:"À propos",navSkills:"Compétences",navProjects:"Projets",navJourney:"Parcours",navContact:"Contact",status:"Ouvert aux opportunités Cloud & DevOps",hello:"BONJOUR, JE SUIS",heroDesc:"Je conçois, automatise et sécurise des environnements cloud grâce aux pratiques DevOps, DevSecOps et cybersécurité.",ctaProjects:"Découvrir mes projets",ctaCV:"Voir mon CV",ctaContact:"Me contacter",s1:"Projets",s2:"Domaines techniques",s3:"Technologies",s4:"Plateformes cloud",aboutEyebrow:"À PROPOS DE MOI",aboutTitle:"Relier infrastructure,<br>automatisation et sécurité.",aboutText:"Je suis diplômé en ingénierie informatique, avec un intérêt particulier pour le Cloud Computing, le DevOps et la cybersécurité. J’aime automatiser les infrastructures, améliorer les pipelines de livraison et intégrer la sécurité tout au long du cycle de vie logiciel.",aboutText2:"Ce portfolio présente une sélection de projets académiques et techniques, les outils que j’utilise et mon parcours d’apprentissage continu.",f1:"Infrastructure et plateformes",f2:"Automatisation de la sécurité",f3:"Livraison fiable",skillsEyebrow:"MES OUTILS",skillsTitle:"Compétences et technologies",skillsSub:"Technologies utilisées dans mes projets, laboratoires et formations.",skillsNote:"Ces compétences reflètent les technologies explorées dans mes projets et laboratoires ; le niveau varie selon l’outil.",projEyebrow:"PROJETS SÉLECTIONNÉS",projTitle:"Des idées concrétisées par la pratique.",allGh:"Tous mes projets sur GitHub",p1c:"Projet de fin d’études",p1:"Concept de plateforme DevSecOps combinant scans de sécurité automatisés, centralisation des vulnérabilités, priorisation des risques et analyse assistée par le machine learning.",p2c:"Projet de sécurité cloud",p2:"Laboratoire de sécurité cloud intégrant les journaux AWS CloudTrail avec S3 et un SIEM basé sur Wazuh pour la surveillance et la détection.",p3c:"Laboratoire infrastructure",p3:"Projet de cloud privé axé sur la haute disponibilité, Kubernetes, Docker, l’infrastructure as code avec Ansible et la supervision Prometheus/Grafana.",p4c:"Projet de stage",p4:"Travaux d’automatisation avec Python, XML et des outils desktop, ainsi que des workflows de conteneurisation et de configuration avec Docker et Ansible.",repo:"Voir le dépôt",viewProfile:"Voir mon profil GitHub",repoNote:"Les liens des projets pointent actuellement vers mon profil GitHub. Remplace chaque lien par l’URL exacte du dépôt avant publication.",jEyebrow:"PARCOURS",jTitle:"Formation et apprentissage",e1d:"Diplôme d’ingénieur",e1t:"Ingénierie informatique — ESPRIT",e1p:"Spécialités : développement logiciel, Cloud Computing, cybersécurité et DevOps.",e2t:"Cloud Foundations & Operations",e2p:"Formations en fondamentaux du cloud, sécurité cloud et opérations cloud.",cEyebrow:"RESTONS EN CONTACT",cTitle:"Construisons des solutions fiables.",cText:"Je recherche des opportunités dans le Cloud, le DevOps, le DevSecOps et l’automatisation des infrastructures.",mail:"M’écrire",copy:"Copier l’e-mail",copied:"Copié ✓",dl:"Télécharger mon CV",rights:"Réalisé avec soin.",title:"Mohamed Ali Lahmer | Ingénieur Cloud & DevOps",roles:["Ingénieur Cloud & DevOps","Passionné DevSecOps","Automatisation d’infrastructure"]}};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches,root=document.documentElement;
let lang="en",ri=0,ci=0,del=false,tt;
function type(){
  const roles=translations[lang].roles,w=roles[ri%roles.length],el=$("#typed");
  if(reduce){el.textContent=roles[0];return}
  el.textContent=w.slice(0,ci);
  if(!del&&ci===w.length){del=true;tt=setTimeout(type,1700);return}
  if(del&&ci===0){del=false;ri++}
  ci+=del?-1:1;tt=setTimeout(type,del?35:75);
}
function setLanguage(l){
  lang=l;root.lang=l;try{localStorage.setItem("lang",l)}catch(e){}
  $$("[data-i18n]").forEach(el=>{const v=translations[l][el.dataset.i18n];if(v!==undefined)el.innerHTML=v});
  const b=$("#lang-toggle");b.textContent=l==="en"?"FR":"EN";b.setAttribute("aria-label",l==="en"?"Passer en français":"Switch to English");
  document.title=translations[l].title;ri=0;ci=0;del=false;clearTimeout(tt);type();
  $$("[data-cv]").forEach(a=>a.href="assets/cv-"+l+".pdf");
}
$("#lang-toggle").addEventListener("click",()=>setLanguage(lang==="en"?"fr":"en"));
// Thème
const tb=$("#theme-toggle"),paintTheme=()=>tb.textContent=root.dataset.theme==="light"?"☀":"☾";
tb.addEventListener("click",()=>{const t=root.dataset.theme==="light"?"dark":"light";root.dataset.theme=t;try{localStorage.setItem("theme",t)}catch(e){}paintTheme()});
paintTheme();
// Menu
const nav=$("#nav-links"),mt=$("#menu-toggle");
mt.addEventListener("click",()=>{const o=nav.classList.toggle("open");mt.setAttribute("aria-expanded",o)});
$$("a",nav).forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");mt.setAttribute("aria-expanded","false")}));
$("#year").textContent=new Date().getFullYear();
// Copier l'e-mail
$("#copy-mail").addEventListener("click",async e=>{
  try{await navigator.clipboard.writeText("medalilahmar00@gmail.com")}catch(_){}
  const b=e.currentTarget;b.textContent=translations[lang].copied;setTimeout(()=>b.textContent=translations[lang].copy,1800);
});
// Bandeau de technologies
const techs=[...new Set($$(".tags span").map(s=>s.textContent))],tr=$("#track");
tr.innerHTML=[...techs,...techs].map(t=>`<span>${t}</span>`).join("");
// Apparition + compteurs
const count=el=>{
  const n=+el.dataset.count,s=el.dataset.suffix||"";
  if(reduce){el.textContent=n+s;return}
  const t0=performance.now(),d=1400;
  (function f(t){const p=Math.min((t-t0)/d,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(t0);
};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");$$("[data-count]",e.target).forEach(count);io.unobserve(e.target)}}),{threshold:.12});
$$(".rv").forEach((el,i)=>{el.style.setProperty("--d",(i%4)*.09+"s");io.observe(el)});
// Menu actif, progression, ombre d'en-tête
const links=$$("a",nav),spy=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))
}),{rootMargin:"-45% 0px -50% 0px"});
$$("main section[id]").forEach(s=>spy.observe(s));
const hd=$(".site-header"),pg=$("#progress");
const onScroll=()=>{pg.style.width=(root.scrollTop/(root.scrollHeight-root.clientHeight)*100)+"%";hd.classList.toggle("scrolled",root.scrollTop>10)};
addEventListener("scroll",onScroll,{passive:true});onScroll();
// Cartes : halo qui suit la souris + inclinaison ; photo qui suit la souris
if(!reduce&&matchMedia("(hover:hover)").matches){
  $$(".card").forEach(c=>{
    c.addEventListener("mousemove",e=>{
      const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
      c.style.setProperty("--mx",x*100+"%");c.style.setProperty("--my",y*100+"%");
      c.style.transform=`perspective(900px) rotateY(${(x-.5)*6}deg) rotateX(${-(y-.5)*6}deg) translateY(-4px)`;
    });
    c.addEventListener("mouseleave",()=>c.style.transform="");
  });
  const p=$(".portrait");
  $("#home").addEventListener("mousemove",e=>{p.style.transform=`translate(${(e.clientX/innerWidth-.5)*14}px,${(e.clientY/innerHeight-.5)*14}px)`});
  p.style.transition="transform .3s ease-out";
}
let saved=null;try{saved=localStorage.getItem("lang")}catch(e){}
setLanguage(saved||((navigator.language||"").toLowerCase().startsWith("fr")?"fr":"en"));