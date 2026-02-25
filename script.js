// 1) Set current year in footer (if the element exists)
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 2) Highlight the active section in the navbar (optional but useful)
const navLinks = document.querySelectorAll('.nav a[href^="#"]');
const sections = Array.from(navLinks)
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

function setActiveLink() {
  // Pick the section that is closest to the top (with a small offset)
  const offset = 120;
  let current = null;

  for (const sec of sections) {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= offset && rect.bottom > offset) {
      current = sec;
      break;
    }
  }

  navLinks.forEach(a => a.classList.remove("active"));
  if (current) {
    const activeLink = document.querySelector(`.nav a[href="#${current.id}"]`);
    if (activeLink) activeLink.classList.add("active");
  }
}
document.querySelectorAll(".slider").forEach((slider) => {
  const slides = slider.querySelectorAll(".slide");
  let currentIndex = 0;

  setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }, 3000); // 3 segundos
});

// Run once on load and then on scroll
setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });
window.addEventListener("resize", setActiveLink);
