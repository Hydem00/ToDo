let loginStatus;

window.onload = function () {
  getLists();
  getProfileInformations();
  getLoginStatus();
  renderCalendar();
  getListsAndEvents();
  changeMonth();

  if (loginStatus) {
    window.location.reload();
  }
};
