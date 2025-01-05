document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const headerPlaceholder = document.getElementById('header-placeholder');
     const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'header.css';
         document.head.appendChild(link);
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
             headerPlaceholder.innerHTML = data;
           const themeToggle = document.getElementById('theme-toggle');
              const navToggle = document.querySelector('.navbar-toggler');
               let isMenuOpen = false;
                    navToggle.addEventListener('click', () => {
                       if (isMenuOpen){
                         navToggle.setAttribute('aria-expanded', 'false');
                            isMenuOpen = false;
                        } else {
                         navToggle.setAttribute('aria-expanded', 'true');
                             isMenuOpen = true;
                         }
                    });
            themeToggle.addEventListener('click', function() {
                 body.classList.toggle('light-theme');
                if(body.classList.contains('light-theme')) {
                     themeToggle.textContent = "Thème sombre";
                 }else {
                    themeToggle.textContent = "Changer le thème";
                 }
             });
         })
        .catch(error => {
            console.error('Failed to fetch header:', error);
             headerPlaceholder.innerHTML = '<p>Failed to load header.</p>';
        });
});
