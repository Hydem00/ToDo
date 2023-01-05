let listID;
const modalList = document.getElementById("popUpList");
const listTitleProp = document.querySelector('#popUpList div.modal-content h2');
const listDescriptionProp = document.querySelector('#popUpList div.modal-content p');
const addEvent = document.querySelector('#popUpList div.modal-content form button');

function listPropertiesPopUp() {

    const listDivs = document.querySelectorAll("section.lists div.list h1, section.lists div.list p");
    const closePopUpList = document.querySelector(".popUp .close");

    function listProperties() {
        modalList.style.display = "block";
        listID = this.parentElement.dataset.numberOfList;
        listTitleProp.textContent = document.querySelector(`div.list[data-number-of-list='${listID}'] h1`).textContent;
        listDescriptionProp.textContent = document.querySelector(`div.list[data-number-of-list='${listID}'] p`).textContent;
        getListsEvents();
        addEvent.addEventListener('click', addListEvent);
    }

    closePopUpList.addEventListener('click', function () {
        modalList.style.display = "none";
    })

    window.addEventListener('mousedown', function (event) {
        if (event.target == modalList) {
            modalList.style.display = "none";
        }
    })

    listDivs.forEach(list => {
        list.addEventListener('click', listProperties);
    })
}