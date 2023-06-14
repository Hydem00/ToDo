const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");
const body = document.body;
const divTheme = document.querySelector(".theme");
const BgMain = document.querySelector("div.wrap main");
const footer = document.querySelector("footer");

function setCookie(value) {
  document.cookie = "Theme_mode=" + value;
}

function getCookie(cookie_name) {
  var cookie = document.cookie;
  var cookieArr = cookie.split(";");

  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    var name = cookiePair[0].trim();

    if (cookiePair.length > 1) {
      var value = cookiePair[1].trim();
    } else {
      var value = "";
    }

    if (name === cookie_name) {
      return value;
    }
  }

  return null;
}

function changeThemeCalendar() {
  console.log(myValue);
  const calh2 = document.getElementById("fc-dom-1");
  const iCalendarAdd = document.querySelectorAll(".addEventBtnPopUp i");
  const dayCalendar = document.querySelectorAll(".fc-scrollgrid-sync-inner a");
  const pAccountName = document.querySelector("p.name_account");

  if (myValue == 1) {
    calh2.style.color = "black";
    iCalendarAdd.forEach((i) => {
      // i.style.color = "black";
      i.classList.add("moonHover");
    });
    dayCalendar.forEach((i) => {
      i.style.color = "black";
    });
    pAccountName.style.color = "black";
  } else if (myValue == 0) {
    calh2.style.color = "white";
    iCalendarAdd.forEach((i) => {
      // i.style.color = "white";
      i.classList.add("sunHover");
    });
    dayCalendar.forEach((i) => {
      i.style.color = "white";
    });
    pAccountName.style.color = "white";
  }
}

function changeThemeYourLists() {
  console.log(myValue);
  const yourLists = document.querySelector("section.lists h1");
  const addEventColor = document.querySelector("div.addList i");

  if (myValue == 1) {
    yourLists.style.color = "black";
    addEventColor.style.color = "black";
  } else if (myValue == 0) {
    yourLists.style.color = "white"; //tutaj
    addEventColor.style.color = "white";
  }
}

function changeThemeYourProfile() {
  console.log(myValue);
  const pColorProfile = document.querySelectorAll(".profileInfo p");
  const formProfile = document.querySelectorAll("section.profile div h2");
  if (myValue == 1) {
    formProfile.forEach((i) => {
      i.style.color = "black";
    });

    pColorProfile.forEach((i) => {
      i.style.color = "black";
    });
  } else if (myValue == 0) {
    formProfile.forEach((i) => {
      i.style.color = "white";
    });
    pColorProfile.forEach((i) => {
      i.style.color = "white";
    });
  }
}

function changeThemeYourEvents() {
  console.log(myValue);
  const arrowMenuBack = document.querySelector("section.menu i.fa-arrow-up");
  const pMenu = document.querySelector("section.menu p");
  const addEvents = document.querySelector("div.events div.addEventBtn i");

  if (myValue == 1) {
    arrowMenuBack.style.color = "black";
    pMenu.style.color = "black";
    addEvents.style.color = "black";
  } else if (myValue == 0) {
    arrowMenuBack.style.color = "white";
    pMenu.style.color = "white";
    addEvents.style.color = "white";
  }
}

function moon() {
  body.style.backgroundColor = "#1d2538";
  moonIcon.style.color = "black";
  sunIcon.style.color = "gray";
  divTheme.style.backgroundColor = "white";
  BgMain.style.backgroundColor = "#1d2538";
  footer.style.backgroundColor = "#1d2538";
  footer.style.color = "white";
}
function sun() {
  body.style.backgroundColor = "white";
  moonIcon.style.color = "none";
  sunIcon.style.color = "yellow";
  divTheme.style.backgroundColor = "black";
  moonIcon.style.color = "gray";
  BgMain.style.backgroundColor = "white";
  footer.style.backgroundColor = "white";
  footer.style.color = "black";
}

moonIcon.addEventListener("click", () => {
  moon();
  setCookie(0);
  myValue = getCookie("Theme_mode");
  // location.reload();
  changeThemeYourProfile();
  changeThemeCalendar();
});

sunIcon.addEventListener("click", () => {
  sun();
  setCookie(1);
  myValue = getCookie("Theme_mode");
  // location.reload();
  changeThemeYourProfile();
  changeThemeCalendar();
});
