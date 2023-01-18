let eventsData;

window.onload = function () {
    getLists();
}

async function addList() {
    const form = document.querySelector("div.popUpAdd div.modal-content form");
    const dataToSend = new FormData(form);
    let odp = await fetch('functions/lists.php?action=add', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    let dane = await odp.text();
    // console.log('Success:', dane);

    getLists();
}

async function getLists() {
    let response = await fetch('functions/lists.php?action=show', {
        method: 'GET',
        mode: 'cors',
    });
    const result = await response.json();
    // console.log(result);
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
        const divList = document.createElement("div");
        const h1Title = document.createElement("h1");
        const pDescription = document.createElement("p");

        const divEdit = document.createElement("div");
        divEdit.classList.add("editList");
        const buttonEdit = document.createElement("i");
        buttonEdit.className = "fa-solid fa-pen";
        divEdit.appendChild(buttonEdit);

        const divRemove = document.createElement("div");
        divRemove.classList.add("removeList");
        const buttonRemove = document.createElement("i");
        buttonRemove.className = "fa-solid fa-trash";
        divRemove.appendChild(buttonRemove);

        divList.classList.add("list");
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

async function removeList(e) {
    e.preventDefault();
    const dataToSend = new FormData();
    dataToSend.append('json', JSON.stringify({
        listID: listID
    }));
    console.log(dataToSend);
    let odp = await fetch('functions/lists.php?action=delete', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    let dane = await odp.text();
    // console.log('Success:', dane);

    getLists();
}

async function editList() {
    const form = document.querySelector("div.popUpEdit div.modal-content form");
    const dataToSend = new FormData(form);
    dataToSend.append('json', JSON.stringify({
        listID: listID
    }));
    let odp = await fetch('functions/lists.php?action=edit', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    let dane = await odp.text();
    // console.log('Success:', dane);
    modalEdit.style.display = "none";
    document.querySelector("div.popUpEdit div.modal-content form input").value = "";
    document.querySelector("div.popUpEdit div.modal-content form textarea").value = "";
    getLists();
}

async function addListEvent() {
    const form = document.querySelector("main section.menu div.addEvent form");
    const dataToSend = new FormData(form);
    dataToSend.append('json', JSON.stringify({
        listID: listID
    }));
    let odp = await fetch('functions/events.php?action=add', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    let dane = await odp.text();
    console.log('Success:', dane);

    getListsEvents();
}

async function getListsEvents() {
    let url = "functions/events.php?action=show";
    url += "&" + "list_id" + "=" + '' + listID + '';
    let odp = await fetch(url, {
        method: 'GET',
        mode: 'cors',
    });
    eventsData = await odp.json();

    clearEvents();
    // console.log('Success:', eventsData);
    createEventsElements(eventsData);
    listPropertiesSection();
}

function createEventsElements(eventData) {
    const listsEventsSection = document.querySelector('main section.menu div.events');

    for (let i = 0; i < eventData.length; i++) {
        const divListEvent = document.createElement("div");
        const h1Title = document.createElement("h1");
        const pDescription = document.createElement("p");
        const pLocation = document.createElement("p");
        const pDate = document.createElement("p");
        const pTime = document.createElement("p");
        const pPriority = document.createElement("p");

        const divColor = document.createElement("div");
        divColor.classList.add("eventColor");

        const divEventEdit = document.createElement("div");
        divEventEdit.classList.add("editListEvent");
        const buttonEdit = document.createElement("i");
        buttonEdit.className = "fa-solid fa-pen";
        divEventEdit.appendChild(buttonEdit);

        const divEventRemove = document.createElement("div");
        divEventRemove.classList.add("removeListEvent");
        const buttonRemove = document.createElement("i");
        buttonRemove.className = "fa-solid fa-trash";
        divEventRemove.appendChild(buttonRemove);

        divListEvent.classList.add("listEvent");
        divListEvent.dataset.numberOfListEvent = eventData[i].id;

        h1Title.innerText = eventData[i].nazwa;
        pDescription.innerHTML = "<i class='fa-solid fa-pen-nib'></i> " + eventData[i].opis;
        pDate.innerHTML = "<i class='fa-solid fa-calendar-days'></i> " + eventData[i].data;
        pTime.innerHTML = "<i class='fa-solid fa-clock'></i> " + eventData[i].czas;
        pLocation.innerHTML = "<i class='fa-solid fa-location-dot'></i> " + eventData[i].lokalizacja;
        pPriority.innerHTML = "<i class='fa-solid fa-star'></i> " + eventData[i].priorytet;

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
        // listsEventsSection.insertBefore(divListEvent, listsEventsSection.children[2]);
    }
}

async function editListEvent() {
    const form = document.querySelector("main section.menu div.editEvent form");
    const dataToSend = new FormData(form);
    dataToSend.append('json', JSON.stringify({
        eventID: eventID
    }));
    let odp = await fetch('functions/events.php?action=edit', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    let dane = await odp.text();
    console.log('Success:', dane);

    getListsEvents();
}

async function removeListEvent() {
    const dataToSend = new FormData();
    dataToSend.append('json', JSON.stringify({
        eventID: eventID
    }));
    let odp = await fetch('functions/events.php?action=delete', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    eventsData = await odp.json();
    console.log('Success:', eventsData);

    getListsEvents();
}

async function changePassword() {
    const changePasswordForm = document.querySelector('main section.profile div.changePassword form');
    const dataToSend = new FormData(changePasswordForm);
    let odp = await fetch('functions/profile.php?action=changePassword', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    let changePasswordResponse = await odp.json();
    console.log('Success:', changePasswordResponse);

    const changePasswordMessage = document.querySelector('main section.profile div.changePassword p');
    changePasswordMessage.textContent = changePasswordResponse.message;

    if (!changePasswordResponse.error) {
        document.querySelector('main section.profile div.changePassword form input:nth-of-type(1)').value = '';
        document.querySelector('main section.profile div.changePassword form input:nth-of-type(2)').value = '';
        document.querySelector('main section.profile div.changePassword form input:nth-of-type(3)').value = '';
    }
}

async function changeEmail() {
    const changeEmailForm = document.querySelector('main section.profile div.changeEmail form');
    const dataToSend = new FormData(changeEmailForm);
    let odp = await fetch('functions/profile.php?action=changeEmail', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    let changeEmailResponse = await odp.json();
    console.log('Success:', changeEmailResponse);

    const changeEmailMessage = document.querySelector('main section.profile div.changeEmail p');
    changeEmailMessage.textContent = changeEmailResponse.message;

    if (!changeEmailResponse.error) {
        document.querySelector('main section.profile div.changeEmail form input:nth-of-type(1)').value = '';
        document.querySelector('main section.profile div.changeEmail form input:nth-of-type(2)').value = '';
    }
}

async function deleteAccount() {
    const deleteAccountForm = document.querySelector('main section.profile div.deleteAccount form');
    const dataToSend = new FormData(deleteAccountForm);
    let odp = await fetch('functions/profile.php?action=deleteUser', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    let deleteAccountResponse = await odp.json();
    console.log('Success:', deleteAccountResponse);

    const deleteAccountMessage = document.querySelector('main section.profile div.deleteAccount p');
    deleteAccountMessage.textContent = deleteAccountResponse.message;

    if (!deleteAccountResponse.error) {
        document.querySelector('main section.profile div.deleteAccount form input').value = '';
    }
}

async function updateInformations() {
    const addInformationsForm = document.querySelector('main section.profile div.additionalInformations form');
    const dataToSend = new FormData(addInformationsForm);
    let odp = await fetch('functions/profile.php?action=updateInformations', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    let addInformationResponse = await odp.json();
    console.log('Success:', addInformationResponse);

    const addInformationMessage = document.querySelector('main section.profile div.additionalInformations p');
    addInformationMessage.textContent = addInformationResponse.message;

    if (!addInformationResponse.error) {
        document.querySelector('main section.profile div.additionalInformations form input').value = '';
    }
}