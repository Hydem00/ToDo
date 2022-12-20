const accountMail = document.querySelector('p.name_account');
const accountMailText = accountMail.textContent;
const changedText = accountMailText.substring(0, accountMailText.indexOf('@'));
accountMail.innerHTML = `<i class="fa-regular fa-user"></i> ${changedText}`;