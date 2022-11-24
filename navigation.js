const navBurger = document.querySelector('nav.mobile div.burger');
const navMobile = document.querySelector('nav.mobile');

const navLiElementsDesktop = document.querySelectorAll('nav.desktop li');

const navLiElementsMobile = document.querySelectorAll('nav.mobile li');

navLiElementsDesktop.forEach((liElement) => {
    liElement.addEventListener('click', (e) => {
        e.preventDefault();
        const navDesktopHeight = document.querySelector('nav.desktop').clientHeight;
        const navTo = liElement.dataset.nav;

        window.scrollTo(0, (document.querySelector(navTo).offsetTop) - (navDesktopHeight));
    })
})

navLiElementsMobile.forEach((liElement) => {
    liElement.addEventListener('click', (e) => {
        e.preventDefault();
        const navMobileHeight = document.querySelector('nav.mobile').clientHeight;
        const navTo = liElement.dataset.nav;

        window.scrollTo(0, (document.querySelector(navTo).offsetTop) - (navMobileHeight));

        navMobile.classList.toggle('active');
        navBurger.classList.toggle('active');
    });
})

const navRollOut = () => {
    navBurger.classList.toggle('active');
    navMobile.classList.toggle('active');
}

navBurger.addEventListener('click', navRollOut);