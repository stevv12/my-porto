// NAVBAR SECTION
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80; 
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-nav");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active-nav");
      }
    });
  });
});



// HOOME SECTION
const typed = new Typed(".multiple-text", {
  strings: ["Slow Life Enjoyer", "Knowledge Seeker, "],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
