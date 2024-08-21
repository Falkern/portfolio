function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open");
  icon.setAttribute("aria-expanded", isOpen);
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

document.addEventListener("DOMContentLoaded", function () {
  const texts = ["Cybersecurity Student", "Web Developer", "Software Developer", "Web Designer", "Backend Developer", "Frontend Developer"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  let isDeleting = false;

  (function type() {
      if (count === texts.length) {
          count = 0;
      }

      currentText = texts[count];

      if (isDeleting) {
          letter = currentText.slice(0, --index);
      } else {
          letter = currentText.slice(0, ++index);
      }

      document.querySelector("#animated-text").textContent = letter;

      let typingSpeed = isDeleting ? 100 : 150;

      if (!isDeleting && letter.length === currentText.length) {
          typingSpeed = 2000;
          isDeleting = true;
      } else if (isDeleting && letter.length === 0) {
          isDeleting = false;
          count++;
          typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
  })();
});


var petalPlayers = [];

function animatePetals() {
  var petals = document.querySelectorAll('.petal');
  
  if (!petals[0].animate) {
    var petalsContainer = document.getElementById('petals-container');
    petalsContainer.innerHTML = "Uh oh, it seems like your browser doesn't support Web Animations API yet. Have you tried this in Firefox or Chrome?";
    return false;
  }

  for (var i = 0, len = petals.length; i < len; ++i) {
    var petal = petals[i];
    petal.innerHTML = '<div class="rotate"><img src="https://qqz.works/wp-content/uploads/2021/08/petal.png" class="askew"></div>';
    var scale = Math.random() * 0.5 + 0.3; // Adjust size of the petals

    var player = petal.animate([
      { 
        transform: 'translate3d(' + (i / len * 100) + 'vw, 0, 0) scale(' + scale + ')', 
        opacity: scale 
      },
      { 
        transform: 'translate3d(' + (i / len * 100 + 15) + 'vw, 150vh, 0) scale(' + scale + ')', 
        opacity: 0 
      }
    ], {
      duration: Math.random() * 20000 + 10000, // Adjust duration for smoother animation
      iterations: Infinity,
      delay: Math.random() * 5000 // Adjust delay
    });

    petalPlayers.push(player);
  }
}

animatePetals();

