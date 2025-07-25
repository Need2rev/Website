document.addEventListener('DOMContentLoaded', () => {
    // Funktion zum Erstellen der Partikel im Hintergrund
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return; // Beenden, wenn der Container nicht existiert

        const particleCount = 100; // Mehr Partikel für einen volleren Effekt
        
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
            "Portal speedrun PB: 17:02",
            "I modified more things than Cave Johnson modified test subjects.",
            "Always learning, always creating...",
            "Let's connect and build something awesome!",
            "mom: i give you 30min of screen time! I only need 17:02",
            "I talk to my printer more than Wheatley talks to himself. Neither of them listen.",
            "I'm ranked in the Top 120 in Beat Saber Germany. Not flexing. Okay, maybe a little.",
            "I don’t test things. I Portal-style science them into existence.",
            "I own a 24V vacuum with 90 watts of pure chaos — it sucks harder than Monday mornings.",
            "Ubuntu without login? Of course. My laptop already knows it belongs to the Agent.",
            "GLaDOS: ‘You monster.’  Me, after rooting yet another device.",
            "My website has more animation than a Pixar movie on caffeine.",
            "My first tablet had more personality than most modern iPads",
            "When I say I want full control, I mean I want my scooter to ping me on Discord when it’s low on gas.",
            "If Aperture had scooters, I'd be their lead field engineer.",
            "People buy dashboards. I forge them in code like a digital blacksmith.",
            "If it doesn’t have RGB, is it even technology?",
            "SPACE. I WANNA GO TO SPACE. Also, I built a scooter HUD, so I’m halfway there.",
            "I built a jukebox that turns off when I don’t use it — just like my motivation.",
            "Why buy a digital dashboard when I can build one with USB-C and vibes?",
            "At night, my touchscreen jukebox turns off automatically — unlike my anxiety.",
            "Need2rev isn't just a name — it’s a lifestyle",
            "My printer has ink, makes sounds, shows up in macOS… but doesn’t print. Probably an artist.",
            "Spotify wasn’t fancy enough, so I made my own jukebox system. With touch. And style.",
            "My web dashboard has more tabs than my school browser history — and that’s saying something.",
            "Root access, custom ROM, and brain cells — my Note 20 is a pocket-sized beast.",
            "I don’t sleep, I just enter low-power mode.",
            "Even the turrets think I’m not worth the ammo.",
            "I build stuff for fun. Then I upgrade it for revenge.",
            "I put a touchscreen jukebox on a laptop. Somewhere, GLaDOS is impressed. Or annoyed.",
            "I scream ‘SPACE!’ more than I make sense.",
            "I flashed my ROM so many times, I think my phone has trauma.",
            "I turned a Huawei phone into a scooter speedometer. Because GPS is a mindset",
            "Cave Johnson wanted lemons. I gave him broken code and three exploded capacitors.",
            "When life gives me no OBD2, I say: challenge accepted.",
            "‘This was a triumph’ — my thoughts every time my homemade speedometer actually works.",
            "You use your laptop for school. I turned mine into a jukebox nightclub.",
            "I don't download apps, I write my own. App store? Never heard of her.",
            "The cake may be a lie, but my dashboard stats are brutally honest.",
            "I once got stuck in a Portal test chamber because I tried to jailbreak the elevator.",
            "I don't install updates — I reverse-engineer them.",
            "I rooted my phone, bricked it, and then blamed the ROM dev like it wasn’t entirely my fault.",
            "I skipped Ubuntu login because even my computer’s tired of seeing me.",
            "I made a dashboard so advanced, I forgot what it's even supposed to do.",
            "I talk to my printer more than people — and the printer still ghosts me.",
            "My scooter has more features than my personality has depth.",
            "I designed my website with animations so smooth, they distract you from the fact I wrote the content at 3AM.",
            "I make Wheatley look like a Nobel Prize winner. And he ejected himself into orbit.",
            "GLaDOS told me I was doing great… and then deleted me out of pity.",
            "I tried to impress GLaDOS with my AI bot. She uninstalled herself.",
            "I have more failed side projects than actual side friends.",
            "I wired up my scooter to Discord. Because who wouldn't want to get pinged by a gas tank?",
            "I don't make backups. I make mistakes.",
            "My sense of UI design is ‘vibes first, logic later’.",
            "I installed Arch once. Then forgot how I did it. I live in fear.",
            "I coded my own dashboard from scratch. Took three weeks. Still doesn’t show the time correctly.",
            "Dream big. Fail harder. Reboot faster.",
            "If you can’t find the way, make it with solder and duct tape."
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