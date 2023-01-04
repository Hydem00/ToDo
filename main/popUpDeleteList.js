const modal = document.getElementById("popUpRemoveList");

function popUpRemove() {
    const deleteBtns = document.querySelectorAll('main section.lists div.list div.removeList i');
    const closePopUpRemove = document.querySelector(".popUpRemove .close");
    const listTitleRemove = document.querySelector('#popUpRemoveList div.modal-content h3');

    function listConfirmation() {
        modal.style.display = "block";
        listID = this.parentElement.parentElement.dataset.numberOfList;
        listTitleRemove.innerHTML = "Are you sure you want to <b>permamently</b> delete list named '" + document.querySelector(`div.list[data-number-of-list='${listID}'] h1`).textContent + "'?";
    }

    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', listConfirmation);
    });

    closePopUpRemove.addEventListener('click', function () {
        modal.style.display = "none";
    })

    window.addEventListener('mousedown', function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })

    const confirmationBtns = document.querySelectorAll(".popUpRemove div.modal-content button");

    confirmationBtns[0].addEventListener('click', removeList);

    confirmationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = "none";
        })
    })
}