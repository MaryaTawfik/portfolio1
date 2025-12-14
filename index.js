document.addEventListener("DOMContentLoaded", () => {
  const showBtn = document.getElementById("showProjects");
  const modal = document.getElementById("projectsModal");
  const closeBtn = document.getElementById("closeProjects");

 
  showBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

 
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.getElementById("showContact");
  const contactForm = document.getElementById("contactForm");

  contactBtn.addEventListener("click", () => {
    contactForm.classList.toggle("hidden");

    if (!contactForm.classList.contains("hidden")) {
      contactBtn.textContent = "Hide Contact";
    } else {
      contactBtn.textContent = "Contact";
    }
  });
});
