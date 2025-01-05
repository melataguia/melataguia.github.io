document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.querySelector('body');
     const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
      navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        });

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-theme');
         if(body.classList.contains('light-theme')) {
            themeToggle.textContent = "Thème sombre";
        }else {
            themeToggle.textContent = "Changer le thème";
        }
    });
});
