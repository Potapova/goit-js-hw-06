const btnChange = document.querySelector("button");

btnChange.addEventListener('click', onBtnClick);

function onBtnClick(){
  document.body.style.backgroundColor = getRandomHexColor();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

}