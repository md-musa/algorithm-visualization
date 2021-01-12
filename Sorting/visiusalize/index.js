import {selectionSort} from "./selection-sort.js";
import {bubbleSort} from "./bubble-sort.js";
import {insertionSort} from "./insertion-sort.js";
const mainEl = document.querySelector("#main-section");
const selectionBtnEl = document.querySelector("#selection");
const bubleBtnEl = document.querySelector("#buble");
const insertionBtnEl = document.querySelector("#insertion");

function randomValue(length) {
  const grapElements = new Uint8Array(length);
  crypto.getRandomValues(grapElements);
  return grapElements;
}
// Event Listenter----
selectionBtnEl.addEventListener("click", () =>
  selectionSort(mainEl, randomValue(50))
);
bubleBtnEl.addEventListener("click", () => {
  bubbleSort(mainEl, randomValue(50));
});
insertionBtnEl.addEventListener("click", () => {
  insertionSort(mainEl, randomValue(50));
});
// Event Listenter----

export const grapMaker = (element, grapElements) => {
  element.innerHTML = "";
  for (let j = 0; j < grapElements.length; j++) {
    const a = `<div class="data" style="height:${
      grapElements[j] * 2
    }px"></div>`;
    element.insertAdjacentHTML("beforeend", a);
  }
};
grapMaker(mainEl, randomValue(50));

export function swap(a, b, arr) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}
function setTimer() {
  const timer = prompt("SetInterval in milisecound");
  return timer;
}
