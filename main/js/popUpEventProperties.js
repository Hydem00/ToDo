function popUpEventProperties() {
  const modalDisplayEvent = document.getElementById(
    'popUpCalendarEventProperties'
  );
  const closePopUpEventProperties = document.querySelector(
    '.popUpEventProperties span.close'
  );
  const calendarEvents = document.querySelectorAll('div.listEventCalendar');

  const popUpProperties = () => {
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

  calendarEvents.forEach((calendarEvent) =>
    calendarEvent.addEventListener('click', function () {
      popUpProperties();
      getEventDetails(this.dataset.numberOfListEvent);
    })
  );
}
