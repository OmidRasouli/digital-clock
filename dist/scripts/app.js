let minutesLines = [];
let secondsLines = [];
let numberPatterns = [
  [1, 2, 3, 5, 6, 7], //0
  [6, 7], //1
  [2, 3, 4, 5, 6], //2
  [3, 4, 5, 6, 7], //3
  [1, 4, 6, 7], //4
  [1, 3, 4, 5, 7], //5
  [1, 2, 3, 4, 5, 7], //6
  [3, 6, 7], //7
  [1, 2, 3, 4, 5, 6, 7], //8
  [1, 3, 4, 5, 6, 7], //9
];

(function () {
  minutesLines.push(document.querySelectorAll("#minutes-10 div[data-edge]"));
  minutesLines.push(document.querySelectorAll("#minutes-1 div[data-edge]"));
  secondsLines.push(document.querySelectorAll("#seconds-10 div[data-edge]"));
  secondsLines.push(document.querySelectorAll("#seconds-1 div[data-edge]"));
})();
function reset(list) {
  list.forEach((x) => x.classList.remove("show-number"));
}
function Timer(time) {
  if (time < 0) return;

  let minutes = time / 60;
  let seconds = time % 60;
  let minutesTen = Math.trunc(minutes / 10);
  let minutesOne = Math.trunc(minutes % 10);
  let secondsTen = Math.trunc(seconds / 10);
  let secondsOne = Math.trunc(seconds % 10);

  reset(minutesLines[0]);
  reset(minutesLines[1]);
  reset(secondsLines[0]);
  reset(secondsLines[1]);
  numberPatterns[minutesTen].forEach((x) =>
    minutesLines[0][x - 1].classList.add("show-number")
  );
  numberPatterns[minutesOne].forEach((x) =>
    minutesLines[1][x - 1].classList.add("show-number")
  );
  numberPatterns[secondsTen].forEach((x) =>
    secondsLines[0][x - 1].classList.add("show-number")
  );
  numberPatterns[secondsOne].forEach((x) =>
    secondsLines[1][x - 1].classList.add("show-number")
  );

  setTimeout(function () {
    Timer(time - 1);
  }, 1000);
}
Timer(680);
