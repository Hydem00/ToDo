const inputSubmit = document.querySelector('form input#submit');

const p = document.querySelector('div.informationText p');

const email = document.querySelector('#email');
const emailValidation = /^(?=.{7,100})[\w]{3,}[@]{1}[\w]{1,}[.]{1}[\w]{1,}$/gm;

const password = document.querySelector('#password');
const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,100}$/;

const cpassword = document.querySelector('#cpassword');
const cpasswordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,100}$/;

const flag = false;

function validation(e) {
    if (!(email.value == "") && !(password.value == "") && !(cpassword.value == "")) {
        if (email.value.match(emailValidation)) {
            if (password.value.match(passwordValidation)) {
                if (password.value === cpassword.value) {
                    p.innerHTML = "";
                    flag = true;
                } else {
                    p.innerHTML = "Passwords are not the same."
                }
            } else {
                p.innerHTML = "Your password is not safe. <br>Must be least 10 characters, must contain: 1 uppercase, 1 lowercase, 1 numeric, and 1 special characters."
            }
        } else {
            p.innerHTML = "Provided e-mail is invalid.";
        }

    } else
        p.innerHTML = "Some fields are empty!";

    if (flag == false) {
        e.preventDefault();
    }
}

inputSubmit.addEventListener('click', validation);