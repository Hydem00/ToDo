const burger = document.querySelector('.burger');
const nav = document.querySelector('nav.menuMobile');
const main = document.querySelector('main');
let flag = false;

burger.addEventListener('click', function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
    flag = !flag;
})

main.addEventListener('click', () => {
    if (flag) {
        burger.classList.remove("active");
        nav.classList.remove("active");
        flag = false;
    }
})