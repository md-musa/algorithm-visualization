import {swap, grapMaker} from "./index.js";

let i = 0;
let j = i + 1;
let oneGone = true;
export function bubbleSort(mainEl, grapElements, length, setTime) {
  // if (j > 1) mainEl.children[j - 2].classList.remove("current");
  // mainEl.children[i].classList.add("target");
  // mainEl.children[j].classList.add("current");
  if (i === grapElements.length) {
    console.log("spoted");
    return;
  }
  if (j == grapElements.length - i) {
    oneGone = false;
  }
  if (grapElements[j] > grapElements[j + 1]) {
    swap(j, j + 1, grapElements);
    grapMaker(mainEl, grapElements);
  }
  j++;
  if (oneGone) setTimeout(() => bubbleSort(mainEl, grapElements, length), 10);
  else {
    oneGone = true;
    i++;
    j = 0;
    bubbleSort(mainEl, grapElements, length);
  }
}
