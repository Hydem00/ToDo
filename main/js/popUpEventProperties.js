function popUpEventProperties() {
  const modalDisplayEvent = document.getElementById(
    'popUpCalendarEventProperties'
  );
  const closePopUpEventProperties = document.querySelector(
    'div.popUpContentEventProperties div.popUpHeader .fa-xmark'
  );
  const calendarEvents = document.querySelectorAll('div.listEventCalendar');

  const popUpVisible = () => {
    modalDisplayEvent.style.display = 'block';
  };

  closePopUpEventProperties.addEventListener('click', function () {
    modalDisplayEvent.style.display = 'none';
  });

  window.addEventListener('mousedown', function (event) {
    if (event.target == modalDisplayEvent) {
      modalDisplayEvent.style.display = 'none';
    }
  });

  function listInfo() {
    const divList = document.querySelector('div.popUpMain div.list');
    const divListActive = document.querySelector('div.listActive');

    divList.addEventListener('click', function () {
      divListActive.classList.toggle('active');
    });
  }

  calendarEvents.forEach((calendarEvent) =>
    calendarEvent.addEventListener('click', async function () {
      popUpVisible();

      await getEventDetails(this.dataset.numberOfListEvent);
      listInfo();

      popUpEventRemove(
        modalDisplayEvent,
        this.dataset.numberOfListEvent,
        calendarEvent.childNodes[2].textContent
      );
      popUpEventEdit(
        modalDisplayEvent,
        this.dataset.numberOfListEvent,
        calendarEvent
      );
    })
  );
}
