document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');

    // smooth scroll and active link
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
            // close mobile menu
            if (navbar.classList.contains('open')) {
                navbar.classList.remove('open');
            }
        });
    });

    // toggle mobile nav
    navToggle && navToggle.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });

    // observe sections for active link
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active'));
                link && link.classList.add('active');
            }
        });
    }, observerOptions);
    sections.forEach(sec => sectionObserver.observe(sec));

    // reveal animations (fade, slide, zoom, counters)
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.animationDelay = el.style.animationDelay || '0s';
                const anim = el.dataset.anim;
                if (anim) {
                    el.classList.add(anim, 'visible');
                } else {
                    el.classList.add('visible');
                }
                if (el.classList.contains('counter')) {
                    animateCounter(el);
                }
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-anim], .fade-in, .slide-left, .slide-right, .zoom-in, .counter').forEach(el => revealObserver.observe(el));

    // parallax
    const parallaxEls = document.querySelectorAll('[data-parallax]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || window.pageYOffset;
        parallaxEls.forEach(el => {
            const rate = parseFloat(el.dataset.parallax) || 0;
            el.style.transform = `translateY(${scrollY * rate}px)`;
        });
    });

    // scroll-down indicator
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', () => {
            const next = document.getElementById('o-que-e');
            if (next) {
                window.scrollTo({
                    top: next.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    }

    // generate QR code for current page
    const qrContainer = document.getElementById('qrcode');
    if (qrContainer && window.QRCode) {
        new QRCode(qrContainer, {
            text: window.location.href,
            width: 150,
            height: 150,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    // mini quiz logic
    const quizSection = document.getElementById('mini-quiz');
    if (quizSection) {
        let current = 0;
        let score = 0;
        const questions = quizSection.querySelectorAll('.question');
        const feedbackEl = document.getElementById('quiz-feedback');

        function showQuestion(index) {
            questions.forEach(q => q.style.display = 'none');
            if (questions[index]) questions[index].style.display = 'block';
        }

        // initialize
        showQuestion(0);

        function validateAnswer(button, correct) {
            if (correct) score++;
            button.classList.add(correct ? 'correct' : 'incorrect');
            setTimeout(() => {
                current++;
                if (current < questions.length) {
                    showQuestion(current);
                } else {
                    showResults();
                }
            }, 500);
        }

        function showResults() {
            questions.forEach(q => q.style.display = 'none');
            let msg = '';
            if (score === questions.length) {
                msg = '🎉 Parabéns, você entendeu o conceito de Big Data!';
            } else {
                msg = `Você acertou ${score} de ${questions.length}.`;    
            }
            feedbackEl.textContent = msg;
            feedbackEl.style.display = 'block';
        }

        quizSection.addEventListener('click', e => {
            if (e.target.classList.contains('option')) {
                const btn = e.target;
                // determine correctness by comparing text with correct options
                const correctTexts = [
                    'B) Grandes volumes de dados analisados para gerar informações',
                    'A) Volume, Velocidade e Variedade',
                    'A) Recomendações de filmes em plataformas de streaming'
                ];
                const correct = correctTexts.includes(btn.textContent.trim());
                validateAnswer(btn, correct);
            }
        });
    }
});

// counter helper outside DOMContentLoaded
function animateCounter(el) {
    const target = +el.dataset.target;
    const duration = 2000;
    let startTimestamp = null;

    function step(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const val = Math.min(Math.floor((progress / duration) * target), target);
        el.textContent = val;
        if (val < target) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}
