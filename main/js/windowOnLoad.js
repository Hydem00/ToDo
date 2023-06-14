let loginStatus;
let myValue = null;

window.onload = async function () {
  myValue = getCookie("Theme_mode");
  console.log(myValue);
  if (myValue == 1) {
    sun();
  } else if (myValue == 0) {
    moon();
  }
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
