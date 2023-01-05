let listID;
const modalList = document.getElementById("popUpList");
const listTitleProp = document.querySelector('#popUpList div.modal-content h2');
const listDescriptionProp = document.querySelector('#popUpList div.modal-content p');
const addEvent = document.querySelector('#popUpList div.modal-content form button');

function listPropertiesPopUp() {

    const listDivs = document.querySelectorAll("section.lists div.list h1, section.lists div.list p");
    const closePopUpList = document.querySelector(".popUp .close");
    const eventTitle = document.querySelector('#popUpList div.modal-content div.addEvent form input:nth-of-type(1)');
    const eventDescription = document.querySelector('#popUpList div.modal-content div.addEvent form textarea');
    const eventLocation = document.querySelector('#popUpList div.modal-content div.addEvent form input:nth-of-type(2)');
    const eventDate = document.querySelector('#popUpList div.modal-content div.addEvent form input:nth-of-type(3)');
    const eventTime = document.querySelector('#popUpList div.modal-content div.addEvent form input:nth-of-type(4)');
    const eventPriority = document.querySelector('#popUpList div.modal-content div.addEvent form input:nth-of-type(5)');
    const eventColor = document.querySelector('#popUpList div.modal-content div.addEvent form input:nth-of-type(6)');

    function addListEventValidation(e) {

        if (eventTitle.value.length != 0) {
            e.preventDefault();
            addListEvent();
            eventTitle.value = "";
            eventDescription.value = "";
            eventLocation.value = "";
            eventDate.value = "";
            eventTime.value = "";
            eventPriority.value = "";
            eventColor.value = "";
        }
    }

    function listProperties() {
        modalList.style.display = "block";
        listID = this.parentElement.dataset.numberOfList;
        listTitleProp.textContent = document.querySelector(`div.list[data-number-of-list='${listID}'] h1`).textContent;
        listDescriptionProp.textContent = document.querySelector(`div.list[data-number-of-list='${listID}'] p`).textContent;
        getListsEvents();
        addEvent.addEventListener('click', addListEventValidation);
    }

    function clearEvents() {
        const listsEventsSection = document.querySelector('#popUpList div.modal-content section.menu div.events');
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

    closePopUpList.addEventListener('click', function () {
        modalList.style.display = "none";
        clearEvents();
    })

    window.addEventListener('mousedown', function (event) {
        if (event.target == modalList) {
            modalList.style.display = "none";
            clearEvents();
        }
    })

    listDivs.forEach(list => {
        list.addEventListener('click', listProperties);
    })
}