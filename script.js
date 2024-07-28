document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    
    // Load saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    }
    
    // Toggle theme on switch change
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
