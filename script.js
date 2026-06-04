/* ==========================================
   1. ROMANTIC CONFIGURATION VARIABLES
   ========================================== */
// SET YOUR ANNIVERSARY/START DATE HERE (Format: YYYY-MM-DDTHH:MM:SS)
const START_DATE = "2024-10-18T00:00:00"; 

// CHOOSE YOUR QUIZ QUESTIONS HERE
const QUIZ_QUESTIONS = [
    {
        question: "Where did we have our absolute first date together?",
        options: ["The cozy downtown cafe", "The local botanical park", "The seaside restaurant", "A movie theater"],
        answer: 0 // Index corresponding to the correct answer option array entry
    },
    {
        question: "Which month is our official anniversary month?",
        options: ["January", "June", "October", "December"],
        answer: 2
    },
    {
        question: "What is my absolute favorite thing to do with you?",
        options: ["Exploring new food spaces", "Watching late night movies", "Just talking about anything", "All of the above! ❤️"],
        answer: 3
    }
];

/* ==========================================
   2. APP INITIALIZATION & PAGE LOAD HANDLER
   ========================================== */
window.addEventListener('DOMContentLoaded', () => {
    // Mimic romantic asset staging sequence 
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        loader.style.opacity = '0';
        loader.style.transform = 'translateY(-20px)';
        setTimeout(() => loader.classList.add('hidden'), 800);
    }, 1800);

    initBackgroundHeartEngine();
    setupScrollReveal();
});

/* ==========================================
   3. GLOBAL INTERACTION CONTROLLERS & ACTIONS
   ========================================== */
const openBtn = document.getElementById('open-btn');
const heroSection = document.getElementById('hero');
const mainContent = document.getElementById('main-content');
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const musicIcon = document.getElementById('music-icon');
const musicWidget = document.querySelector('.music-player-widget');

openBtn.addEventListener('click', () => {
    // Fade out Landing Page smoothly
    heroSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    heroSection.style.opacity = '0';
    heroSection.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        heroSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        // Attempt immediate safe music ignition sequence
        playMusic();
        
        // Initiate live calculation clock engines and letters
        startRelationshipTimer();
        triggerTypewriterLetter();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
});

// Music toggle controls
function playMusic() {
    bgMusic.play().then(() => {
        musicIcon.className = "fas fa-pause";
        musicWidget.classList.add('playing');
    }).catch(err => console.log("Audio waiting for explicit domestic document viewport touch interaction target."));
}

musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        playMusic();
    } else {
        bgMusic.pause();
        musicIcon.className = "fas fa-play";
        musicWidget.classList.remove('playing');
    }
});

/* ==========================================
   4. RELATIONSHIP TIMER CORE ENGINE
   ========================================== */
function startRelationshipTimer() {
    const dayVal = document.getElementById('days');
    const hourVal = document.getElementById('hours');
    const minVal = document.getElementById('minutes');
    const secVal = document.getElementById('seconds');

    function updateClock() {
        const totalMilliseconds = new Date() - new Date(START_DATE);
        
        if(totalMilliseconds < 0) return; // Prevent inverse configurations

        const d = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
        const h = Math.floor((totalMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);

        dayVal.innerText = d < 10 ? '0' + d : d;
        hourVal.innerText = h < 10 ? '0' + h : h;
        minVal.innerText = m < 10 ? '0' + m : m;
        secVal.innerText = s < 10 ? '0' + s : s;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

/* ==========================================
   5. TYPEWRITER EFFECT FOR THE LOVE LETTER
   ========================================== */
function triggerTypewriterLetter() {
    const textSpan = document.getElementById('typing-text');
    const rawMessage = textSpan.getAttribute('data-text');
    textSpan.innerHTML = ''; // Clear prior content
    
    // Create cursor
    const cursor = document.createElement('span');
    cursor.className = 'typed-cursor';
    cursor.innerText = '|';
    textSpan.parentNode.appendChild(cursor);

    let charIndex = 0;
    function type() {
        if (charIndex < rawMessage.length) {
            textSpan.innerHTML += rawMessage.charAt(charIndex);
            charIndex++;
            setTimeout(type, 45); // Adjust pace signature speed here
        } else {
            cursor.remove(); // Clean cursor up when text finishes
        }
    }
    type();
}

/* ==========================================
   6. INTERACTIVE GALLERY LIGHTBOX MODULE
   ========================================== */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCap = document.getElementById('lightbox-caption');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeLightbox = document.querySelector('.close-lightbox');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.overlay span').innerText;
        lightboxImg.src = img.src;
        lightboxCap.innerText = caption;
        lightbox.classList.remove('hidden');
    });
});

closeLightbox.addEventListener('click', () => lightbox.classList.add('hidden'));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.add('hidden'); });

/* ==========================================
   7. REASONS INTERACTIVE FLIP MECHANISM
   ========================================== */
document.querySelectorAll('.reason-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        createSparklesAround(card);
    });
});

/* ==========================================
   8. ROMANTIC RELATIONSHIP QUIZ ENGINE
   ========================================== */
let currentQuestionIndex = 0;
let quizScore = 0;

function startQuiz() {
    document.getElementById('quiz-start').classList.add('hidden');
    document.getElementById('quiz-body').classList.remove('hidden');
    renderQuestion();
}

