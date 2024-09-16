document.addEventListener("DOMContentLoaded", () => {
    // function to toggle the menu
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        if (!menu || !icon) return; // Ensure elements exist before toggling

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

    const texts = ["Cybersecurity Student", "Web Developer", "Software Developer", "Web Designer", "Reverse Engineer", "Backend Developer", "Frontend Developer"];
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
        letter = isDeleting ? currentText.slice(0, --index) : currentText.slice(0, ++index);

        const animatedTextElement = document.querySelector("#animated-text");
        if (animatedTextElement) {
            animatedTextElement.textContent = letter;

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
        }
    })();

    function animatePetals() {
        const petals = document.querySelectorAll('.petal');
        if (!petals[0]?.animate) {
            const petalsContainer = document.getElementById('petals-container');
            if (petalsContainer) {
                petalsContainer.innerHTML = "Uh oh, it seems like your browser doesn't support Web Animations API yet. Have you tried this in Firefox or Chrome?";
            }
            return false;
        }

        const petalPlayers = [];
        petals.forEach((petal, i) => {
            petal.innerHTML = '<div class="rotate"><img src="https://qqz.works/wp-content/uploads/2021/08/petal.png" class="askew" alt="petal"></div>';
            const scale = Math.random() * 0.5 + 0.3;
            const player = petal.animate([
                { transform: `translate3d(${(i / petals.length) * 100}vw, 0, 0) scale(${scale})`, opacity: scale },
                { transform: `translate3d(${(i / petals.length) * 100 + 15}vw, 150vh, 0) scale(${scale})`, opacity: 0 }
            ], {
                duration: Math.random() * 20000 + 10000,
                iterations: Infinity,
                delay: Math.random() * 5000
            });
            petalPlayers.push(player);
        });
    }
    animatePetals();

    AOS.init({
        duration: 1000,
        easing: 'ease-out',
    });

    const toggleButton = document.getElementById("dark-mode-toggle");
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDarkMode = document.body.classList.contains("dark-mode");
            toggleButton.textContent = isDarkMode ? "☀️" : "🌙";
            localStorage.setItem("dark-mode", isDarkMode);
        });
        const savedDarkMode = localStorage.getItem("dark-mode") === "true";
        if (savedDarkMode) {
            document.body.classList.add("dark-mode");
            toggleButton.textContent = "☀️";
        } else {
            toggleButton.textContent = "🌙";
        }
    }
});