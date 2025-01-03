// Function to switch screens and update the background
function switchScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // Show the selected screen
    const activeScreen = document.getElementById(screenId);
    activeScreen.classList.add('active');

    // Change the background based on the active screen
    updateBackground(screenId);
}

// Function to update the background
function updateBackground(screenId) {
    const body = document.body;
    switch (screenId) {
        case 'home':
            body.style.background = 'linear-gradient(to bottom, #ff7e5f, #feb47b)';
            break;
        case 'about':
            body.style.background = 'linear-gradient(to bottom, #43cea2, #185a9d)';
            break;
        case 'projects':
            body.style.background = 'linear-gradient(to bottom, #3a1c71,rgb(104, 58, 62),rgb(197, 92, 22))';
            break;
        case 'contact':
            body.style.background = 'linear-gradient(to bottom, #3a1c71, #d76d77, #ffaf7b)';
            break;
        default:
            body.style.background = 'white';
    }
}

// Set initial background on page load
window.onload = () => {
    updateBackground('home');
};
