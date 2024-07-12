const toggleButton = document.getElementById('toggle-dark-mode');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')) {
        themeIcon.textContent = 'light_mode';
    } else {
        themeIcon.textContent = 'dark_mode';
    }
});
toggleButton.addEventListener('mouseover', function() {
    if(body.classList.contains('dark-mode')) {
        themeIcon.textContent = 'dark_mode';
    } else {
        themeIcon.textContent = 'light_mode';
    }
    themeIcon.style.transform = 'translateY(-5px)';
});
toggleButton.addEventListener('mouseout', function() {
    if(body.classList.contains('dark-mode')) {
        themeIcon.textContent = 'light_mode';
    } else {
        themeIcon.textContent = 'dark_mode';
    }
    themeIcon.style.transform = 'translateY(0px)';
});