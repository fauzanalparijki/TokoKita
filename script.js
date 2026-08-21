// ---- Mobile nav toggle ----
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
    links.classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        links.classList.remove('open');
    });
});

// ---- Video player click ----
const videoPlayer = document.querySelector('.video-player');
if (videoPlayer) {
    videoPlayer.addEventListener('click', () => {
        alert('🎬 Video would play here — immersive culinary experience.');
    });
}

// ---- Navbar shadow on scroll ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navbar.style.borderBottomColor = 'rgba(200,161,101,0.15)';
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
    } else {
        navbar.style.borderBottomColor = 'rgba(200,161,101,0.08)';
        navbar.style.boxShadow = 'none';
    }
});

// ---- Smooth anchor (optional) ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
