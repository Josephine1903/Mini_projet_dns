// DARK MODE
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {
themeIcon.classList.replace("bi-moon-fill","bi-sun-fill");
loadParticles("#38bdf8");
} else {
themeIcon.classList.replace("bi-sun-fill","bi-moon-fill");
loadParticles("#2563eb");
}

});

// ================= NAV ACTIVE ON SCROLL =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// PARTICLES
function loadParticles(color) {
particlesJS("particles-js", {
particles: {
number: { value: 60 },
color: { value: color },
shape: { type: "circle" },
opacity: { value: 0.2 },
size: { value: 3 },
line_linked: {
enable: true,
distance: 150,
color: color,
opacity: 0.2,
width: 1
},
move: { enable: true, speed: 2 }
}
});
}

loadParticles("#2563eb");

// Animation spéciale Leader
gsap.from(".team-leader", {
  scrollTrigger: {
    trigger: ".team-leader",
    start: "top 80%"
  },
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  ease: "back.out(1.7)"
});

// Animation spéciale Leader
const missions = [

"Construire une infrastructure DNS sécurisée",

"Déployer une architecture Cloud performante",

"Garantir la haute disponibilité du réseau",

"Créer une solution DNS moderne et fiable"

];

let index = 0;
let charIndex = 0;

const missionText = document.getElementById("mission-text");

function typeMission(){

if(charIndex < missions[index].length){

missionText.textContent += missions[index].charAt(charIndex);

charIndex++;

setTimeout(typeMission,40);

}else{

setTimeout(nextMission,2000);

}

}

function nextMission(){

missionText.textContent="";

charIndex=0;

index++;

if(index>=missions.length){

index=0;

}

typeMission();

}

typeMission();

//SECTION SERVICES
const form = document.getElementById("serviceForm");
const confirmation = document.getElementById("confirmationMessage");

form.addEventListener("submit", function(){

setTimeout(function(){

confirmation.style.display="block";

},500);

});