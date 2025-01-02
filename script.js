document.addEventListener("DOMContentLoaded", () => {
    const screen = document.querySelector('.screen');
    const portfolio = document.querySelector('.portfolio');

    // Step 1: Turn on the screen
    setTimeout(() => {
        screen.classList.remove('off');
        screen.classList.add('on');
    }, 1000); // Delay for 1 second

    // Step 2: Start zoom animation
    setTimeout(() => {
        screen.classList.add('zoom');
    }, 2000); // Delay for 2 seconds to let the "on" effect be visible

    // Step 3: Show portfolio after zoom
    screen.addEventListener('animationend', () => {
        portfolio.style.display = 'flex'; // Show the portfolio content
    });
});

// Navigation functionality
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen-content');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}
