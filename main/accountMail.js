function profileInfoHeader(profileData) {
    const accountMail = document.querySelector('p.name_account');
    const divRightHeader = document.querySelector('header div.rightHeader');
    const accountMailText = profileData.email;
    const changedText = accountMailText.substring(0, accountMailText.indexOf('@'));

    if (divRightHeader.contains(document.querySelector('img.profileImage')))
        document.querySelector('img.profileImage').remove();

    const img = document.createElement('img');
    img.classList.add('profileImage');
    img.src = profileData.img;
    divRightHeader.insertBefore(img, divRightHeader.children[0]);

    console.log(profileData.info.nick);
    if (profileData.info.nick === undefined) {
        accountMail.textContent = changedText;
    } else {
        accountMail.innerHTML = profileData.info.nick;
    }
}