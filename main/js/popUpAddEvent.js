function popUpAddEvent() {
  const modalDisplayEvent = document.getElementById('popUpAddEvent');
  const closePopUpEventProperties = document.querySelector(
    '.popUpAddEvent span.close'
  );

  let chosenDate;

  async function addListEventValidation(e) {
    const eventTitleAdd = document.querySelector(
      '#popUpAddEvent div.addEvent form input:nth-of-type(1)'
    );
    const eventDescriptionAdd = document.querySelector(
      '#popUpAddEvent div.addEvent form textarea'
    );
    const eventLocationAdd = document.querySelector(
      '#popUpAddEvent div.addEvent form input:nth-of-type(2)'
    );
    const eventTimeAdd = document.querySelector(
      '#popUpAddEvent div.addEvent form input:nth-of-type(3)'
    );
    const eventPriorityAdd = document.querySelector(
      '#popUpAddEvent div.addEvent form select'
    );
    const eventColorAdd = document.querySelector(
      '#popUpAddEvent div.addEvent form input[type="color"]'
    );

    const selectElement = document.getElementById('chosen_list');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const dataListId = selectedOption.getAttribute('data-list-id');

    if (eventTitleAdd.value.length != 0 && eventTimeAdd.value.length != 0) {
      e.preventDefault();
      console.log(chosenDate);
      await addListEventPopUp(dataListId, chosenDate);
      eventTitleAdd.value = '';
      eventDescriptionAdd.value = '';
      eventLocationAdd.value = '';
      eventTimeAdd.value = '';
      eventPriorityAdd.value = '1';
      eventColorAdd.value = '#000000';
      modalDisplayEvent.style.display = 'none';
      this.removeEventListener('click', addListEventValidation);
    }
  }

  function clearForm() {
    const eventTitleAdd = document.querySelector(
      '#popUpAddEvent div.addEvent form input:nth-of-type(1)'
    );
    const eventDescriptionAdd = document.querySelector(
      '#popUpAddEvent div.addEvent form textarea'
    );
    const eventLocationAdd = document.querySelector(
      '#popUpAddEvent div.addEvent form input:nth-of-type(2)'
    );
    const eventTimeAdd = document.querySelector(
      '#popUpAddEvent div.addEvent form input:nth-of-type(3)'
    );
    const eventPriorityAdd = document.querySelector(
      '#popUpAddEvent div.addEvent form select'
    );
    const eventColorAdd = document.querySelector(
      '#popUpAddEvent div.addEvent form input[type="color"]'
    );

    eventTitleAdd.value = '';
    eventDescriptionAdd.value = '';
    eventLocationAdd.value = '';
    eventTimeAdd.value = '';
    eventPriorityAdd.value = '1';
    eventColorAdd.value = '#000000';
    modalDisplayEvent.style.display = 'none';
  }

  async function popUpVisible() {
    chosenDate = this.parentNode.parentNode.parentNode.dataset.date;
    modalDisplayEvent.style.display = 'block';
    await getListsToAddEventPopUp();

    const btnAddEvent = document.getElementById('addEventBtnPopUp');

    btnAddEvent.addEventListener('click', addListEventValidation);
  }

  closePopUpEventProperties.addEventListener('click', function () {
    modalDisplayEvent.style.display = 'none';
    clearForm();
  });

  window.addEventListener('mousedown', function (event) {
    if (event.target == modalDisplayEvent) {
      modalDisplayEvent.style.display = 'none';
      clearForm();
    }
  });

  const addEventBtns = document.querySelectorAll('div.addEventBtnPopUp');
  addEventBtns.forEach((addEventBtn) => {
    addEventBtn.addEventListener('click', popUpVisible);
  });
}
