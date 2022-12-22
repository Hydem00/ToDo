let listID;
const modalEdit = document.getElementById("popUpEditList");

function popUpEdit() {
    const editListDivs = document.querySelectorAll("section.lists div.list div.editList i");
    const editListBtns = document.querySelectorAll(".popUpEdit button");
    const closePopUpEdit = document.querySelector(".popUpEdit .close");

    function popupEdit() {
        modalEdit.style.display = "block";
        listID = this.parentElement.parentElement.dataset.numberOfList;
    }

    editListBtns.forEach(editListBtn => {
        editListBtn.addEventListener('click', editList);
    })

    editListDivs.forEach(editListDiv => {
        editListDiv.addEventListener('click', popupEdit);
    })

    closePopUpEdit.addEventListener('click', function () {
        modalEdit.style.display = "none";
    })

    window.addEventListener('click', function (event) {
        if (event.target == modalEdit) {
            modalEdit.style.display = "none";
        }
    })
}