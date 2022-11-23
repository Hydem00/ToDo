const navBurger = document.querySelector('nav.mobile div.burger');
const nav = document.querySelector('nav.mobile');
const navLiElements = document.querySelectorAll('nav.mobile li');

const navRollOut = () => {
    navBurger.classList.toggle('active');
    nav.classList.toggle('active');
}

navBurger.addEventListener('click', navRollOut);

navLiElements.forEach((liElement) => {
    liElement.addEventListener('click', () => {
        nav.classList.toggle('active');
        navBurger.classList.toggle('active');
    })
})