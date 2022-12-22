window.onload = function () {
    getLists();
    document.querySelector('div.popUpAdd div.modal-content form button').addEventListener('click', addList);
}

async function addList(e) {
    e.preventDefault();
    const form = document.querySelector("div.popUpAdd div.modal-content form");
    const dataToSend = new FormData(form);
    let odp = await fetch('functions/lists.php?action=add', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    let dane = await odp.text();
    console.log('Success:', dane);
    modalAdd.style.display = "none";
    document.querySelector("div.popUpAdd div.modal-content form input").value = "";
    document.querySelector("div.popUpAdd div.modal-content form textarea").value = "";
    getLists();
}

async function getLists() {
    let response = await fetch('functions/lists.php?action=show', {
        method: 'GET',
        mode: 'cors',
    });
    const result = await response.json();
    console.log(result);
    createListsElement(result);

    const deleteBtns = document.querySelectorAll('main section.lists div.list div.removeList i');
    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', removeList);
    });

    popUpEdit();
}

function createListsElement(listData) {

    const listsSection = document.querySelector('main section.lists');
    for (let i = 0; i < listData.length + 1; i++) {
        if (listsSection.contains(document.querySelector('div.list')))
            document.querySelector('div.list').remove();
    }

    for (let i = 0; i < listData.length; i++) {
        const divList = document.createElement("div");
        const h1Title = document.createElement("h1");
        const pDescription = document.createElement("p");

        const divEdit = document.createElement("div");
        divEdit.classList.add("editList");
        const buttonEdit = document.createElement("i");
        buttonEdit.className = "fa-solid fa-pen";
        divEdit.appendChild(buttonEdit);

        const divRemove = document.createElement("div");
        divRemove.classList.add("removeList");
        const buttonRemove = document.createElement("i");
        buttonRemove.className = "fa-solid fa-trash";
        divRemove.appendChild(buttonRemove);

        divList.classList.add("list");
        divList.dataset.numberOfList = listData[i].id;

        h1Title.textContent = listData[i].nazwa;
        pDescription.textContent = listData[i].opis;

        divList.appendChild(h1Title);
        divList.appendChild(pDescription);
        divList.appendChild(divEdit);
        divList.appendChild(divRemove);
        listsSection.insertBefore(divList, listsSection.children[2]);
    }
}

async function removeList(e) {
    e.preventDefault();
    const idNumber = this.parentElement.parentElement.dataset.numberOfList;
    const dataToSend = new FormData();
    dataToSend.append('json', JSON.stringify({
        listID: idNumber
    }));
    console.log(dataToSend);
    let odp = await fetch('functions/lists.php?action=delete', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    let dane = await odp.text();
    console.log('Success:', dane);

    getLists();
}

async function editList(e) {
    e.preventDefault();
    const form = document.querySelector("div.popUpEdit div.modal-content form");
    const dataToSend = new FormData(form);
    dataToSend.append('json', JSON.stringify({
        listID: listID
    }));
    let odp = await fetch('functions/lists.php?action=edit', {
        method: 'POST',
        mode: 'cors',
        body: dataToSend
    });
    let dane = await odp.text();
    console.log('Success:', dane);
    modalEdit.style.display = "none";
    document.querySelector("div.popUpEdit div.modal-content form input").value = "";
    document.querySelector("div.popUpEdit div.modal-content form textarea").value = "";
    getLists();
}