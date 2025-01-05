document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const headerPlaceholder = document.getElementById('header-placeholder');

    // Charger dynamiquement la feuille de style du header
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'header.css';
    document.head.appendChild(link);

    // Charger dynamiquement le contenu du header
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Injecter le contenu dans le DOM
            headerPlaceholder.innerHTML = data;

            // Une fois le contenu chargé, configurer les écouteurs d'événements
            const themeToggle = document.getElementById('theme-toggle');
            const navToggle = document.querySelector('.navbar-toggler');

            // Gestion du basculement de thème
            themeToggle.addEventListener('click', function() {
                body.classList.toggle('light-theme');
                themeToggle.textContent = body.classList.contains('light-theme') 
                    ? "Thème sombre" 
                    : "Changer le thème";
            });

            // Gestion de l'ouverture/fermeture du menu avec Bootstrap
            navToggle.addEventListener('click', function() {
                const navbarNav = document.getElementById('navbarNav');
                navbarNav.classList.toggle('show');
            });
        })
        .catch(error => {
            console.error('Failed to fetch header:', error);
            headerPlaceholder.innerHTML = '<p>Failed to load header.</p>';
        });
});
