let loginStatus;

window.onload = async function () {
  getLists();
  getProfileInformations();
  getLoginStatus();
  renderCalendar();
  await getListsAndEvents();
  await addEventBtnsRender();
  popUpAddEvent();
  changeMonth();

  if (loginStatus) {
    window.location.reload();
  }
};
