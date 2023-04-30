function popUpEventRemove(prevPopUp, event_id, event_name) {
  const modalRemoveEvent = document.getElementById('popUpRemoveCalendarEvent');
  const closePopUpEventRemove = document.querySelector(
    '.popUpRemoveEventCalendar span.close'
  );
  const removeEventBtn = document.querySelector(
    '.eventDetailsHeader .removeListEventCalendar i'
  );

  function removeEvent() {
    modalRemoveEvent.style.display = 'block';
    prevPopUp.style.display = 'none';

    const removeInformation = document.querySelector(
      '#popUpRemoveCalendarEvent div.modal-content h3'
    );

    const confirmationBtns = document.querySelectorAll(
      '#popUpRemoveCalendarEvent div.modal-content button'
    );

    removeInformation.textContent = `Are you sure you want to permamently delete event named '${event_name}'?`;

    eventID = event_id;

    confirmationBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        if (index == 0) {
          removeListEvent();
          modalRemoveEvent.style.display = 'none';
        } else {
          modalRemoveEvent.style.display = 'none';
        }
      });
    });
  }

  removeEventBtn.addEventListener('click', removeEvent);

  closePopUpEventRemove.addEventListener('click', function () {
    modalRemoveEvent.style.display = 'none';
  });

  window.addEventListener('mousedown', function (event) {
    if (event.target == modalRemoveEvent) {
      modalRemoveEvent.style.display = 'none';
    }
  });
}
