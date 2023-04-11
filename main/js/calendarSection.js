const calendarNavBtns = document.querySelectorAll(
  "nav.menuMobile ul li:nth-of-type(1) a, nav.menuDesktop ul li:nth-of-type(1) a"
);
const displayListsNavBtns = document.querySelectorAll(
  "nav.menuMobile ul li:nth-of-type(2) a, nav.menuDesktop ul li:nth-of-type(2) a"
);
const listsSection = document.querySelector("section.lists");
const calendarSection = document.querySelector("section.calendar");

function changeLayer() {
  listsSection.style.display = "none";
  calendarSection.style.display = "block";
}

calendarNavBtns.forEach((calendarNavBtn) => {
  calendarNavBtn.addEventListener("click", changeLayer);
});
