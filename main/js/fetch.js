let eventsData, eventDetails;

function preventBack() {
  window.history.forward();
}

setTimeout('preventBack()', 0);

window.onunload = function () {
  null;
};

async function addList() {
  const form = document.querySelector('div.popUpAdd div.modal-content form');
  const dataToSend = new FormData(form);
  let odp = await fetch('functions/lists.php?action=add', {
    method: 'POST',
    mode: 'cors',
    body: dataToSend,
  });
  let dane = await odp.text();

  getLists();
}

async function getLists() {
  let response = await fetch('functions/lists.php?action=show', {
    method: 'GET',
    mode: 'cors',
  });
  const result = await response.json();
  createListsElement(result);

  popUpEdit();

  listPropertiesSection();

  popUpRemove();
}

function createListsElement(listData) {
  const listsSection = document.querySelector('main section.lists');
  for (let i = 0; i < listData.length + 1; i++) {
    if (listsSection.contains(document.querySelector('div.list')))
      document.querySelector('div.list').remove();
  }

  for (let i = 0; i < listData.length; i++) {
    const divList = document.createElement('div');
    const h1Title = document.createElement('h1');
    const pDescription = document.createElement('p');

    const divEdit = document.createElement('div');
    divEdit.classList.add('editList');
    const buttonEdit = document.createElement('i');
    buttonEdit.className = 'fa-solid fa-pen';
    divEdit.appendChild(buttonEdit);

    const divRemove = document.createElement('div');
    divRemove.classList.add('removeList');
    const buttonRemove = document.createElement('i');
    buttonRemove.className = 'fa-solid fa-trash';
    divRemove.appendChild(buttonRemove);

    divList.classList.add('list');
    divList.dataset.numberOfList = listData[i].id;

    h1Title.textContent = listData[i].nazwa;
    pDescription.textContent = listData[i].opis;

    divList.appendChild(h1Title);
    divList.appendChild(pDescription);
    divList.appendChild(divEdit);
    divList.appendChild(divRemove);
    listsSection.insertBefore(divList, listsSection.children[2]);
  }
}

async function getListsToAddEventPopUp() {
  let response = await fetch('functions/lists.php?action=show', {
    method: 'GET',
    mode: 'cors',
  });
  const result = await response.json();

  addEventSelectFunctionality(result);
}

function addEventSelectFunctionality(listsData) {
  let childOptionDetected = false;
  const chosenList = document.getElementById('chosen_list');

  do {
    if (chosenList.contains(document.querySelector('#chosen_list option'))) {
      chosenList.remove(document.querySelector('#chosen_list option'));
      childOptionDetected = true;
    } else {
      childOptionDetected = false;
    }
  } while (childOptionDetected);

  listsData.forEach((listData) => {
    const option = document.createElement('option');
    option.textContent = listData.nazwa;
    option.dataset.listId = listData.id;
    chosenList.appendChild(option);
  });
}

async function removeList(e) {
  e.preventDefault();
  const dataToSend = new FormData();
  dataToSend.append(
    'json',
    JSON.stringify({
      listID: listID,
    })
  );
  let odp = await fetch('functions/lists.php?action=delete', {
    method: 'POST',
    mode: 'cors',
    body: dataToSend,
  });
  let dane = await odp.text();

  getLists();
}

async function editList() {
  const form = document.querySelector('div.popUpEdit div.modal-content form');
  const dataToSend = new FormData(form);
  dataToSend.append(
    'json',
    JSON.stringify({
      listID: listID,
    })
  );
  let odp = await fetch('functions/lists.php?action=edit', {
    method: 'POST',
    mode: 'cors',
    body: dataToSend,
  });
  let dane = await odp.text();
  modalEdit.style.display = 'none';
  document.querySelector('div.popUpEdit div.modal-content form input').value =
    '';
  document.querySelector(
    'div.popUpEdit div.modal-content form textarea'
  ).value = '';
  getLists();
}

async function addListEvent() {
  const form = document.querySelector('main section.menu div.addEvent form');
  const dataToSend = new FormData(form);
  dataToSend.append(
    'json',
    JSON.stringify({
      listID: listID,
    })
  );
  let odp = await fetch('functions/events.php?action=add', {
    method: 'POST',
    mode: 'cors',
    body: dataToSend,
  });
  let dane = await odp.text();

  getListsEvents();
}

