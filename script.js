let max_score = document.getElementById('max-score').textContent;
max_score = Number(max_score);
let num_of_turns = 5;
let turnPlayer = Math.floor(Math.random() * 2) + 1;
const p1 = document.getElementById('player1');
const p2 = document.getElementById('player2');
let roll_times = document.getElementById('how-many-turns-are-left');
let total_p1 = document.getElementById('total-score-p1');
let total_p2 = document.getElementById('total-score-p2');
let socre_p1 = document.getElementById('socre-p1');
let socre_p2 = document.getElementById('socre-p2');
const hold_button = document.getElementById('hold');
total_p1.textContent = Number(0);
total_p2.textContent = Number(0);
socre_p1.textContent = Number(0);
socre_p2.textContent = Number(0);

function random_tile() {
  const all_dices = [1, 2, 3, 4, 5, 6];
  return all_dices[Math.floor(Math.random() * all_dices.length)];
}

const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
roll_times.innerText = `ROLE DICE(${num_of_turns})`;
if (turnPlayer === 1) {
  p1.style.background = 'blue';
  p2.style.background = 'cornflowerblue';
}
if (turnPlayer === 2) {
  p2.style.background = 'blue';
  p1.style.background = 'cornflowerblue';
}
function play() {
  roll_times.addEventListener('click', () => {
    if (turnPlayer === 1) {
      p1.style.background = 'blue';
      p2.style.background = 'cornflowerblue';
    }
    if (turnPlayer === 2) {
      p2.style.background = 'blue';
      p1.style.background = 'cornflowerblue';
    }
    if (turnPlayer === 1 && num_of_turns > 0) {
      if (total_p1 >= max_score) {
        p1.style.background = 'green';
        total_p1.textContent = 'WIN!';
      }
      const new_dice1 = random_tile();
      const new_dice2 = random_tile();
      dice1.className = `dice${new_dice1}`;
      dice2.className = `dice${new_dice2}`;
      if (new_dice1 !== new_dice2) {
        socre_p1.textContent =
          new_dice1 + new_dice2 + Number(socre_p1.textContent);
        num_of_turns -= 1;
        roll_times.innerText = `ROLE DICE(${num_of_turns})`;
      } else {
        socre_p1.textContent = 0;
        num_of_turns = 0;
        roll_times.innerText = `ROLE DICE(${num_of_turns})`;
      }
      if (num_of_turns === 0) {
        total_p1.textContent = socre_p1.textContent;
        socre_p1.textContent = 0;
      }
    }
    if (turnPlayer === 2 && num_of_turns > 0) {
      if (total_p2 >= max_score) {
        p2.style.background = 'green';
        total_p2.textContent = 'WIN!';
      }
      const new_dice1 = random_tile();
      const new_dice2 = random_tile();
      dice1.className = `dice${new_dice1}`;
      dice2.className = `dice${new_dice2}`;
      if (new_dice1 !== new_dice2) {
        socre_p2.textContent =
          new_dice1 + new_dice2 + Number(socre_p2.textContent);
        num_of_turns -= 1;
        roll_times.innerText = `ROLE DICE(${num_of_turns})`;
      } else {
        socre_p1.textContent = 0;
        num_of_turns = 0;
        roll_times.innerText = `ROLE DICE(${num_of_turns})`;
      }
      if (num_of_turns === 0) {
        total_p2.textContent = socre_p2.textContent;
        socre_p2.textContent = 0;
      }
    }
  });
}
hold_button.addEventListener('click', () => {
  if (turnPlayer === 1) {
    turnPlayer = 2;
    num_of_turns = 5;
  }
  if (turnPlayer === 2) {
    turnPlayer = 1;
    num_of_turns = 5;
  }
  play();
});
play();
const newGame = document.getElementById('new-game-button');
newGame.addEventListener('click', () => {
  window.location.reload();
});
