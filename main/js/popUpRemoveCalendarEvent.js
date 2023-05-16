async function popUpEventRemove(prevPopUp, event_id, event_name) {
  function removeEditEventBtnListener() {
    const editEventBtn = document.querySelector('.popUpHeader i.fa-pen');
    const editEventBtnClone = editEventBtn.cloneNode(true);
    editEventBtn.parentNode.replaceChild(editEventBtnClone, editEventBtn);
    editEventBtnClone.querySelectorAll('*').forEach((node) => {
      const oldNode = node.cloneNode(true);
      node.parentNode.replaceChild(oldNode, node);
    });
  }

  const modalRemoveEvent = document.getElementById('popUpRemoveCalendarEvent');
  const closePopUpEventRemove = document.querySelector(
    '.popUpRemoveEventCalendar span.close'
  );
  const removeEventBtn = document.querySelector('.popUpHeader i.fa-trash');

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

    async function removeListEventAction() {
      await removeListEvent();
      modalRemoveEvent.style.display = 'none';
      confirmationBtns[0].removeEventListener('click', removeListEventAction);
      confirmationBtns[1].removeEventListener('click', modalHidden);
      await addEventBtnsRender();
      popUpAddEvent();
    }

    function modalHidden() {
      modalRemoveEvent.style.display = 'none';
      confirmationBtns[0].removeEventListener('click', removeListEventAction);
      confirmationBtns[1].removeEventListener('click', modalHidden);
      removeEventBtn.removeEventListener('click', removeEvent);
      removeEditEventBtnListener();
    }

    closePopUpEventRemove.addEventListener('click', function () {
      modalRemoveEvent.style.display = 'none';
      confirmationBtns[0].removeEventListener('click', removeListEventAction);
      confirmationBtns[1].removeEventListener('click', modalHidden);
      removeEventBtn.removeEventListener('click', removeEvent);
      removeEditEventBtnListener();
    });

    window.addEventListener('mousedown', function (event) {
      if (event.target == modalRemoveEvent) {
        modalRemoveEvent.style.display = 'none';
        confirmationBtns[0].removeEventListener('click', removeListEventAction);
        confirmationBtns[1].removeEventListener('click', modalHidden);
        removeEventBtn.removeEventListener('click', removeEvent);
        removeEditEventBtnListener();
      }
    });

    confirmationBtns[0].addEventListener('click', removeListEventAction);
    confirmationBtns[1].addEventListener('click', modalHidden);
    removeEventBtn.removeEventListener('click', removeEvent);
    removeEditEventBtnListener();
  }

  removeEventBtn.addEventListener('click', removeEvent);
}
