// JavaScript for theme toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.querySelector('.theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeToggleButton.querySelector('i').classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            themeToggleButton.querySelector('i').classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
});
