const moonIcon = document.getElementById('moon');
const sunIcon = document.getElementById('sun');
const body = document.body;
const divTheme = document.querySelector('.theme');
const BgMain = document.querySelector('div.wrap main');
const footer = document.querySelector('footer');
const menuDesktop = document.querySelector('nav.menuDesktop');
const menuDesktopUl = document.querySelector('nav.menuDesktop ul');
const menuMobile = document.querySelector('nav.menuMobile');
const menuMobileUl = document.querySelector('nav.menuMobile ul');
const divCircleKey = document.querySelector('div.circleKey');
const header = document.querySelector('header');

function setCookie(cookieName, value) {
  if (cookieName === 'Theme_mode') {
    document.cookie = `${cookieName}=${value}`;
  } else if (cookieName === 'Background_mode') {
    document.cookie = `${cookieName}=${value}`;
  }
}

function getCookie(cookie_name) {
  var cookie = document.cookie;
  var cookieArr = cookie.split(';');

  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split('=');
    var name = cookiePair[0].trim();

    if (cookiePair.length > 1) {
      var value = cookiePair[1].trim();
    } else {
      var value = '';
    }

    if (name === cookie_name) {
      return value;
    }
  }

  return null;
}

const backgroundDivs = document.querySelectorAll(
  'section.profile div.background > div'
);

function removeActiveBackground() {
  backgroundDivs.forEach((div) => {
    div.style.border = '';
    body.classList.remove(body.classList[body.classList.length - 1]);
    BgMain.classList.remove(BgMain.classList[BgMain.classList.length - 1]);
    footer.classList.remove(footer.classList[footer.classList.length - 1]);
  });
}

backgroundDivs.forEach((bgDiv, index) => {
  bgDiv.addEventListener('click', () => {
    removeActiveBackground();

    const backgroundDivsPClickMe = document.querySelectorAll(
      'section.profile div.background > div > div > p:nth-of-type(1)'
    );

    if (backgroundDivsPClickMe[index].classList.contains('clicked')) {
      backgroundDivsPClickMe.forEach((div) => {
        div.className = 'clicked';
        div.textContent = 'click me';
      });
      bgDiv.style.border = '4px solid red';
      setCookie('Background_mode', index);
      changeBackground();
      backgroundDivsPClickMe[index].classList.remove('clicked');
      backgroundDivsPClickMe[index].textContent = 'Remove me';
      backgroundDivsPClickMe[index].classList.add('remove');
    } else {
      bgDiv.style.border = '';
      setCookie('Background_mode', 4);
      console.log(getCookie('Background_mode'));
      backgroundDivsPClickMe[index].classList.remove('remove');
      backgroundDivsPClickMe[index].classList.add('clicked');
      backgroundDivsPClickMe[index].textContent = 'click me';
    }
  });
});

function changeBackground() {
  myBgValue = getCookie('Background_mode');

  if (myBgValue != 4) {
    const backgroundDivsPClickMe = document.querySelectorAll(
      'section.profile div.background > div > div > p:nth-of-type(1)'
    );
    backgroundDivs[Number(myBgValue)].style.border = '4px solid red';
    backgroundDivsPClickMe[Number(myBgValue)].classList.remove('clicked');
    backgroundDivsPClickMe[Number(myBgValue)].textContent = 'Remove me';
    backgroundDivsPClickMe[Number(myBgValue)].classList.add('remove');
  }

  console.log(myBgValue);

  if (myBgValue == 0) {
    body.classList.add('bgBlueActive');
    BgMain.classList.add('bgBlueActive');
    footer.classList.add('bgBlueActive');
  } else if (myBgValue == 1) {
    body.classList.add('bgLimeActive');
    BgMain.classList.add('bgLimeActive');
    footer.classList.add('bgLimeActive');
  } else if (myBgValue == 2) {
    body.classList.add('bgGreenActive');
    BgMain.classList.add('bgGreenActive');
    footer.classList.add('bgGreenActive');
  } else if (myBgValue == 3) {
    body.classList.add('bgBlackActive');
    BgMain.classList.add('bgBlackActive');
    footer.classList.add('bgBlackActive');
  }
}