function renderQuestion() {
    const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
    document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1} of ${QUIZ_QUESTIONS.length}`;
    document.getElementById('question-text').innerText = currentQ.question;
    
    const progressPercent = ((currentQuestionIndex) / QUIZ_QUESTIONS.length) * 100;
    document.getElementById('progress').style.width = `${progressPercent}%`;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Wipe past option sets

    currentQ.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.addEventListener('click', () => verifyQuizAnswer(idx, btn));
        optionsContainer.appendChild(btn);
    });
}

function verifyQuizAnswer(selectedIndex, selectedBtn) {
    const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
    const allButtons = document.querySelectorAll('.option-btn');
    
    // Disable alternative inputs while processing
    allButtons.forEach(b => b.disabled = true);

    if (selectedIndex === currentQ.answer) {
        selectedBtn.classList.add('correct');
        quizScore++;
        createSparklesAround(selectedBtn);
    } else {
        selectedBtn.classList.add('wrong');
        allButtons[currentQ.answer].classList.add('correct');
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < QUIZ_QUESTIONS.length) {
            renderQuestion();
        } else {
            displayQuizResults();
        }
    }, 1500);
}

function displayQuizResults() {
    document.getElementById('quiz-body').classList.add('hidden');
    const resultSec = document.getElementById('quiz-result');
    resultSec.classList.remove('hidden');
    document.getElementById('progress').style.width = '100%';
    document.getElementById('score-text').innerText = `You scored ${quizScore} out of ${QUIZ_QUESTIONS.length}! You know us perfectly! ❤️`;
    triggerExplosiveHeartsBurst(15);
}

/* ==========================================
   9. EASTER EGG & BONUS ENDING SEQUENCE
   ========================================== */
const secretBtn = document.getElementById('secret-btn');
const secretModal = document.getElementById('secret-modal');
const closeModal = document.querySelector('.close-modal');

secretBtn.addEventListener('click', () => {
    secretModal.classList.remove('hidden');
    triggerExplosiveHeartsBurst(25);
});
closeModal.addEventListener('click', () => secretModal.classList.add('hidden'));
window.addEventListener('click', (e) => { if(e.target === secretModal) secretModal.classList.add('hidden'); });

// Bonus ending overlay action routine trigger logic
const finalYesBtn = document.getElementById('final-yes');
const finalOverlay = document.getElementById('final-overlay');

finalYesBtn.addEventListener('click', () => {
    finalOverlay.classList.remove('hidden');
    setTimeout(() => {
        finalOverlay.classList.add('show');
        // Loop standard heavy concentration particle emission sequences indefinitely
        setInterval(() => { triggerExplosiveHeartsBurst(6); }, 400);
    }, 50);
});

/* ==========================================
   10. CANVA FLOATING PARTICLES ENGINE
   ========================================== */
let canvas, ctx, heartArray = [];

function initBackgroundHeartEngine() {
    canvas = document.getElementById('heart-canvas');
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Seed continuous floaters layout array
    for (let i = 0; i < 45; i++) {
        heartArray.push(new BackgroundHeartItem());
    }
    animateParticles();
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class BackgroundHeartItem {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; // Spread uniformly at launch
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 20;
        this.size = Math.random() * 12 + 6;
        this.speedY = -(Math.random() * 0.8 + 0.4);
        this.opacity = Math.random() * 0.4 + 0.2;
        this.swing = Math.random() * 4;
        this.swingSpeed = Math.random() * 0.02;
        this.angle = Math.random() * 100;
    }
    update() {
        this.y += this.speedY;
        this.angle += this.swingSpeed;
        this.x += Math.sin(this.angle) * 0.3;
        if (this.y < -20 || this.x < -20 || this.x > canvas.width + 20) {
            this.reset();
        }
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "#fb6f92";
        ctx.beginPath();
        // Path trace standard heart vectors smoothly onto base setup contexts
        const topY = this.y - this.size;
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x - this.size, topY, this.x - this.size * 2, this.y - this.size / 3, this.x, this.y + this.size);
        ctx.bezierCurveTo(this.x + this.size * 2, this.y - this.size / 3, this.x + this.size, topY, this.x, this.y);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    heartArray.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

/* ==========================================
   11. TRAILING MOUSE EVENTS & PARTICLE FX
   ========================================== */
window.addEventListener('mousemove', (e) => {
    // Throttle outputs via random factor limits to maintain clean UI flow
    if (Math.random() > 0.88) {
        createMouseTrailHeart(e.pageX, e.pageY);
    }
    if (Math.random() > 0.92) {
        createSparkle(e.pageX, e.pageY);
    }
});

function createMouseTrailHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'mouse-heart';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.innerHTML = '❤️';
    // Random side drifting offset parameters
    heart.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 800);
}

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    const sz = Math.random() * 4 + 3;
    sparkle.style.width = `${sz}px`;
    sparkle.style.height = `${sz}px`;
    sparkle.style.left = `${x + (Math.random() * 20 - 10)}px`;
    sparkle.style.top = `${y + (Math.random() * 20 - 10)}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
}

function createSparklesAround(element) {
    const rect = element.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    for (let i = 0; i < 8; i++) {
        createSparkle(rect.left + rect.width / 2 + scrollX, rect.top + rect.height / 2 + scrollY);
    }
}

function triggerExplosiveHeartsBurst(qty) {
    for (let i = 0; i < qty; i++) {
        const rx = Math.random() * window.innerWidth;
        const ry = Math.random() * window.innerHeight + window.scrollY;
        setTimeout(() => createMouseTrailHeart(rx, ry), i * 60);
    }
}

/* ==========================================
   12. SCROLL REVEAL UTILITY IMPLEMENTATION
   ========================================== */
function setupScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    function checkReveal() {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 80; // Trigger cushion point offset
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', checkReveal);
    // Trigger initially once content framework unlocks
    openBtn.addEventListener('click', () => setTimeout(checkReveal, 900));
}