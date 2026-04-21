// Smooth scrolling pentru linkurile de navigație
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animare pentru carduri
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.team-card, .player-card, .curiosity-card, .rule-card, .tech-box').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});

// Quiz interactiv
const quizCheckBtn = document.getElementById('quizCheckBtn');
const quizResult = document.getElementById('quizResult');
if (quizCheckBtn) {
    quizCheckBtn.addEventListener('click', () => {
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        if (!q1 || !q2) {
            quizResult.textContent = 'Vă rugăm să selectați un răspuns la fiecare întrebare.';
            quizResult.style.color = '#cf0d0d';
            return;
        }
        let score = 0;
        if (q1.value === '95') score += 1; // 3 perioade
        if (q2.value === '92') score += 1; // Cupa Stanley
        quizResult.textContent = `Ai obținut ${score}/2 puncte!`;
        quizResult.style.color = '#1f2a36';
    });
}

// Formular feedback
const feedbackForm = document.getElementById('feedbackForm');
const feedbackInfo = document.getElementById('feedbackInfo');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        feedbackInfo.textContent = 'Mulțumim! Mesajul tău a fost trimis (simulat).';
        feedbackForm.reset();
        setTimeout(() => { feedbackInfo.textContent = ''; }, 4500);
    });
}