const burger = document.querySelector('.burger');
const nav = document.querySelector('nav.menuMobile');
const divWrap = document.querySelector('div.wrap');
let flag = false;

burger.addEventListener('click', function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
    flag=!flag;
})

divWrap.addEventListener('click',()=>{
    if(flag){
        burger.classList.remove("active");
        nav.classList.remove("active");
        flag = false;
    }
})