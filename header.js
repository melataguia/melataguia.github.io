document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.querySelector('body');
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
     let isMenuOpen = false;

    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
          isMenuOpen = !isMenuOpen;
    });

      themeToggle.addEventListener('click', function() {
          body.classList.toggle('light-theme');
            if(body.classList.contains('light-theme')) {
                themeToggle.textContent = "Thème sombre";
            }else {
                themeToggle.textContent = "Changer le thème";
            }
     });

         // Gestionnaire d'événements pour fermer le menu lorsqu'on clique à l'extérieur du menu
    document.addEventListener('click', (event) => {
        if (isMenuOpen && !mainNav.contains(event.target) && !navToggle.contains(event.target)) {
            mainNav.classList.remove('active');
            isMenuOpen = false;
        }
    });
});
