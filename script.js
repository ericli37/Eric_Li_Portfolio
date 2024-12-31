// script.js

function showTab(tabId) {
    // Hide all tab content
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
}

// Optionally, set the first tab content to be shown by default
document.addEventListener("DOMContentLoaded", function() {
    showTab('tab1'); // This ensures that tab1 is active by default when the page loads
});
