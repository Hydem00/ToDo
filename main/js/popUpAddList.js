const modalAdd = document.getElementById('popUpAddList');
const addListDiv = document.querySelector('section.lists div.addList i');
const closePopUpAdd = document.querySelector('.popUpAdd .close');

const popupAdd = () => {
  modalAdd.style.display = 'block';
  addListDiv.classList.add('active');
};

addListDiv.addEventListener('click', popupAdd);

ctrlPressed = false;
altPressed = false;
let lPressed = false;

document.addEventListener('keydown', function (event) {
  if (event.code === 'ControlLeft') {
    ctrlPressed = true;
  } else if (event.code === 'AltLeft') {
    altPressed = true;
  } else if (event.code === 'KeyL') {
    lPressed = true;
  }

  if (
    (ctrlPressed && altPressed && lPressed) ||
    (event.ctrlKey && event.altKey && event.code === 'KeyL')
  ) {
    console.log('ctrl+alt+l');
    popupAdd();
  }
});

document.addEventListener('keyup', function (event) {
  if (event.code === 'ControlLeft') {
    ctrlPressed = false;
  } else if (event.code === 'AltLeft') {
    altPressed = false;
  } else if (event.code === 'KeyL') {
    lPressed = false;
  }
});

// document.addEventListener('keydown', function (event) {
//   if (event.ctrlKey && event.altKey && event.code === 'KeyL') {
//     console.log('ctrl+alt+l');
//     popupAdd();
//   }
// });

document
  .querySelector('nav.menuMobile li a.addList')
  .addEventListener('click', popupAdd);
document
  .querySelector('nav.menuDesktop li a.addList')
  .addEventListener('click', popupAdd);

closePopUpAdd.addEventListener('click', function () {
  modalAdd.style.display = 'none';
  addListDiv.classList.remove('active');
  listTitle.style.border = '2px solid #ccc';
});

window.addEventListener('mousedown', function (event) {
  if (event.target == modalAdd) {
    modalAdd.style.display = 'none';
    addListDiv.classList.remove('active');
    listTitle.style.border = '2px solid #ccc';
  }
});

const listTitle = document.querySelector(
  '#popUpAddList div.modal-content form input'
);
const listDescription = document.querySelector(
  '#popUpAddList div.modal-content form textarea'
);

function addListValidation(e) {
  if (listTitle.value.length != 0) {
    e.preventDefault();
    addList();
    addListDiv.classList.remove('active');
    modalAdd.style.display = 'none';
    listTitle.value = '';
    listDescription.value = '';
  }
}

document
  .querySelector('div.popUpAdd div.modal-content form button')
  .addEventListener('click', addListValidation);
