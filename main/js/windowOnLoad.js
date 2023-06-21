let loginStatus;
let myValue = null;
let myBgValue = null;

window.onload = async function () {
  myValue = getCookie('Theme_mode');
  myBgValue = getCookie('Background_mode');
  console.log(myValue);
  console.log(myBgValue);
  changeBackground();
  if (myValue == 1) {
    sun();
  } else if (myValue == 0) {
    moon();
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
      if (myValue == 1) {
        header.classList.add('sun');
      }
    } else {
      if (myValue == 1) {
        header.classList.remove('sun');
      }
    }
  });
  getLists();
  getProfileInformations();
  getLoginStatus();
  renderCalendar();
  getListsAndEvents();
  addEventBtnsRender();
  popUpAddEvent();
  changeMonth();
  changeThemeCalendar();
  changeThemeYourLists();
  changeThemeYourProfile();
  changeThemeYourEvents();
  // const sectionEventMenu = document.querySelector("main section.menu");
  // sectionEventMenu.style.display = "none";

  if (loginStatus) {
    window.location.reload();
  }
};
