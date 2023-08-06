"use strict";

const categoryEl = document.querySelector(".categories");
const categoryEls = document.querySelectorAll(".category");

const projectsEl = document.querySelector(".projects");
const projectEls = document.querySelectorAll(".project");

categoryEl.addEventListener("click", e => {
  const filter = e.target.dataset.type;

  if (!filter) {
    return;
  }

  handleActiveSelection(e.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projectsEl.classList.add("anim-out");
  setTimeout(() => {
    projectEls.forEach(project => {
      if (filter === "All" || filter === project.dataset.type) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
    projectsEl.classList.remove("anim-out");
  }, 250);
}
