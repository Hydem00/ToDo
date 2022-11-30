const inputSubmit = document.querySelector('form input#submit');
const email = document.querySelector('#email');
const emailValidation = /^(?=.{7,100})[\w]{3,}[@]{1}[\w\.]{1,}[.]{1}[\w]{1,}$/gm;

let flag = false;

const validateInputs = () => {
    if (email.value.match(emailValidation)) {
        flag = true;
        document.querySelector('input#email').classList.remove("warning");
        document.querySelector('label[for="email"]').innerHTML = "";
    } else {
        flag = false;
        document.querySelector('label[for="email"]').innerHTML = "Provided e-mail is invalid!";
        document.querySelector('input#email').classList.add("warning");
    }
    return flag;
}

function validation(e) {

    if (!(email.value == "")) {
        window.addEventListener('input', validateInputs);
        flag = validateInputs();

        if (!flag)
            e.preventDefault();
    }

}
inputSubmit.addEventListener('click', validation);