function changeThemeCalendar() {
  // console.log(myValue);
  const calh2 = document.getElementById('fc-dom-1');
  const iCalendarAdd = document.querySelectorAll('.addEventBtnPopUp i');
  const dayCalendar = document.querySelectorAll('.fc-scrollgrid-sync-inner a');
  const pAccountName = document.querySelector('p.name_account');

  if (myValue == 1) {
    calh2.style.color = 'black';
    iCalendarAdd.forEach((i) => {
      // i.style.color = "black";
      i.classList.add('moonHover');
    });
    dayCalendar.forEach((i) => {
      i.style.color = 'black';
    });
    pAccountName.style.color = 'black';
  } else if (myValue == 0) {
    calh2.style.color = 'white';
    iCalendarAdd.forEach((i) => {
      // i.style.color = "white";
      i.classList.add('sunHover');
    });
    dayCalendar.forEach((i) => {
      i.style.color = 'white';
    });
    pAccountName.style.color = 'white';
  }
}

function changeThemeYourLists() {
  // console.log(myValue);
  const yourLists = document.querySelector('section.lists h1');
  const addEventColor = document.querySelector('div.addList i');

  if (myValue == 1) {
    yourLists.style.color = 'black';
    addEventColor.style.color = 'black';
  } else if (myValue == 0) {
    yourLists.style.color = 'white'; //tutaj
    addEventColor.style.color = 'white';
  }
}

function changeThemeYourProfile() {
  // console.log(myValue);
  const pColorProfile = document.querySelectorAll('.profileInfo p');
  const formProfile = document.querySelectorAll('section.profile div h2');
  if (myValue == 1) {
    formProfile.forEach((i) => {
      i.style.color = 'black';
    });

    pColorProfile.forEach((i) => {
      i.style.color = 'black';
    });
  } else if (myValue == 0) {
    formProfile.forEach((i) => {
      i.style.color = 'white';
    });
    pColorProfile.forEach((i) => {
      i.style.color = 'white';
    });
  }
}

function changeThemeYourEvents() {
  // console.log(myValue);
  const arrowMenuBack = document.querySelector('section.menu i.fa-arrow-up');
  const pMenu = document.querySelector('section.menu p');
  const addEvents = document.querySelector('div.events div.addEventBtn i');

  if (myValue == 1) {
    arrowMenuBack.style.color = 'black';
    pMenu.style.color = 'black';
    addEvents.style.color = 'black';
  } else if (myValue == 0) {
    arrowMenuBack.style.color = 'white';
    pMenu.style.color = 'white';
    addEvents.style.color = 'white';
  }
}

function moon() {
  header.classList.remove('sun');
  body.style.backgroundColor = '#1d2538';
  moonIcon.style.color = 'black';
  sunIcon.style.color = 'gray';
  divTheme.style.backgroundColor = 'white';
  BgMain.style.backgroundColor = '#1d2538';
  footer.style.backgroundColor = '#1d2538';
  footer.style.color = 'white';
  menuDesktop.style.backgroundColor = 'black';
  menuDesktopUl.style.backgroundColor = 'black';
  menuMobile.style.backgroundColor = 'black';
  menuMobileUl.style.backgroundColor = 'black';
  divCircleKey.style.backgroundColor = 'black';
  // header.classList.remove('sun');
}
function sun() {
  if (window.innerWidth < 1024) {
    header.classList.add('sun');
  }
  body.style.backgroundColor = 'white';
  moonIcon.style.color = 'none';
  sunIcon.style.color = 'yellow';
  divTheme.style.backgroundColor = 'black';
  moonIcon.style.color = 'gray';
  BgMain.style.backgroundColor = 'white';
  footer.style.backgroundColor = 'white';
  footer.style.color = 'black';
  menuDesktop.style.backgroundColor = '#504d4d';
  menuDesktopUl.style.backgroundColor = '#504d4d';
  menuMobile.style.backgroundColor = '#504d4d';
  menuMobileUl.style.backgroundColor = '#504d4d';
  divCircleKey.style.backgroundColor = '#504d4d';
  // header.classList.add('sun');
}

moonIcon.addEventListener('click', () => {
  moon();
  setCookie('Theme_mode', 0);
  myValue = getCookie('Theme_mode');
  // location.reload();
  changeThemeYourProfile();
  changeThemeCalendar();
});

sunIcon.addEventListener('click', () => {
  sun();
  setCookie('Theme_mode', 1);
  myValue = getCookie('Theme_mode');
  // location.reload();
  changeThemeYourProfile();
  changeThemeCalendar();
});
