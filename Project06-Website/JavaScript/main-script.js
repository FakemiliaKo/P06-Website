
        window.addEventListener('scroll', function() {
            const hero = document.querySelector('.hero');
            const scrollPos = window.pageYOffset;
            const maxOpacity = 1;

            let opacity = maxOpacity - scrollPos / hero.offsetHeight;

            if (opacity >= 0) {
                hero.style.opacity = opacity;
            }
        }); 

        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const body = document.body;

        const enableDarkMode = () => {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('darkModeEnabled', 'true');
            darkModeToggle.innerText = '☀️';
            darkModeToggle.classList.add('rotate');
        }

        const disableDarkMode = () => {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('darkModeEnabled', 'false');
            darkModeToggle.innerText = '🌙';
            darkModeToggle.classList.add('rotate');
        }

        darkModeToggle.addEventListener('click', () => {
            if (localStorage.getItem('darkModeEnabled') === 'true') {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
            setTimeout(() => darkModeToggle.classList.remove('rotate'), 500);
        });

        if (localStorage.getItem('darkModeEnabled') === 'true') {
            enableDarkMode();
        }

        // Smooth scroll to "Get Started"
        document.querySelector(".button").addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector("#videoJump").scrollIntoView({ behavior: 'smooth' });
        });

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });