const profileSection = document.querySelector('main section.profile');
const sectionMenu = document.querySelector('main section.menu');
const navProfileBtns = document.querySelectorAll('nav.menuMobile ul li:nth-of-type(4) a, nav.menuDesktop ul li:nth-of-type(4) a');
const navBtnsProf = document.querySelectorAll('nav.menuDesktop ul li:nth-of-type(1) a, nav.menuDesktop ul li:nth-of-type(2) a,nav.menuDesktop ul li:nth-of-type(3) a, nav.menuMobile ul li:nth-of-type(1) a, nav.menuMobile ul li:nth-of-type(2) a, nav.menuMobile ul li:nth-of-type(3) a');

navProfileBtns.forEach(navProfileBtn => {
    navProfileBtn.addEventListener('click', () => {
        profileSection.style.display = "flex";
        sectionLists.style.display = "none";
        sectionMenu.style.display = "none";
    })
})

navBtnsProf.forEach(navBtn => {
    navBtn.addEventListener('click', () => {
        profileSection.style.display = "none";
    })
})

const changePasswordBtn = document.querySelector('main section.profile div.changePassword form button');

changePasswordBtn.addEventListener('click', (e) => {
    e.preventDefault();
    changePassword();
})

const changeEmailBtn = document.querySelector('main section.profile div.changeEmail form button');

changeEmailBtn.addEventListener('click', (e) => {
    e.preventDefault();
    changeEmail();
})

const deleteAccountBtn = document.querySelector('main section.profile div.deleteAccount form button');

deleteAccountBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteAccount();
})

const addInformationsBtn = document.querySelector('main section.profile div.additionalInformations form button');

addInformationsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    updateInformations();
})

const chooseProfileOptionBtns = document.querySelectorAll('main section.profile div.profileButtons button');
const changePasswordForm = document.querySelector('main section.profile div.changePassword');
const changeEmailForm = document.querySelector('main section.profile div.changeEmail');
const deleteAccountForm = document.querySelector('main section.profile div.deleteAccount');
const additionalInformationsForm = document.querySelector('main section.profile div.additionalInformations');

const profileDivForms = [changePasswordForm, changeEmailForm, deleteAccountForm, additionalInformationsForm];

chooseProfileOptionBtns.forEach((chooseProfileOptionBtn, iterator) => {
    chooseProfileOptionBtn.addEventListener('click', () => {
        profileDivForms.forEach(profileDivForm => {
            profileDivForm.style.display = "none";
        })

        profileDivForms[iterator].style.display = "flex";

        window.scrollTo({
            top: profileDivForms[iterator].offsetTop,
            behavior: 'smooth'
        });
    })
})