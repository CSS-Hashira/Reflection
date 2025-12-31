const track = document.getElementById('track');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Number of cards
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

let currentIndex = 0;

function updateSlider() {
    // Move track by -100vw * currentIndex
    track.style.transform = `translateX(-${currentIndex * 100}vw)`;

    // Update button states if needed (optional)
    prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';

    nextBtn.style.opacity = currentIndex === totalCards - 1 ? '0.5' : '1';
    nextBtn.style.pointerEvents = currentIndex === totalCards - 1 ? 'none' : 'auto';
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// Initialize
updateSlider();
