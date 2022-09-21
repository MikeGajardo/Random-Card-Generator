/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Function containing our array of numbers that produces a random outcome
function randomNumber() {
  let arrNum = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let randomIndex = Math.floor(Math.random() * arrNum.length);
  return arrNum[randomIndex];
}

//Function containing our array of suits we use the dom to add the class to a random index
function randomSuit() {
  let arrSuit = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
  let randomSuit = Math.floor(Math.random() * arrSuit.length);

  if (randomSuit == 1 || randomSuit == 3) {
    document.querySelector(".card-container").classList.add("color-red");
  } else {
    document.querySelector(".card-container").classList.add("color-black");
  }
  return arrSuit[randomSuit];
}

let suitValue = randomSuit();

const refreshButton = document.querySelector(".refresh-button");

const refreshPage = () => {
  window.location.reload();
};

refreshButton.addEventListener("click", refreshPage);

window.onload = () => {
  //write your code here
  document.querySelector("#random").innerHTML = randomNumber();
  document.querySelector(".top").innerHTML = suitValue;
  document.querySelector(".bottom").innerHTML = suitValue;
};
