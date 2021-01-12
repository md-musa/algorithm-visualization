import {swap, grapMaker} from "./index.js";

let i = 0;
let j = i + 1;
let oneGone = true;
export function selectionSort(mainEl, grapElements, length, setTimer) {
  if (j > 1) mainEl.children[j - 2].classList.remove("current");
  mainEl.children[i].classList.add("target");
  mainEl.children[j - 1].classList.add("current");

  if (i === grapElements.length) {
    console.log("spoted");
    return;
  }
  if (j == grapElements.length) {
    oneGone = false;
  }
  if (grapElements[i] > grapElements[j]) {
    swap(i, j, grapElements);
    grapMaker(mainEl, grapElements);
  }

  j++;
  if (oneGone)
    setTimeout(() => selectionSort(mainEl, grapElements, length), 10);
  else {
    oneGone = true;
    i++;
    j = i + 1;
    selectionSort(mainEl, grapElements, length);
  }
}