async function addListEventPopUp(listId, chosenDate) {
  const form = document.querySelector('#popUpAddEvent div.addEvent form');
  const dataToSend = new FormData(form);
  dataToSend.append(
    'json',
    JSON.stringify({
      listID: listId,
      chosenDate: chosenDate,
    })
  );
  let odp = await fetch('functions/events.php?action=add', {
    method: 'POST',
    mode: 'cors',
    body: dataToSend,
  });
  let dane = await odp.text();

  await clearCalendar();
  await addEventBtnsRender();
  popUpAddEvent();
  await getListsAndEvents();
}

async function getListsEvents() {
  let url = 'functions/events.php?action=show';
  url += '&' + 'list_id' + '=' + '' + listID + '';
  let odp = await fetch(url, {
    method: 'GET',
    mode: 'cors',
  });
  eventsData = await odp.json();

  // console.log(eventsData);
  clearEvents();
  createEventsElements(eventsData);
  listPropertiesSection();
}

function createEventsElements(eventData) {
  const listsEventsSection = document.querySelector(
    'main section.menu div.events'
  );

  for (let i = 0; i < eventData.length; i++) {
    const divListEvent = document.createElement('div');
    const h1Title = document.createElement('h1');
    const pDescription = document.createElement('p');
    const pLocation = document.createElement('p');
    const pDate = document.createElement('p');
    const pTime = document.createElement('p');
    const pPriority = document.createElement('p');

    const divColor = document.createElement('div');
    divColor.classList.add('eventColor');

    const divEventEdit = document.createElement('div');
    divEventEdit.classList.add('editListEvent');
    const buttonEdit = document.createElement('i');
    buttonEdit.className = 'fa-solid fa-pen';
    divEventEdit.appendChild(buttonEdit);

    const divEventRemove = document.createElement('div');
    divEventRemove.classList.add('removeListEvent');
    const buttonRemove = document.createElement('i');
    buttonRemove.className = 'fa-solid fa-trash';
    divEventRemove.appendChild(buttonRemove);

    divListEvent.classList.add('listEvent');
    divListEvent.dataset.numberOfListEvent = eventData[i].id;

    h1Title.innerText = eventData[i].nazwa;
    pDescription.innerHTML =
      "<i class='fa-solid fa-pen-nib'></i> " + eventData[i].opis;
    pDate.innerHTML =
      "<i class='fa-solid fa-calendar-days'></i> " + eventData[i].data;
    pTime.innerHTML = "<i class='fa-solid fa-clock'></i> " + eventData[i].czas;
    pLocation.innerHTML =
      "<i class='fa-solid fa-location-dot'></i> " + eventData[i].lokalizacja;
    pPriority.innerHTML =
      "<i class='fa-solid fa-star'></i> " + eventData[i].priorytet;

    divListEvent.appendChild(h1Title);
    divListEvent.appendChild(pDescription);
    divListEvent.appendChild(pDate);
    divListEvent.appendChild(pTime);
    divListEvent.appendChild(pLocation);
    divListEvent.appendChild(pPriority);

    divColor.style.backgroundColor = eventData[i].kolor;

    divListEvent.appendChild(divEventEdit);
    divListEvent.appendChild(divEventRemove);
    divListEvent.appendChild(divColor);
    listsEventsSection.appendChild(divListEvent);
  }
}

async function getListsAndEvents() {
  let url = 'functions/events.php?action=showAll';
  let odp = await fetch(url, {
    method: 'GET',
    mode: 'cors',
  });
  eventsData = await odp.json();

  // console.log(eventsData);
  // clearEvents();
  createEventsElementsCalendar(eventsData);
  popUpEventProperties();
}

