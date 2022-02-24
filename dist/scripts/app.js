//List for minute lines [Tens[], Ones[]]
let minutesLines = [];
//List for second lines [Tens[], Ones[]]
let secondsLines = [];
//The pattern of the numbers which lines must be shown
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
//Exec once to store lines in lists
(function () {
  minutesLines.push(document.querySelectorAll("#minutes-10 div[data-edge]"));
  minutesLines.push(document.querySelectorAll("#minutes-1 div[data-edge]"));
  secondsLines.push(document.querySelectorAll("#seconds-10 div[data-edge]"));
  secondsLines.push(document.querySelectorAll("#seconds-1 div[data-edge]"));
})();
//Reset number lines that must be turned off
function reset(list) {
  list.forEach((x) => x.classList.remove("show-number"));
}

//Timer function (this is obvious :D)
function timer(time) {
  //If the time is zero it shows 00:00
  if (time < 0) return;

  //Calc minutes
  let minutes = time / 60;
  //Calc seconds
  let seconds = time % 60;
  //Calc tens of the minutes
  let minutesTens = Math.trunc(minutes / 10);
  //Calc ones of the minutes
  let minutesOnes = Math.trunc(minutes % 10);
  //Calc tens of the seconds
  let secondsTens = Math.trunc(seconds / 10);
  //Calc ones of the seconds
  let secondsOnes = Math.trunc(seconds % 10);

  //Reset all numbers
  reset(minutesLines[0]);
  reset(minutesLines[1]);
  reset(secondsLines[0]);
  reset(secondsLines[1]);

  //Show number (tens - minutes)
  numberPatterns[minutesTens].forEach((x) =>
  minutesLines[0][x - 1].classList.add("show-number")
  );

  //Show number (ones - minutes)
  numberPatterns[minutesOnes].forEach((x) =>
    minutesLines[1][x - 1].classList.add("show-number")
  );

  //Show number (tens - seconds)
  numberPatterns[secondsTens].forEach((x) =>
  secondsLines[0][x - 1].classList.add("show-number")
  );

  //Show number (ones - seconds)
  numberPatterns[secondsOnes].forEach((x) =>
    secondsLines[1][x - 1].classList.add("show-number")
  );

  //Call this function after 1s
  setTimeout(function () {
    timer(time - 1);
  }, 1000);
}

//Calling timer with 680s - It must be shown 11:20
timer(680);
