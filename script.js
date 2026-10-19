const translations = {
  en: {
    skip:"Skip to content",navAbout:"About",navSkills:"Skills",navProjects:"Projects",navContact:"Contact",
    availability:"Open to Cloud & DevOps opportunities",hello:"HELLO, I'M",role:"Cloud & DevOps Engineer",
    heroDescription:"I build, automate and secure cloud-native environments through DevOps, DevSecOps and cybersecurity practices.",
    exploreProjects:"Explore my projects",viewCV:"View my CV ↗",getInTouch:"Get in touch",pipelineReady:"Pipeline ready",scroll:"Scroll to discover",
    aboutEyebrow:"A LITTLE ABOUT ME",aboutTitle:"Connecting infrastructure,<br>automation & security.",
    aboutText:"I am a computer engineering graduate focused on Cloud Computing, DevOps and cybersecurity. I enjoy automating infrastructure, improving delivery pipelines and integrating security throughout the software lifecycle.",
    aboutText2:"This portfolio showcases selected academic and engineering projects, the tools I work with, and my continuous learning journey.",
    factCloud:"Infrastructure & platforms",factSecurity:"Security automation",factCICD:"Reliable delivery",
    skillsEyebrow:"TOOLS OF THE TRADE",skillsTitle:"Skills & technologies",skillsSubtitle:"Technologies used across my labs, projects and learning.",
    skillsNote:"Skills reflect technologies explored in projects and labs; experience levels vary by tool.",
    projectsEyebrow:"SELECTED WORK",projectsTitle:"Projects that put ideas to work.",allGithub:"All projects on GitHub",
    projectPFE:"Final-year project",invisiDesc:"A DevSecOps platform concept combining automated security scans, centralized findings, risk prioritization and an ML-assisted analysis workflow.",
    viewRepository:"View repository",projectCloud:"Cloud security project",cloudDesc:"A cloud security lab integrating AWS CloudTrail logs with S3 and a Wazuh-based SIEM for monitoring and threat visibility.",
    projectInfra:"Infrastructure lab",rifDesc:"A cloud infrastructure project exploring private-cloud concepts and the management of compute, network and storage resources.",
    projectInternship:"Internship project",automationDesc:"Automation work involving Python, XML, desktop tooling and container/configuration workflows using Docker and Ansible.",
    viewProfile:"View GitHub profile",repoNote:"Project links currently lead to my GitHub profile. Replace each link with its exact repository URL before publishing.",
    journeyEyebrow:"BACKGROUND",journeyTitle:"Education & learning",graduateDate:"Engineering degree",degreeTitle:"Computer Engineering — ESPRIT",
    degreeDesc:"Focus: Software Development, Cloud Computing, Cybersecurity and DevOps.",awsTitle:"Cloud Foundations & Operations",
    awsDesc:"Training in cloud fundamentals, cloud security foundations and cloud operations.",
    contactEyebrow:"LET'S CONNECT",contactTitle:"Building something reliable?",contactDesc:"I’m interested in opportunities around Cloud, DevOps, DevSecOps and infrastructure automation.",
    downloadCV:"Download CV ↓",emailMe:"Email me ↗",emailHint:"",rights:"Built with care."
  },
  fr: {
    skip:"Aller au contenu",navAbout:"À propos",navSkills:"Compétences",navProjects:"Projets",navContact:"Contact",
    availability:"Ouvert aux opportunités Cloud & DevOps",hello:"BONJOUR, JE SUIS",role:"Ingénieur Cloud & DevOps",
    heroDescription:"Je conçois, automatise et sécurise des environnements cloud grâce aux pratiques DevOps, DevSecOps et cybersécurité.",
    exploreProjects:"Découvrir mes projets",viewCV:"Voir mon CV ↗",getInTouch:"Me contacter",pipelineReady:"Pipeline prêt",scroll:"Défiler pour découvrir",
    aboutEyebrow:"À PROPOS DE MOI",aboutTitle:"Relier infrastructure,<br>automatisation et sécurité.",
    aboutText:"Je suis diplômé en ingénierie informatique, avec un intérêt particulier pour le Cloud Computing, le DevOps et la cybersécurité. J’aime automatiser les infrastructures, améliorer les pipelines de livraison et intégrer la sécurité tout au long du cycle de vie logiciel.",
    aboutText2:"Ce portfolio présente une sélection de projets académiques et techniques, les outils que j’utilise et mon parcours d’apprentissage continu.",
    factCloud:"Infrastructure et plateformes",factSecurity:"Automatisation de la sécurité",factCICD:"Livraison fiable",
    skillsEyebrow:"MES OUTILS",skillsTitle:"Compétences et technologies",skillsSubtitle:"Technologies utilisées dans mes projets, laboratoires et formations.",
    skillsNote:"Ces compétences reflètent les technologies explorées dans mes projets et laboratoires ; le niveau varie selon l’outil.",
    projectsEyebrow:"PROJETS SÉLECTIONNÉS",projectsTitle:"Des idées concrétisées par la pratique.",allGithub:"Tous mes projets sur GitHub",
    projectPFE:"Projet de fin d’études",invisiDesc:"Concept de plateforme DevSecOps combinant des scans de sécurité automatisés, la centralisation des vulnérabilités, la priorisation des risques et une analyse assistée par le machine learning.",
    viewRepository:"Voir le dépôt",projectCloud:"Projet de sécurité cloud",cloudDesc:"Laboratoire de sécurité cloud intégrant les journaux AWS CloudTrail avec S3 et un SIEM basé sur Wazuh pour la surveillance et la détection.",
    projectInfra:"Laboratoire infrastructure",rifDesc:"Projet d’infrastructure cloud explorant les concepts de cloud privé et la gestion des ressources de calcul, réseau et stockage.",
    projectInternship:"Projet de stage",automationDesc:"Travaux d’automatisation avec Python, XML et des outils desktop, ainsi que des workflows de conteneurisation et de configuration avec Docker et Ansible.",
    viewProfile:"Voir mon profil GitHub",repoNote:"Les liens des projets pointent actuellement vers mon profil GitHub. Remplace chaque lien par l’URL exacte du dépôt avant publication.",
    journeyEyebrow:"PARCOURS",journeyTitle:"Formation et apprentissage",graduateDate:"Diplôme d’ingénieur",degreeTitle:"Ingénierie informatique — ESPRIT",
    degreeDesc:"Spécialités : développement logiciel, Cloud Computing, cybersécurité et DevOps.",awsTitle:"Cloud Foundations & Operations",
    awsDesc:"Formations en fondamentaux du cloud, sécurité cloud et opérations cloud.",
    contactEyebrow:"RESTONS EN CONTACT",contactTitle:"Construisons des solutions fiables.",contactDesc:"Je recherche des opportunités dans le Cloud, le DevOps, le DevSecOps et l’automatisation des infrastructures.",
    downloadCV:"Télécharger mon CV ↓",emailMe:"M’écrire ↗",emailHint:"",rights:"Réalisé avec soin."
  }
};
let currentLang = "en";
const langToggle = document.getElementById("lang-toggle");
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = translations[lang][el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  langToggle.textContent = lang === "en" ? "FR" : "EN";
  langToggle.setAttribute("aria-label", lang === "en" ? "Switch to French" : "Passer en anglais");
  document.title = lang === "en" ? "Mohamed Ali Lahmer | Cloud & DevOps Engineer" : "Mohamed Ali Lahmer | Ingénieur Cloud & DevOps";
}
langToggle.addEventListener("click", () => setLanguage(currentLang === "en" ? "fr" : "en"));
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
