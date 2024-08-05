function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const elements = document.querySelectorAll('.section__text__p1, .title, .section__text__p2, .about-pic, .details-container, .about-me-text');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    } else {
      entry.target.classList.remove('fade-in');
    }
  });
}, { threshold: 0.1 });

elements.forEach(element => {
  observer.observe(element);
});
