// document.addEventListener("DOMContentLoaded", () => {
//   const showBtn = document.getElementById("showProjects");
//   const modal = document.getElementById("projectsModal");
//   const closeBtn = document.getElementById("closeProjects");

 
//   showBtn.addEventListener("click", () => {
//     modal.classList.remove("hidden");
//   });

//   closeBtn.addEventListener("click", () => {
//     modal.classList.add("hidden");
//   });

 
//   window.addEventListener("click", (event) => {
//     if (event.target === modal) {
//       modal.classList.add("hidden");
//     }
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const contactBtn = document.getElementById("showContact");
//   const contactForm = document.getElementById("contactForm");

//   contactBtn.addEventListener("click", () => {
//     contactForm.classList.toggle("hidden");

//     if (!contactForm.classList.contains("hidden")) {
//       contactBtn.textContent = "Hide Contact";
//     } else {
//       contactBtn.textContent = "Contact";
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  // Projects Modal
  const showProjectsBtn = document.getElementById("showProjects");
  const projectsModal = document.getElementById("projectsModal");
  const closeProjectsBtn = document.getElementById("closeProjects");

  showProjectsBtn.addEventListener("click", () => {
    projectsModal.classList.remove("hidden");
  });

  closeProjectsBtn.addEventListener("click", () => {
    projectsModal.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === projectsModal) {
      projectsModal.classList.add("hidden");
    }
  });

  // Contact Modal
  const contactBtn = document.getElementById("showContact");
  const contactModal = document.getElementById("contactModal");
  const closeContactBtn = document.getElementById("closeContact");

  contactBtn.addEventListener("click", () => {
    contactModal.classList.remove("hidden");
  });

  closeContactBtn.addEventListener("click", () => {
    contactModal.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === contactModal) {
      contactModal.classList.add("hidden");
    }
  });
});
