const profileSection = document.querySelector('main section.profile');
const sectionMenu = document.querySelector('main section.menu');
const navProfileBtns = document.querySelectorAll(
  'nav.menuMobile ul li:nth-of-type(5) a, nav.menuDesktop ul li:nth-of-type(5) a'
);
const navBtnsProf = document.querySelectorAll(
  'nav.menuDesktop ul li:nth-of-type(1) a ,nav.menuDesktop ul li:nth-of-type(2) a, nav.menuDesktop ul li:nth-of-type(3) a,nav.menuDesktop ul li:nth-of-type(4) a, nav.menuMobile ul li:nth-of-type(1) a, nav.menuMobile ul li:nth-of-type(2) a, nav.menuMobile ul li:nth-of-type(3) a, nav.menuMobile ul li:nth-of-type(4) a'
);

navProfileBtns.forEach((navProfileBtn) => {
  navProfileBtn.addEventListener('click', () => {
    calendarSection.style.display = 'none';
    profileSection.style.display = 'flex';
    sectionLists.style.display = 'none';
    sectionMenu.style.display = 'none';
    changeThemeYourProfile();
  });
});

navBtnsProf.forEach((navBtn) => {
  navBtn.addEventListener('click', () => {
    profileSection.style.display = 'none';
  });
});

const changePasswordCPassword = document.querySelector(
  'main section.profile div.changePassword form input#currentPassword'
);
const changePasswordNewPassword = document.querySelector(
  'main section.profile div.changePassword form input#newPassword'
);
const changePasswordRPassword = document.querySelector(
  'main section.profile div.changePassword form input#repeatNewPassword'
);
const changePasswordBtn = document.querySelector(
  'main section.profile div.changePassword form button'
);

const p = document.querySelector('div.informationText p');

const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,100}$/;

const changePasswordMessage = document.querySelector(
  'main section.profile div.changePassword p'
);

let passwordsOK = false;

const validatePasswordInputs = () => {
  if (changePasswordNewPassword.value.match(passwordValidation)) {
    passwordsOK = true;
    changePasswordMessage.innerHTML = '';
    if (changePasswordNewPassword.value === changePasswordRPassword.value) {
      passwordsOK = true;
      changePasswordMessage.innerHTML = '';
    } else {
      passwordsOK = false;
      changePasswordMessage.innerHTML = 'Passwords are not the same!';
    }
  } else {
    passwordsOK = false;
    changePasswordMessage.innerHTML =
      'Your password is not safe. Must be least 10 characters, must contain: 1 uppercase, 1 lowercase, 1 numeric, and 1 special characters.';
  }

  return passwordsOK;
};

function validationPasswordChange(e) {
  if (
    changePasswordCPassword.value.length != 0 &&
    changePasswordNewPassword.value.length != 0 &&
    changePasswordRPassword.value.length != 0
  ) {
    e.preventDefault();
    window.addEventListener('input', validatePasswordInputs);
    passwordsOK = validatePasswordInputs();

    if (passwordsOK) {
      changePassword();
      changePasswordCPassword.value = '';
      changePasswordNewPassword.value = '';
      changePasswordRPassword.value = '';
    }
  }
}

changePasswordBtn.addEventListener('click', validationPasswordChange);

const changeEmailEmail = document.querySelector(
  'main section.profile div.changeEmail form input#email'
);
const changeEmailPassword = document.querySelector(
  'main section.profile div.changeEmail form input#password'
);
const changeEmailBtn = document.querySelector(
  'main section.profile div.changeEmail form button'
);

const emailValidation =
  /^(?=.{7,100})[\w\.\-]{3,}[@]{1}[\w\.\-]{1,}[.]{1}[\w]{1,}$/gm;

const changeEmailMessage = document.querySelector(
  'main section.profile div.changeEmail p'
);

let emailOK = false;

const validateEmailInput = () => {
  if (changeEmailEmail.value.match(emailValidation)) {
    emailOK = true;
    changeEmailMessage.innerHTML = '';
  } else {
    emailOK = false;
    changeEmailMessage.innerHTML = 'Provided e-mail is invalid!';
  }
  return emailOK;
};

function validationEmailChange(e) {
  if (
    changeEmailEmail.value.length != 0 &&
    changeEmailPassword.value.length != 0
  ) {
    e.preventDefault();
    window.addEventListener('input', validateEmailInput);
    emailOK = validateEmailInput();

    if (emailOK) {
      changeEmail();
      changeEmailEmail.value = '';
      changeEmailPassword.value = '';
    }
  }
}

changeEmailBtn.addEventListener('click', validationEmailChange);

const deleteAccountPassword = document.querySelector(
  'main section.profile div.deleteAccount form input'
);
const deleteAccountBtn = document.querySelector(
  'main section.profile div.deleteAccount form button'
);

deleteAccountBtn.addEventListener('click', (e) => {
  if (deleteAccountPassword.value.length != 0) {
    e.preventDefault();
    deleteAccount();
    deleteAccountPassword.value = '';
  }
});

const nick = document.querySelector(
  'main section.profile div.additionalInformations form input'
);
const addInformationsBtn = document.querySelector(
  'main section.profile div.additionalInformations form button'
);

addInformationsBtn.addEventListener('click', (e) => {
  if (nick.value.length != 0) {
    e.preventDefault();
    updateInformations();
    nick.value = '';
  }
});

const chooseProfileOptionBtns = document.querySelectorAll(
  'main section.profile div.profileButtons button:nth-of-type(1),main section.profile div.profileButtons button:nth-of-type(2),main section.profile div.profileButtons button:nth-of-type(3),main section.profile div.profileButtons button:nth-of-type(4), main section.profile div.profileButtons button:nth-of-type(5)'
);
const changePasswordForm = document.querySelector(
  'main section.profile div.changePassword'
);
const changeEmailForm = document.querySelector(
  'main section.profile div.changeEmail'
);
const deleteAccountForm = document.querySelector(
  'main section.profile div.deleteAccount'
);
const additionalInformationsForm = document.querySelector(
  'main section.profile div.additionalInformations'
);
const chooseBackground = document.querySelector(
  'main section.profile div.background'
);

const profileDivForms = [
  changePasswordForm,
  changeEmailForm,
  deleteAccountForm,
  additionalInformationsForm,
  chooseBackground,
];

chooseProfileOptionBtns.forEach((chooseProfileOptionBtn, iterator) => {
  chooseProfileOptionBtn.addEventListener('click', () => {
    profileDivForms.forEach((profileDivForm) => {
      profileDivForm.style.display = 'none';
    });

    profileDivForms[iterator].style.display = 'flex';

    window.scrollTo({
      top: profileDivForms[iterator].offsetTop,
      behavior: 'smooth',
    });
  });
});
