const element = document.getElementsByClassName("offer");
element[0].classList.add("expanded");
document.getElementsByTagName("input")[0].checked = true;

function checkHandler(event, element) {
  event.stopPropagation();

  const allOffers = document.querySelectorAll(".offer");
  allOffers.forEach(function (offer) {
    offer.classList.remove("expanded");
  });

  element.classList.add("expanded");
  element.getElementsByTagName("input")[0].checked = true;
}
