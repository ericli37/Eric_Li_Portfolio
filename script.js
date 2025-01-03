// Function to switch screens and show the first section
function switchScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Show the selected screen
    const activeScreen = document.getElementById(screenId);
    activeScreen.classList.add('active');

    // Set the background for the first section
    updateBackground(activeScreen.querySelector('.section'));
}

// Function to update the background of the body based on the section
function updateBackground(section) {
    const body = document.body;
    const bg = section.getAttribute('data-bg');
    body.style.background = bg;
}

// Add scroll event to update the background as you scroll through sections
window.addEventListener('scroll', () => {
    const activeScreen = document.querySelector('.screen.active');
    if (activeScreen) {
        const sections = activeScreen.querySelectorAll('.section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                updateBackground(section);
            }
        });
    }
});

// Set the initial screen and background on page load
window.onload = () => {
    switchScreen('home');
};
