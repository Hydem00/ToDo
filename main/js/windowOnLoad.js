let loginStatus;

window.onload = async function () {
  getLists();
  getProfileInformations();
  getLoginStatus();
  renderCalendar();
  getListsAndEvents();
  addEventBtnsRender();
  popUpAddEvent();
  changeMonth();

  if (loginStatus) {
    window.location.reload();
  }
};
