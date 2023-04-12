let loginStatus;

window.onload = function () {
  getLists();
  getProfileInformations();
  getLoginStatus();
  renderCalendar();
  getListsAndEvents();

  if (loginStatus) {
    window.location.reload();
  }
};
