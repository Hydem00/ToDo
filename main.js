const navBurger = document.querySelector('nav.mobile div.burger');
const nav = document.querySelector('nav.mobile');

const navRollOut = () => {
    navBurger.classList.toggle('active');
    nav.classList.toggle('active');
}

navBurger.addEventListener('click', navRollOut);