const navBurger = document.querySelector('div.burger');
const nav = document.querySelector('nav');

const navRollOut = () => {
    navBurger.classList.toggle('active');
    nav.classList.toggle('active');
}

navBurger.addEventListener('click', navRollOut);