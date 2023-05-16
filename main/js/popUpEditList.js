let choosingIsActive = false;
const modalEdit = document.getElementById('popUpEditList');
const listTitleEdit = document.querySelector(
  '#popUpEditList div.modal-content form input'
);
const listDescriptionEdit = document.querySelector(
  '#popUpEditList div.modal-content form textarea'
);

function popUpEdit() {
  const editListDivs = document.querySelectorAll(
    'section.lists div.list div.editList i'
  );
  const closePopUpEdit = document.querySelector('.popUpEdit .close');

  function popupEdit() {
    modalEdit.style.display = 'block';
    listID = this.parentElement.parentElement.dataset.numberOfList;

    listTitleEdit.value = document.querySelector(
      `div.list[data-number-of-list='${listID}'] h1`
    ).textContent;
    listDescriptionEdit.value = document.querySelector(
      `div.list[data-number-of-list='${listID}'] p`
    ).textContent;
  }

  editListDivs.forEach((editListDiv) => {
    editListDiv.addEventListener('click', popupEdit);
  });

  closePopUpEdit.addEventListener('click', function () {
    modalEdit.style.display = 'none';
  });

  window.addEventListener('mousedown', function (event) {
    if (event.target == modalEdit) {
      modalEdit.style.display = 'none';
    }
  });

  function editListValidation(e) {
    if (listTitleEdit.value.length != 0) {
      e.preventDefault();
      editList();
    }
  }

  document
    .querySelector('div.popUpEdit div.modal-content form button')
    .addEventListener('click', editListValidation);

  const editListBtnNav = document.querySelectorAll(
    'nav.menuDesktop li:nth-child(4) i, nav.menuMobile ul li:nth-child(4) i'
  );
  const divChooseList = document.querySelector('div.chooseList');
  const listsToChoose = document.querySelectorAll('section.lists div.list');

  const popUpEditFunctionality = function () {
    listID = this.dataset.numberOfList;
    divChooseList.style.display = 'none';

    modalEdit.style.display = 'block';
    listTitleEdit.value = document.querySelector(
      `div.list[data-number-of-list='${listID}'] h1`
    ).textContent;
    listDescriptionEdit.value = document.querySelector(
      `div.list[data-number-of-list='${listID}'] p`
    ).textContent;

    document
      .querySelector('div.popUpEdit div.modal-content form button')
      .addEventListener('click', editListValidation);

    choosingIsActive = false;

    this.removeEventListener('click', popUpEditFunctionality);
  };

  const exitChoosingElements = document.querySelectorAll(
    'section.lists, nav.menuMobile ul li:nth-of-type(1) a, section.lists, nav.menuMobile ul li:nth-of-type(2) a,nav.menuMobile ul li:nth-of-type(3) a, nav.menuMobile ul li:nth-of-type(5), nav.menuDesktop ul li:nth-of-type(1), nav.menuDesktop ul li:nth-of-type(2) a,nav.menuDesktop ul li:nth-of-type(3) a, nav.menuDesktop ul li:nth-of-type(5)'
  );

  const listsSection = document.querySelector('main section.lists');

  function chooseTheListToEdit() {
    choosingIsActive = true;
    divChooseList.style.display = 'flex';

    listsToChoose.forEach((listToChoose) => {
      listToChoose.addEventListener('click', popUpEditFunctionality);

      exitChoosingElements.forEach((exitElement) => {
        exitElement.addEventListener('click', function exitChoosing() {
          divChooseList.style.display = 'none';
          listToChoose.removeEventListener('click', popUpEditFunctionality);
          choosingIsActive = false;
        });
      });
    });
  }

  if (listsSection.contains(document.querySelector('div.list'))) {
    document.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.altKey && event.code === 'KeyE') {
        calendarSection.style.display = 'none';
        sectionEventMenu.style.display = 'none';
        sectionLists.style.display = 'flex';
        chooseTheListToEdit();
      }
    });

    editListBtnNav.forEach((editListBtn) => {
      editListBtn.addEventListener('click', chooseTheListToEdit);
    });
  }
}
