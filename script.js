document.addEventListener("DOMContentLoaded", () => {
    const screen = document.querySelector('.screen');

    // Simulate turning on the computer
    setTimeout(() => {
        screen.classList.remove('off');
        screen.classList.add('on');
    }, 1000); // Turn on after 1 second

    // Show portfolio after zoom animation
    screen.addEventListener('animationend', () => {
        screen.classList.remove('on');
        screen.classList.add('show-content');
    });
});

// Portfolio navigation functionality
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen-content');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}
