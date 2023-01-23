let listID, eventID;
const sectionLists = document.querySelector('main section.lists')
const sectionEventMenu = document.querySelector('main section.menu');
const listTitleProp = document.querySelector('main section.menu h2');
const listDescriptionProp = document.querySelector('main section.menu p');
const addEvent = document.querySelector('main section.menu div.addEvent button');
const browseListsNavBtn = document.querySelectorAll('nav.menuDesktop i, nav.menuMobile ul li a i');
const goBackArrow = document.querySelector('main section.menu i');
const addEventBtn = document.querySelector('main section.menu div.events div.addEventBtn i');
const addEventForm = document.querySelector('main section.menu div.addEvent');
const editEventForm = document.querySelector('main section.menu div.editEvent');

function clearEvents() {
    const listsEventsSection = document.querySelector('main section.menu div.events');
    let eventDetected = false;

    do {
        if (listsEventsSection.contains(document.querySelector('div.listEvent'))) {
            document.querySelector('div.listEvent').remove();
            eventDetected = true;
        } else
            eventDetected = false;
    }
    while (eventDetected)
}

function listPropertiesSection() {

    const listDivs = document.querySelectorAll("section.lists div.list h1, section.lists div.list p");
    const eventTitleAdd = document.querySelector('main section.menu div.addEvent form input:nth-of-type(1)');
    const eventDescriptionAdd = document.querySelector('main section.menu div.addEvent form textarea');
    const eventLocationAdd = document.querySelector('main section.menu div.addEvent form input:nth-of-type(2)');
    const eventDateAdd = document.querySelector('main section.menu div.addEvent form input:nth-of-type(3)');
    const eventTimeAdd = document.querySelector('main section.menu div.addEvent form input:nth-of-type(4)');
    const eventPriorityAdd = document.querySelector('main section.menu div.addEvent form select');
    const eventColorAdd = document.querySelector('main section.menu div.addEvent form input[type="color"]');

    const eventTitleEdit = document.querySelector('main section.menu div.editEvent form input:nth-of-type(1)');
    const eventDescriptionEdit = document.querySelector('main section.menu div.editEvent form textarea');
    const eventLocationEdit = document.querySelector('main section.menu div.editEvent form input:nth-of-type(2)');
    const eventDateEdit = document.querySelector('main section.menu div.editEvent form input:nth-of-type(3)');
    const eventTimeEdit = document.querySelector('main section.menu div.editEvent form input:nth-of-type(4)');
    const eventPriorityEdit = document.querySelector('main section.menu div.editEvent form select');
    const eventColorEdit = document.querySelector('main section.menu div.editEvent form input[type="color"]');

    function addListEventValidation(e) {
        if (eventTitleAdd.value.length != 0 && eventDateAdd.value.length != 0 && eventTimeAdd.value.length != 0) {
            e.preventDefault();
            addListEvent();
            eventTitleAdd.value = "";
            eventDescriptionAdd.value = "";
            eventLocationAdd.value = "";
            eventDateAdd.value = "";
            eventTimeAdd.value = "";
            eventPriorityAdd.value = "1";
            eventColorAdd.value = "#000000";
        }
    }

    function listProperties(currentObject) {
        sectionLists.style.display = "none";
        sectionEventMenu.style.display = "flex";

        listID = currentObject.parentElement.dataset.numberOfList;
        listTitleProp.textContent = document.querySelector(`div.list[data-number-of-list='${listID}'] h1`).textContent;
        listDescriptionProp.textContent = document.querySelector(`div.list[data-number-of-list='${listID}'] p`).textContent;
        getListsEvents();

        addEvent.addEventListener('click', addListEventValidation);
    }

    let btnActive = false;


    addEventBtn.addEventListener('click', () => {
        if (!btnActive) {
            const addEventFormPosition = document.querySelector('div.addEvent').offsetTop;
            addEventForm.style.display = "flex";
            addEventBtn.classList.add('active');
            editEventForm.style.display = "none";
            window.scrollTo({
                top: addEventFormPosition,
                behavior: 'smooth'
            });
            btnActive = true;
        } else {
            addEventForm.style.display = "none";
            addEventBtn.classList.remove('active');
            btnActive = false;
        }

    })

    browseListsNavBtn.forEach(navBtn => {
        navBtn.addEventListener('click', () => {
            sectionEventMenu.style.display = "none";
            sectionLists.style.display = "flex";
        })
    })

    goBackArrow.addEventListener('click', () => {
        sectionEventMenu.style.display = "none";
        sectionLists.style.display = "flex";
        addEventForm.style.display = "none";
        editEventForm.style.display = "none";
        addEventBtn.classList.remove('active');
    })


    listDivs.forEach(list => {

        list.addEventListener('click', function (e) {
            if (!choosingIsActive)
                listProperties(this);
        });
    })

    function editEventValidation(e) {

        if (eventTitleEdit.value.length != 0) {
            e.preventDefault();
            editListEvent();
            eventTitleEdit.value = "";
            eventDescriptionEdit.value = "";
            eventLocationEdit.value = "";
            eventDateEdit.value = "";
            eventTimeEdit.value = "";
            eventPriorityEdit.value = "1";
            eventColorEdit.value = "#000000";
            editEventForm.style.display = "none";
        }
    }

    const editEvents = document.querySelectorAll('main section.menu div.events div.listEvent div.editListEvent i');

    editEvents.forEach(editEvent => {
        editEvent.addEventListener('click', function () {
            eventID = this.parentElement.parentElement.dataset.numberOfListEvent;
            addEventForm.style.display = "none";
            editEventForm.style.display = "flex";
            btnActive = false;
            addEventBtn.classList.remove('active');

            eventsData.forEach(event => {
                if (event.id == eventID) {
                    eventTitleEdit.value = event.nazwa;
                    eventDescriptionEdit.value = event.opis;
                    eventLocationEdit.value = event.lokalizacja;
                    eventDateEdit.value = event.data;
                    eventTimeEdit.value = event.czas;
                    eventPriorityEdit.value = event.priorytet;
                    eventColorEdit.value = event.kolor;
                }
            });

            const editEventFormPosition = document.querySelector('div.editEvent').offsetTop;

            window.scrollTo({
                top: editEventFormPosition,
                behavior: 'smooth'
            });

            document.querySelector('main section.menu div.editEvent form button').addEventListener('click', editEventValidation);
        })
    });

    const deleteEvents = document.querySelectorAll('main section.menu div.events div.listEvent div.removeListEvent i');

    const popUpRemoveEvent = document.querySelector("#popUpRemoveEvent");

    const removeInformation = document.querySelector('#popUpRemoveEvent div.modal-content h3');

    const confirmationBtns = document.querySelectorAll("#popUpRemoveEvent div.modal-content button");

    const closePopUpRemove = document.querySelector("#popUpRemoveEvent .close");

    const closeAddForm = document.querySelector('.addEvent .close');
    const closeEditForm = document.querySelector('.editEvent .close');

    deleteEvents.forEach(deleteEvent => {
        deleteEvent.addEventListener('click', function () {
            eventID = this.parentElement.parentElement.dataset.numberOfListEvent;
            popUpRemoveEvent.style.display = "block";

            eventsData.forEach(event => {
                if (event.id == eventID) {
                    removeInformation.textContent = `Are you sure you want to permamently delete event named '${event.nazwa}'?`;
                }
            });

            confirmationBtns[0].addEventListener('click', removeListEvent);
        });
    })

    confirmationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            popUpRemoveEvent.style.display = "none";
        })
    })

    window.addEventListener('mousedown', function (event) {
        if (event.target == popUpRemoveEvent) {
            popUpRemoveEvent.style.display = "none";
        }
    })

    closePopUpRemove.addEventListener('click', function () {
        popUpRemoveEvent.style.display = "none";
    })

    closeAddForm.addEventListener('click', () => {
        addEventForm.style.display = "none";
        addEventBtn.classList.remove('active');
        btnActive = false;
    })

    closeEditForm.addEventListener('click', () => {
        editEventForm.style.display = "none";
    })
}