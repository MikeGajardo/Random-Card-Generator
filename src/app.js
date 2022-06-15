/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomNumber() {
  let arrNum = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let randomIndex = Math.floor(Math.random() * arrNum.length);
  return arrNum[randomIndex];
}

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

window.onload = () => {
  //write your code here
  document.querySelector("#random").innerHTML = randomNumber();
  document.querySelector(".top").innerHTML = suitValue;
  document.querySelector(".bottom").innerHTML = suitValue;
};