function createEventsElementsCalendar(eventData) {
  for (let i = 0; i < eventData.length; i++) {
    const divListEvent = document.createElement('div');
    const h1ListTitle = document.createElement('h1');
    const h1EventTitle = document.createElement('h1');
    const pTime = document.createElement('p');

    const divColor = document.createElement('div');
    divColor.classList.add('eventColorCalendar');

    const divEventEdit = document.createElement('div');
    divEventEdit.classList.add('editListEventCalendar');
    const buttonEdit = document.createElement('i');
    buttonEdit.className = 'fa-solid fa-pen';
    divEventEdit.appendChild(buttonEdit);

    const divEventRemove = document.createElement('div');
    divEventRemove.classList.add('removeListEventCalendar');
    const buttonRemove = document.createElement('i');
    buttonRemove.className = 'fa-solid fa-trash';
    divEventRemove.appendChild(buttonRemove);

    divListEvent.classList.add('listEventCalendar');
    divListEvent.dataset.numberOfListEvent = eventData[i].id;

    h1ListTitle.innerText = eventData[i].nazwa_listy;
    h1EventTitle.innerText = eventData[i].nazwa_wydarzenia;
    pTime.innerHTML = eventData[i].czas;

    divListEvent.appendChild(h1ListTitle);
    divListEvent.appendChild(pTime);
    divListEvent.appendChild(h1EventTitle);

    divColor.style.backgroundColor = eventData[i].kolor;

    divListEvent.appendChild(divEventEdit);
    divListEvent.appendChild(divColor);
    divListEvent.appendChild(divEventRemove);

    // console.log(eventData[i].data);
    if (
      document.querySelector(
        `td.fc-day[data-date='${eventData[i].data}'] .fc-daygrid-day-events`
      ) == null
    ) {
      // console.log('null');
      continue;
    }

    document
      .querySelector(
        `td.fc-day[data-date='${eventData[i].data}'] .fc-daygrid-day-events`
      )
      .appendChild(divListEvent);
  }
}

async function getEventDetails(event_id) {
  let url = 'functions/events.php?action=showDetails';
  url += '&' + 'event_id' + '=' + '' + event_id + '';
  let odp = await fetch(url, {
    method: 'GET',
    mode: 'cors',
  });
  eventDetails = await odp.json();

  // console.log(eventDetails);

  renderDetailsToPopUp(eventDetails);
}

