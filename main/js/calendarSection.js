const calendarNavBtns = document.querySelectorAll(
  'nav.menuMobile ul li:nth-of-type(1) a, nav.menuDesktop ul li:nth-of-type(1) a'
);
const displayListsNavBtns = document.querySelectorAll(
  'nav.menuMobile ul li:nth-of-type(2) a, nav.menuDesktop ul li:nth-of-type(2) a'
);
const listsSection = document.querySelector('section.lists');
const calendarSection = document.querySelector('section.calendar');

function clearCalendar() {
  const calendarListsEvents = document.querySelector('main section.calendar');
  let eventDetected = false;

  do {
    if (
      calendarListsEvents.contains(
        document.querySelector('div.listEventCalendar')
      )
    ) {
      document.querySelector('div.listEventCalendar').remove();
      eventDetected = true;
    } else eventDetected = false;
  } while (eventDetected);
}

function changeLayer() {
  listsSection.style.display = 'none';
  calendarSection.style.display = 'block';
  renderCalendar();
  clearCalendar();
  getListsAndEvents();
}

calendarNavBtns.forEach((calendarNavBtn) => {
  calendarNavBtn.addEventListener('click', changeLayer);
});

function changeMonth() {
  const divFcBtnsGroup = document.querySelectorAll(
    '.fc-next-button, .fc-prev-button, .fc-today-button'
  );

  divFcBtnsGroup.forEach((btn) => {
    btn.addEventListener('click', function () {
      clearCalendar();
      getListsAndEvents();
    });
  });
}
