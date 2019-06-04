const menuBtn = document.querySelector('ul>li');
const menuItems = document.querySelector('ul>li>ol');
const toggle = document.querySelector('.toggle');
const ul = document.querySelector('#header__container ul');

menuBtn.addEventListener("click", () => {
    if (menuItems.style.display === 'none') {
        menuItems.style.display = 'block';
    } else {
        menuItems.style.display = 'none';
    }
});

toggle.addEventListener("click", () => {
    if (ul.className == 'clearfix') {
        ul.className = 'open clearfix';
    } else {
        ul.className = 'clearfix';
    }
});