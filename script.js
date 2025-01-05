document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.getElementById('theme-body');

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        if(body.classList.contains('light-theme')) {
            themeToggle.textContent = "Thème sombre";
        }else {
            themeToggle.textContent = "Changer le thème";
        }
    });
});
