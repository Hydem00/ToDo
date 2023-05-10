const navBurger = document.querySelector("nav.mobile div.burger");
const navMobile = document.querySelector("nav.mobile");

const navLiElementsDesktop = document.querySelectorAll(
  "nav.desktop li[data-nav]"
);

const navLiElementsMobile = document.querySelectorAll(
  "nav.mobile li[data-nav]"
);

navLiElementsDesktop.forEach((liElement) => {
  liElement.addEventListener("click", (e) => {
    e.preventDefault();
    const navDesktopHeight = document.querySelector("nav.desktop").clientHeight;
    const navTo = liElement.dataset.nav;

    window.scrollTo(
      0,
      document.querySelector(navTo).offsetTop - navDesktopHeight
    );
  });
});

navLiElementsMobile.forEach((liElement) => {
  liElement.addEventListener("click", (e) => {
    e.preventDefault();
    const navMobileHeight = document.querySelector("nav.mobile").clientHeight;
    const navTo = liElement.dataset.nav;

    window.scrollTo(
      0,
      document.querySelector(navTo).offsetTop - navMobileHeight
    );

    navMobile.classList.toggle("active");
    navBurger.classList.toggle("active");
  });
});

const navRollOut = () => {
  navBurger.classList.toggle("active");
  navMobile.classList.toggle("active");
};

navBurger.addEventListener("click", navRollOut);

// ANIMACJE OFFER
const offerDiv = document.getElementById("offer");
const offerChildDivs = offerDiv.querySelectorAll("div.offer div");

// offerChildDivs.forEach((div, index) => {
//   if (index % 2 !== 0) {
//     div.classList.remove('slide-out-right');
//     div.classList.add('slide-in-left');
//   } else {
//     div.classList.remove('slide-out-left');
//     div.classList.add('slide-in-left');
//   }
// });

window.addEventListener("scroll", () => {
  offerChildDivs.forEach((div, index) => {
    const divTop = div.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (divTop <= windowHeight / 2 && index % 2 == 0) {
      div.classList.remove("slide-out-right");
      div.classList.add("slide-in-right");
    } else if (divTop <= windowHeight / 2 && index % 2 == 1) {
      div.classList.remove("slide-out-left");
      div.classList.add("slide-in-left");
    } else {
      if (index % 2 == 0) {
        div.classList.remove("slide-in-right");
        div.classList.add("slide-out-right");
      } else {
        div.classList.remove("slide-in-left");
        div.classList.add("slide-out-left");
      }
    }
  });
});

// ANIMACJE ABOUTUS
const logo = document.querySelector("#logo");
let isAnimating = false;

const animateLogo = () => {
  const windowHeight = window.innerHeight;
  const logoTop = logo.getBoundingClientRect().top;
  if (!isAnimating && logoTop <= windowHeight / 2) {
    isAnimating = true;
    logo.classList.add("animate-logo");
    logo.addEventListener(
      "animationend",
      () => {
        isAnimating = false;
      },
      { once: true }
    );
  }
};

window.addEventListener("scroll", () => {
  requestAnimationFrame(animateLogo);
});
