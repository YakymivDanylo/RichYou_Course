//SEARCH FORM FOR MOVIES

document.getElementById('search-button').addEventListener('click', function() {
    const searchButton = document.getElementById('search-button');
    const form = document.getElementById('form-for-search');

    searchButton.classList.toggle('active-search');
    if (form.style.display === 'flex') {
        form.style.display = 'none';
    } else {
        form.style.display = 'flex';
        document.getElementById('search-input').focus();
    }
});

document.addEventListener('click', function(event) {
    const searchButton = document.getElementById('search-button');
    const form = document.getElementById('form-for-search');

    if (!form.contains(event.target) && event.target !== searchButton && !searchButton.contains(event.target)) {
        form.style.display = 'none';
        searchButton.classList.remove('active-search');
    }
});

//BURGER MENU
document.addEventListener('DOMContentLoaded', function() {
    const burgerCheckbox = document.querySelector('#burger');
    const burgerButton = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.buttons-container-slider');

    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) &&
            event.target !== burgerButton &&
            !burgerButton.contains(event.target) &&
            event.target !== burgerCheckbox) {

            burgerCheckbox.checked = false;
        }
    });
});

//FAQ-ITEMS

document.querySelectorAll('.faq-item').forEach(item => {
    const icon = item.querySelector('.faq-icon');
    const text = item.querySelector('.faq-paragraph');

    icon.addEventListener('click', () => {
        if (icon.src.includes('icon-plus.svg')) {
            icon.src = '../icons/icon-minus.svg';
            text.classList.remove('disable');
        } else {
            icon.src = '../icons/icon-plus.svg';
            text.classList.add('disable');
        }
    });
});