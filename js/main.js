document.addEventListener('DOMContentLoaded', () => {
    // Funktion zum Erstellen der Partikel im Hintergrund
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return; // Beenden, wenn der Container nicht existiert

        const particleCount = 20; // Mehr Partikel für einen volleren Effekt
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%'; // Startposition zufällig über den ganzen Bildschirm
            particle.style.animationDelay = Math.random() * 10 + 's'; // Längere Verzögerung für mehr Varianz
            particle.style.animationDuration = (Math.random() * 10 + 6) + 's'; // Längere Dauer
            
            // Zufällige Farben aus dem Farbschema
            const colors = ['rgba(0, 242, 255, 0.6)', 'rgba(179, 0, 255, 0.6)', 'rgba(255, 102, 0, 0.6)'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            particlesContainer.appendChild(particle);
        }
    }

    // Funktion für die Typing-Animation (nur auf der Startseite)
    function typeText() {
        const typingElement = document.getElementById('typingText');
        if (!typingElement) return; // Beenden, wenn das Element nicht existiert

        const phrases = [
            "Welcome to my digital world...",
            "I code, I game, I build...",
            "Portal speedrun PB: 18:11",
            "Always learning, always creating...",
            "Let's connect and build something awesome!"
        ];
        
        let currentPhrase = 0;
        let currentChar = 0;
        let isDeleting = false;
        
        function type() {
            const phrase = phrases[currentPhrase];
            
            if (isDeleting) {
                typingElement.textContent = phrase.substring(0, currentChar - 1);
                currentChar--;
            } else {
                typingElement.textContent = phrase.substring(0, currentChar + 1);
                currentChar++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && currentChar === phrase.length) {
                typeSpeed = 2000; // Pause am Ende des Satzes
                isDeleting = true;
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
                typeSpeed = 500; // Kurze Pause vor dem nächsten Satz
            }
            
            setTimeout(type, typeSpeed);
        }
        
        type();
    }

    // Funktion für den Karten-Tilt-Effekt
    function addCardTiltEffect() {
        const cards = document.querySelectorAll('.card, .info-card'); // Beide Kartentypen auswählen
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20; // Weniger Rotation für subtileren Effekt
                const rotateY = (centerX - x) / 20; // Weniger Rotation
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`; // Leichter Scale-Effekt hinzugefügt
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
            });
        });
    }

    // Funktion für Scroll-Reveal-Animationen
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.scroll-reveal');
        
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 100; // Wenn das Element 100px vom unteren Rand des Viewports entfernt ist
            
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('revealed');
            } else {
                reveal.classList.remove('revealed'); // Entfernt die Klasse, wenn das Element wieder aus dem Blickfeld verschwindet
            }
        });
    }

    // Funktion für die Navigation "active" Klasse
    function setActiveNav() {
        const currentPath = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('nav a');

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Initialisierung aller Funktionen beim Laden des DOM
    createParticles();
    typeText(); // Wird nur ausgeführt, wenn #typingText existiert
    addCardTiltEffect();
    revealOnScroll(); // Einmal beim Laden ausführen
    setActiveNav();

    // Event Listener für Scroll-Reveal
    window.addEventListener('scroll', revealOnScroll);
});