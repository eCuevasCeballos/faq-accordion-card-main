const item = document.querySelectorAll(".item");
const showText = document.querySelectorAll(".text");
const openedSubHeader = document.querySelectorAll(".sub-header");
const iconDown = document.querySelectorAll(".down");
const iconUp = document.querySelectorAll(".up");

console.log(item.length);

function accordion(place) {
  if (showText[place].classList.contains("closed")) {
    showText[place].classList.remove("closed");
    openedSubHeader[place].classList.add("open");
    iconDown[place].classList.add("up");
    iconUp[place].classList.remove("up");
  } else {
    showText[place].classList.add("closed");
    openedSubHeader[place].classList.remove("open");
    iconDown[place].classList.remove("up");
    iconUp[place].classList.add("up");
  }
}

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    accordion(i);
  });
}
