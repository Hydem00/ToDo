const calendarNavBtns = document.querySelectorAll(
  'nav.menuMobile ul li:nth-of-type(1) a, nav.menuDesktop ul li:nth-of-type(1) a'
);
const displayListsNavBtns = document.querySelectorAll(
  'nav.menuMobile ul li:nth-of-type(2) a, nav.menuDesktop ul li:nth-of-type(2) a'
);
const listsSection = document.querySelector('section.lists');
const calendarSection = document.querySelector('section.calendar');

function addEventBtnsRender() {
  const days = document.querySelectorAll('.fc-daygrid-day-top');
  days.forEach((day) => {
    const divAddEvent = document.createElement('div');
    divAddEvent.classList.add('addEventBtnPopUp');
    divAddEvent.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    day.appendChild(divAddEvent);
  });
}

async function clearCalendar() {
  const calendarListsEvents = document.querySelector('main section.calendar');
  let eventDetected = false;
  let btnDetected = false;

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

  do {
    if (
      calendarListsEvents.contains(
        document.querySelector('div.addEventBtnPopUp')
      )
    ) {
      document.querySelector('div.addEventBtnPopUp').remove();
      btnDetected = true;
    } else btnDetected = false;
  } while (btnDetected);
}

async function changeLayer() {
  listsSection.style.display = 'none';
  calendarSection.style.display = 'block';
  renderCalendar();
  await clearCalendar();
  await getListsAndEvents();
  await addEventBtnsRender();
  popUpAddEvent();
}

calendarNavBtns.forEach((calendarNavBtn) => {
  calendarNavBtn.addEventListener('click', changeLayer);
});

function changeMonth() {
  const divFcBtnsGroup = document.querySelectorAll(
    '.fc-next-button, .fc-prev-button, .fc-today-button'
  );

  divFcBtnsGroup.forEach((btn) => {
    btn.addEventListener('click', async function () {
      await clearCalendar();
      await addEventBtnsRender();
      await getListsAndEvents();
      popUpAddEvent();
    });
  });
}
