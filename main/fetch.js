window.onload = function () {
    document.querySelector('div.modal div.modal-content form button').addEventListener('click', addList);

}

async function addList(e) {
    e.preventDefault();
    const form = document.querySelector("div.modal-content form");
    const dataToSend = new FormData(form);
    let odp = await fetch('functions/lists.php?action=add', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    let dane = await odp.text();
    console.log('Success:', dane);
    modal.style.display = "none";
    document.querySelector("div.modal-content form input").value = "";
    document.querySelector("div.modal-content form textarea").value = "";
}