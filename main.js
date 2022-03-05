"use strict";

const adviceIdEl = document.querySelector(".advice-id");
const adviceEl = document.querySelector(".advice");
const btnReroll = document.querySelector(".circle");

async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    const { id } = data.slip;
    const { advice } = data.slip;

    adviceIdEl.innerHTML = `ADVICE #${id}`;
    adviceEl.innerHTML = `“${advice}”`;
  } catch (error) {
    alert(`${error.message}, please try again.`);
  }
}
getAdvice();

btnReroll.addEventListener("click", getAdvice);
