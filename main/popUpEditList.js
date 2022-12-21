function popUpEdit() {
    const modalEdit = document.getElementById("popUpEditList");
    const editListDivs = document.querySelectorAll("section.lists div.list div.editList i");
    const editListBtn = document.querySelector(".popUpEdit button");
    const closePopUpEdit = document.querySelector(".popUpEdit .close");

    const popupEdit = () => {
        modalEdit.style.display = "block";
    }

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