const burgerMenu = document.getElementById("burger-menu");
const burgerButton = document.getElementById("burger-button");
const burgerButtonClose = document.getElementById("burger-button-close");

burgerButton.addEventListener("click", () => {
    burgerMenu.classList.toggle('-translate-x-full');
    burgerMenu.classList.toggle('translate-x-0');
});

burgerButtonClose.addEventListener("click", () => {
    burgerMenu.classList.add('-translate-x-full'); // Сховуємо меню
    burgerMenu.classList.remove('translate-x-0'); 
});