function renderDetailsToPopUp(eventDetails) {
  const popUp = document.querySelector(
    '#popUpCalendarEventProperties .modal-content'
  );

  if (popUp.contains(document.querySelector('div.eventDetails'))) {
    document.querySelector('div.eventDetails').remove();
  }

  const divEventDetails = document.createElement('div');

  const divHeader = document.createElement('div');
  divHeader.classList.add('eventDetailsHeader');

  const divEventEdit = document.createElement('div');
  divEventEdit.classList.add('editListEventCalendar');
  const buttonEdit = document.createElement('i');
  buttonEdit.className = 'fa-solid fa-pen';
  divEventEdit.appendChild(buttonEdit);

  const h1PopUpInfo = document.createElement('h2');
  h1PopUpInfo.innerText = 'Event Properties';

  const divEventRemove = document.createElement('div');
  divEventRemove.classList.add('removeListEventCalendar');
  const buttonRemove = document.createElement('i');
  buttonRemove.className = 'fa-solid fa-trash';
  divEventRemove.appendChild(buttonRemove);

  divHeader.appendChild(divEventEdit);
  divHeader.appendChild(h1PopUpInfo);
  divHeader.appendChild(divEventRemove);

  const divListInfo = document.createElement('div');
  divListInfo.classList.add('listInfo');

  const divListInfoBackground = document.createElement('div');
  divListInfoBackground.classList.add('listInfoBackground');
  const h1ListTitle = document.createElement('h1');
  const pListDescription = document.createElement('p');

  const divEventInfo = document.createElement('div');
  divEventInfo.classList.add('eventInfo');

  const divEventInfoBackground = document.createElement('div');
  divEventInfoBackground.classList.add('eventInfoBackground');

  const h1EventTitle = document.createElement('h1');

  const pEventData = document.createElement('p');
  const pData = document.createElement('i');
  pData.classList.add('fa-solid', 'fa-calendar-days');

  const pEventTime = document.createElement('p');
  const pCzas = document.createElement('i');
  pCzas.classList.add('fa-solid', 'fa-clock');
  // pCzas.textContent = "Time";

  const pEventDescription = document.createElement('p');
  const pOpis = document.createElement('i');
  pOpis.classList.add('fa-solid', 'fa-pen-nib');
  // pOpis.textContent = "Description";

  const pEventLocalization = document.createElement('p');
  const pLokalizacja = document.createElement('i');
  pLokalizacja.classList.add('fa-solid', 'fa-location-dot');
  // pLokalizacja.textContent = "Location";

  const pEventPriority = document.createElement('p');
  const pPriorytet = document.createElement('i');
  pPriorytet.classList.add('fa-solid', 'fa-star');
  // pPriorytet.textContent = "Priority";

  const divEventColor = document.createElement('div');
  const pKolor = document.createElement('i');
  pKolor.classList.add('fa-solid', 'fa-palette');
  // pKolor.textContent = "Color";

  divEventColor.classList.add('eventColorCalendar');

  divEventDetails.classList.add('eventDetails');

  h1ListTitle.innerText = eventDetails[0].lista_nazwa;

  if (eventDetails[0].lista_opis == '') {
    pListDescription.innerText = '...';
  } else {
    pListDescription.innerText = eventDetails[0].lista_opis;
  }

  h1EventTitle.innerText = eventDetails[0].nazwa;

  if (eventDetails[0].opis == '') {
    pEventDescription.innerText = '...';
  } else {
    pEventDescription.innerText = eventDetails[0].opis;
  }

  pEventData.innerHTML = eventDetails[0].data;
  pEventTime.innerHTML = eventDetails[0].czas;

  if (eventDetails[0].lokalizacja == '') {
    pEventLocalization.innerHTML = '...';
  } else {
    pEventLocalization.innerHTML = eventDetails[0].lokalizacja;
  }

  pEventPriority.innerHTML = eventDetails[0].priorytet;

  divListInfoBackground.appendChild(h1ListTitle);
  divListInfoBackground.appendChild(pListDescription);
  divListInfo.appendChild(divListInfoBackground);

  divEventInfoBackground.appendChild(h1EventTitle);
  pEventDescription.appendChild(pOpis);
  divEventInfoBackground.appendChild(pEventDescription);

  pEventData.appendChild(pData);
  divEventInfoBackground.appendChild(pEventData);

  // divEventInfoBackground.appendChild(pCzas);
  pEventTime.appendChild(pCzas);
  divEventInfoBackground.appendChild(pEventTime);

  // divEventInfoBackground.appendChild(pLokalizacja);
  pEventLocalization.appendChild(pLokalizacja);
  divEventInfoBackground.appendChild(pEventLocalization);

  // divEventInfoBackground.appendChild(pPriorytet);
  pEventPriority.appendChild(pPriorytet);
  divEventInfoBackground.appendChild(pEventPriority);

  divEventColor.style.backgroundColor = eventDetails[0].kolor;
  // divEventInfoBackground.appendChild(pKolor);
  divEventColor.appendChild(pKolor);
  divEventInfoBackground.appendChild(divEventColor);

  divEventInfo.appendChild(divEventInfoBackground);

  divEventDetails.appendChild(divHeader);
  divEventDetails.appendChild(divListInfo);
  divEventDetails.appendChild(divEventInfo);

  popUp.appendChild(divEventDetails);
}

async function editListEvent() {
  const form = document.querySelector('main section.menu div.editEvent form');
  const dataToSend = new FormData(form);
  dataToSend.append(
    'json',
    JSON.stringify({
      eventID: eventID,
    })
  );
  let odp = await fetch('functions/events.php?action=edit', {
    method: 'POST',
    mode: 'cors',
    body: dataToSend,
  });
  let dane = await odp.text();

  getListsEvents();
}

async function editListEventCalendar() {
  const form = document.querySelector(
    '.popUpEditEventCalendar div.editEvent form'
  );
  const dataToSend = new FormData(form);
  dataToSend.append(
    'json',
    JSON.stringify({
      eventID: eventID,
    })
  );
  let odp = await fetch('functions/events.php?action=edit', {
    method: 'POST',
    mode: 'cors',
    body: dataToSend,
  });
  let dane = await odp.text();

  getListsEvents();
  await clearCalendar();
  getListsAndEvents();
}

async function removeListEvent() {
  const dataToSend = new FormData();
  dataToSend.append(
    'json',
    JSON.stringify({
      eventID: eventID,
    })
  );
  let odp = await fetch('functions/events.php?action=delete', {
    method: 'POST',
    mode: 'cors',
    body: dataToSend,
  });
  eventsData = await odp.json();

  getListsEvents();
  await clearCalendar();
  getListsAndEvents();
}

