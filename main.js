document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle-checkbox');
    const menu = document.querySelector('.menu-toggle ul');

    menuToggle.addEventListener('change', function() {
        if (menuToggle.checked) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});


/* cherche */
document.getElementById('search-input').addEventListener('keyup', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const title = article.getAttribute('data-title').toLowerCase();
        if (title.includes(searchTerm)) {
            article.classList.remove('hidden');
        } else {
            article.classList.add('hidden');
        }
    });
});
