"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 17;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "YEAYYYSYSYS WUHUUUU HAHAHAHS THANK YOU SAYANG NANTI KITA PLAN TAUUU KELUAR JALAN JALAN PLEOLSPSLSPLSPSLSKSOS";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.0;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you really super duper sure?",
    "please please",
    "Don't do this to me :(",
    "HMMM JOMLAAA LETS GO OUTTT YOU LAZY BUM",
    "HAHA YOU CANT PRESS ME",
    "why are you still pressing?",
    "takde kerja ke?",
    "cakap jela tak suka i :((((",
    "you memang nak tekan lagi ke?",
    "faham",
    "faham sangat",
    "k",
    "noted",
    "with thanks",
    "you cant escape me",
    "BWUEK NAK TANAK KENA TEKAN YES JUGAK",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