async function changePassword() {
  const changePasswordForm = document.querySelector(
    'main section.profile div.changePassword form'
  );
  const dataToSend = new FormData(changePasswordForm);
  let odp = await fetch('functions/profile.php?action=changePassword', {
    method: 'POST',
    mode: 'cors',
    body: dataToSend,
  });
  let changePasswordResponse = await odp.json();

  const changePasswordMessage = document.querySelector(
    'main section.profile div.changePassword p'
  );
  changePasswordMessage.textContent = changePasswordResponse.message;

  if (!changePasswordResponse.error) {
    document.querySelector(
      'main section.profile div.changePassword form input:nth-of-type(1)'
    ).value = '';
    document.querySelector(
      'main section.profile div.changePassword form input:nth-of-type(2)'
    ).value = '';
    document.querySelector(
      'main section.profile div.changePassword form input:nth-of-type(3)'
    ).value = '';
  }
}

async function changeEmail() {
  const changeEmailForm = document.querySelector(
    'main section.profile div.changeEmail form'
  );
  const dataToSend = new FormData(changeEmailForm);
  let odp = await fetch('functions/profile.php?action=changeEmail', {
    method: 'POST',
    mode: 'cors',
    body: dataToSend,
  });
  let changeEmailResponse = await odp.json();

  const changeEmailMessage = document.querySelector(
    'main section.profile div.changeEmail p'
  );
  changeEmailMessage.textContent = changeEmailResponse.message;

  if (!changeEmailResponse.error) {
    document.querySelector(
      'main section.profile div.changeEmail form input:nth-of-type(1)'
    ).value = '';
    document.querySelector(
      'main section.profile div.changeEmail form input:nth-of-type(2)'
    ).value = '';
  }

  getProfileInformations();
}

async function deleteAccount() {
  const deleteAccountForm = document.querySelector(
    'main section.profile div.deleteAccount form'
  );
  const dataToSend = new FormData(deleteAccountForm);
  let odp = await fetch('functions/profile.php?action=deleteUser', {
    method: 'POST',
    mode: 'cors',
    body: dataToSend,
  });
  let deleteAccountResponse = await odp.json();

  const deleteAccountMessage = document.querySelector(
    'main section.profile div.deleteAccount p'
  );

  if (!deleteAccountResponse.error) {
    document.querySelector(
      'main section.profile div.deleteAccount form input'
    ).value = '';
    window.location.reload();
  } else {
    deleteAccountMessage.textContent = deleteAccountResponse.message;
  }
}

async function updateInformations() {
  const addInformationsForm = document.querySelector(
    'main section.profile div.additionalInformations form'
  );
  const dataToSend = new FormData(addInformationsForm);
  let odp = await fetch('functions/profile.php?action=updateInformations', {
    method: 'POST',
    mode: 'cors',
    body: dataToSend,
  });
  let addInformationResponse = await odp.json();

  const addInformationMessage = document.querySelector(
    'main section.profile div.additionalInformations p'
  );
  addInformationMessage.textContent = addInformationResponse.message;

  if (!addInformationResponse.error) {
    document.querySelector(
      'main section.profile div.additionalInformations form input'
    ).value = '';
  }

  getProfileInformations();
}

async function getProfileInformations() {
  let odp = await fetch('functions/profile.php?action=showProfile', {
    method: 'GET',
    mode: 'cors',
  });

  profileInfo = await odp.json();

  createProfileElements(profileInfo);
  profileInfoHeader(profileInfo);
}

function createProfileElements(profileData) {
  const profileSection = document.querySelector('main section.profile');

  if (profileSection.contains(document.querySelector('div.profileInfo')))
    document.querySelector('div.profileInfo').remove();

  const profileInfoDiv = document.createElement('div');
  profileInfoDiv.classList.add('profileInfo');

  const profileImg = document.createElement('img');
  profileImg.classList.add('profileImg');

  const nick = document.createElement('p');
  nick.classList.add('nick');

  const email = document.createElement('p');
  email.classList.add('email');

  profileImg.src = profileData.img;
  nick.textContent = `Nick: ${profileData.info.nick}`;
  email.textContent = `Email: ${profileData.email}`;

  profileInfoDiv.appendChild(profileImg);
  profileInfoDiv.appendChild(nick);
  profileInfoDiv.appendChild(email);

  profileSection.insertBefore(profileInfoDiv, profileSection.children[0]);
}

async function getLoginStatus() {
  let response = await fetch('functions/check.php', {
    method: 'GET',
    mode: 'cors',
  });

  loginStatus = await response.json();
  // console.log(loginStatus);
}
