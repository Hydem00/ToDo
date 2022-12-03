const inputPassword = document.querySelector('form input#password');
const inputCPassword = document.querySelector('form input#cpassword');
const inputSubmit = document.querySelector('form input#submit');

const p = document.querySelector('div.informationText p');

const password = document.querySelector('#password');
const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,100}$/;

const cpassword = document.querySelector('#cpassword');
const cpasswordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,100}$/;

let flag = false;

const validateInputs = () => {
    if (password.value.match(passwordValidation)) {
        flag = true;
        document.querySelector('input#password').classList.remove("warning");
        document.querySelector('label[for="password"]').innerHTML = "";
        if (password.value === cpassword.value) {
            flag = true;
            document.querySelector('input#cpassword').classList.remove("warning");
            document.querySelector('label[for="cpassword"]').innerHTML = "";
        } else {
            flag = false;
            document.querySelector('label[for="cpassword"]').innerHTML = "Passwords are not the same!"
            document.querySelector('input#cpassword').classList.add("warning");
        }
    } else {
        flag = false;
        document.querySelector('label[for="password"]').innerHTML = "Your password is not safe. Must be least 10 characters, must contain: 1 uppercase, 1 lowercase, 1 numeric, and 1 special characters."
        document.querySelector('input#password').classList.add("warning");
    }

    return flag;
}

function validation(e) {

    if (!(password.value == "") && !(cpassword.value == "")) {
        window.addEventListener('input', validateInputs);
        flag = validateInputs();
        console.log(flag);

        if (!flag)
            e.preventDefault();
    }

}

inputSubmit.addEventListener('click', validation);