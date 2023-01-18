function profileInfoHeader(profileData) {
    const accountMail = document.querySelector('p.name_account');
    const divRightHeader = document.querySelector('header div.rightHeader');
    const accountMailText = accountMail.textContent;
    const changedText = accountMailText.substring(0, accountMailText.indexOf('@'));

    if (profileData.info.nick == '') {
        if (profileData.img == '') {
            accountMail.innerHTML = `<i class="fa-regular fa-user"></i> ${changedText}`;
        } else {
            const img = document.createElement('img');
            img.classList.add('profileImage');
            img.src = profileData.img;
            divRightHeader.insertBefore(img, divRightHeader.children[0]);
            accountMail.innerHTML = changedText;
        }

    } else {
        if (profileData.img == '') {
            accountMail.innerHTML = `<i class="fa-regular fa-user"></i> ${profileData.info.nick}`;
        } else {
            const img = document.createElement('img');
            img.classList.add('profileImage');
            img.src = profileData.img;
            divRightHeader.insertBefore(img, divRightHeader.children[0]);
            accountMail.innerHTML = profileData.info.nick;
        }
    }
}