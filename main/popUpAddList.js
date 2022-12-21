const modalAdd = document.getElementById("popUpAddList");
const addListDiv = document.querySelector("section.lists div.addList i");
const closePopUpAdd = document.querySelector(".popUpAdd .close");

const popupAdd = () => {
    modalAdd.style.display = "block";
    addListDiv.classList.add("active");
}

addListDiv.addEventListener('click', popupAdd);

closePopUpAdd.addEventListener('click', function () {
    modalAdd.style.display = "none";
    addListDiv.classList.remove("active");
})

window.addEventListener('click', function (event) {
    if (event.target == modalAdd) {
        modalAdd.style.display = "none";
        addListDiv.classList.remove("active");
    }
})