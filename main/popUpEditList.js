let choosingIsActive = false;
const modalEdit = document.getElementById("popUpEditList");
const listTitleEdit = document.querySelector('#popUpEditList div.modal-content form input');
const listDescriptionEdit = document.querySelector('#popUpEditList div.modal-content form textarea');

function popUpEdit() {
    const editListDivs = document.querySelectorAll("section.lists div.list div.editList i");
    const closePopUpEdit = document.querySelector(".popUpEdit .close");


    function popupEdit() {
        modalEdit.style.display = "block";
        listID = this.parentElement.parentElement.dataset.numberOfList;

        listTitleEdit.value = document.querySelector(`div.list[data-number-of-list='${listID}'] h1`).textContent;
        listDescriptionEdit.value = document.querySelector(`div.list[data-number-of-list='${listID}'] p`).textContent;
    }

    editListDivs.forEach(editListDiv => {
        editListDiv.addEventListener('click', popupEdit);
    })

    closePopUpEdit.addEventListener('click', function () {
        modalEdit.style.display = "none";
    })

    window.addEventListener('mousedown', function (event) {
        if (event.target == modalEdit) {
            modalEdit.style.display = "none";
        }
    })

    function editListValidation(e) {

        if (listTitleEdit.value.length != 0) {
            e.preventDefault();
            editList();
        }
    }

    document.querySelector('div.popUpEdit div.modal-content form button').addEventListener('click', editListValidation);

    const editListBtnNav = document.querySelectorAll('nav.menuDesktop li:nth-child(3) i, nav.menuMobile ul li:nth-child(3) i');
    const divChooseList = document.querySelector('div.chooseList');
    const listsToChoose = document.querySelectorAll("section.lists div.list");

    const popUpEditFunctionality = function () {
        listID = this.dataset.numberOfList;
        divChooseList.style.top = '-50%';

        modalEdit.style.display = "block";
        listTitleEdit.value = document.querySelector(`div.list[data-number-of-list='${listID}'] h1`).textContent;
        listDescriptionEdit.value = document.querySelector(`div.list[data-number-of-list='${listID}'] p`).textContent;

        document.querySelector('div.popUpEdit div.modal-content form button').addEventListener('click', editListValidation);

        choosingIsActive = false;

        this.removeEventListener('click', popUpEditFunctionality);
    }

    editListBtnNav.forEach(editListBtn => {
        editListBtn.addEventListener('click', () => {
            choosingIsActive = true;
            divChooseList.style.top = '0';
            listsToChoose.forEach((listToChoose) => {
                listToChoose.addEventListener('click', popUpEditFunctionality);

                document.querySelector('section.lists').addEventListener('click', function exitChoosing() {
                    divChooseList.style.top = '-50%';
                    listToChoose.removeEventListener('click', popUpEditFunctionality);
                    choosingIsActive = false;
                })
            })
        })
    })


}