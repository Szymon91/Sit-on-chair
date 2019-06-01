const menuBtn = document.querySelector('ul>li');
const menuItems = document.querySelector('ul>li>ol');

menuBtn.addEventListener("click", () => {
    if (menuItems.style.display === 'none') {
        menuItems.style.display = 'block';
    } else {
        menuItems.style.display = 'none';
    }
});