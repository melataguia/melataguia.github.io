document.addEventListener('DOMContentLoaded', function() {
    const body = document.getElementById('theme-body');
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
             document.getElementById('header-placeholder').innerHTML = data;
          const themeToggle = document.getElementById('theme-toggle');
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
            document.getElementById('header-placeholder').innerHTML = '<p>Failed to load header.</p>';
        });
});
