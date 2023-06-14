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

  if (loginStatus) {
    window.location.reload();
  }
};
