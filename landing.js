const background = document.querySelector(".bg");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const about = document.querySelector(".about");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");
const aboutInfo = document.getElementById("about-me");
const projectsInfo = document.getElementById("my-projects");
const contactInfo = document.getElementById("my-contacts");

//Controls the zoom out when first viewing the page
setTimeout(() => { 
  background.classList.remove("zoom");
}, 500);

setTimeout(() => {
  background.classList.remove("c");
}, 2000);

//Adds the title/subtitle | Moves the background image based on mouse position
setTimeout(() => {
  background.classList.remove("t");
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 7,
    y = (e.clientY - window.innerHeight / 2) / 7;
    background.style.backgroundPosition =
      "calc(50% + " + -x + "px) " + "calc(30% + " + -y + "px)";
  });
  title.style.display = "block";
  subtitle.style.display = "block";
}, 4000);

//Populates the nav links one at a time
setTimeout(() => {
  about.style.display = "block";
  about.classList.add("fade-in");  
}, 5000);

setTimeout(() => {
  projects.style.display = "block";
  projects.classList.add("fade-in"); 
}, 5600);

setTimeout(() => {
  contact.style.display = "block";
  contact.classList.add("fade-in"); 
}, 6200);

//Adds the "twinkle" effect to all of the header text
(function() {
  const text = title.innerText;
  title.innerText = "";
  for (let l in text) {
    const span = document.createElement("span");
    if (text[l] === " ") span.innerHTML = "&nbsp;"; 
    else span.innerText = text[l];
    title.append(span);
  }

  const text2 = subtitle.innerText;
  subtitle.innerText = "";
  for (let l in text2) {
    const span = document.createElement("span");
    if (text2[l] === " ") span.innerHTML = "&nbsp;";
    else span.innerText = text2[l];
    subtitle.append(span);
  }

  const text3 = about.innerText;
  about.innerText = "";
  for (let l in text3) {
    const span = document.createElement("span");
    if (text3[l] === " ") span.innerHTML = "&nbsp;";
    else span.innerText = text3[l];
    about.append(span);
  }

  const text4 = projects.innerText;
  projects.innerText = "";
  for (let l in text4) {
    const span = document.createElement("span");
    if (text4[l] === " ") span.innerHTML = "&nbsp;";
    else span.innerText = text4[l];
    projects.append(span);
  }

  const text5 = contact.innerText;
  contact.innerText = "";
  for (let l in text5) {
    const span = document.createElement("span");
    if (text5[l] === " ") span.innerHTML = "&nbsp;";
    else span.innerText = text5[l];
    contact.append(span);
  }
})();

setInterval(() => {
  const spans = document.querySelectorAll(":is(.title, .subtitle, .about, .projects, .contact) span");
  const i = Math.floor(Math.random() * spans.length);
  const j = Math.floor(Math.random() * spans.length);
  spans[i].style.opacity = Math.random() + 0.2;
  spans[j].style.opacity = Math.random() + 0.2;

  setTimeout(() => {
    spans[i].style.opacity = 1;
    spans[j].style.opacity = 1;
  }, 1000);
}, 300);

//Displays/Removes info based on which nav link is clicked
about.addEventListener('click', DisplayAboutInfo);
projects.addEventListener('click', DisplayProjectsInfo);
contact.addEventListener('click', DisplayContactInfo);

function DisplayAboutInfo(){
  aboutInfo.style.display = "block";
  projectsInfo.style.display = "none";
  contactInfo.style.display = "none";

  about.style.display = "none";
  projects.style.display = "block";
  contact.style.display = "block";

  aboutInfo.classList.add("fade-in");
  background.classList.add("zoom-out");
}

function DisplayProjectsInfo(){
  projectsInfo.style.display = "block";
  aboutInfo.style.display = "none";
  contactInfo.style.display = "none";

  about.style.display = "block";
  projects.style.display = "none";
  contact.style.display = "block";

  projectsInfo.classList.add("fade-in");
  background.classList.add("zoom-out");
}

function DisplayContactInfo(){
  contactInfo.style.display = "flex";
  projectsInfo.style.display = "none";
  aboutInfo.style.display = "none";

  about.style.display = "block";
  projects.style.display = "block";
  contact.style.display = "none";

  contactInfo.classList.add("fade-in");
  background.classList.add("zoom-out");
}