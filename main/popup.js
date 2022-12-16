var modal = document.getElementById("myModal");
var addListSpan = document.querySelector("section.lists div.addList span");
var closePopUp = document.getElementsByClassName("close")[0];

const popup = () => {
    modal.style.display = "block";
    addListSpan.classList.add("active");
}

addListSpan.addEventListener('click', popup);

// When the user clicks on <span> (x), close the modal
closePopUp.addEventListener('click', function () {
    modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        addListSpan.classList.remove("active");
    }
})