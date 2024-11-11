const typingText = document.querySelector('.typing-text');
const words = ['Frontend Developer', 'Web Designer', 'UI/UX Enthusiast'];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function typeEffect() {
    if (isDeleting) {
        currentWord = words[wordIndex].substring(0, charIndex--);
    } else {
        currentWord = words[wordIndex].substring(0, charIndex++);
    }

    typingText.textContent = currentWord;

    if (!isDeleting && charIndex === words[wordIndex].length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500); // Pause before typing new word
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);

.read-more-btn:hover {
    background-color: #0077cc;
}

const readMoreBtn = document.querySelector('.read-more-btn');
const aboutText = document.querySelector('.about-text p');

readMoreBtn.addEventListener('click', () => {
    aboutText.classList.toggle('expanded');
    readMoreBtn.textContent = aboutText.classList.contains('expanded') ? 'Read less' : 'Read more';
});

const readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert("This could lead to more details or a dedicated page.");
    });
});
