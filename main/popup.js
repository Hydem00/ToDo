var modal = document.getElementById("myModal");

// Get the button that opens the modal
var divs = document.querySelectorAll("section.lists div");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

const popup = () => {
    modal.style.display = "block";
}

divs.forEach(div => {
    div.addEventListener('click', popup)
})

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function () {
    modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})