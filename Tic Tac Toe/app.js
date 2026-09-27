let cells = document.querySelectorAll(".cell");
let player1 = true;
let gameOver = false;
let player1score=0;
let player2score=0;
let pos1Val;
let pos2Val;
let pos3Val;
playerturn=document.querySelector("#playerturn");
playerturn.textContent="X turn";
playerturn.style.color="#00d1ff";
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const updatescore=()=>{
    document.getElementById("p1s").textContent=player1score;
    document.getElementById("p2s").textContent=player2score;


}
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // Ignore clicks if cell is filled or game is over
    if (cell.innerText !== "" || gameOver) return;

    if (player1) {
      cell.innerText = "X";
      player1 = false;
      playerturn.textContent="O turn";
      playerturn.style.color="#ff4d6d";
      cell.style.color="#ff4d6d";
    } else {
      cell.innerText = "O";
      player1 = true;
      playerturn.textContent="X turn";
      playerturn.style.color="#00d1ff";
      cell.style.color="#00d1ff";
    }

    const winner = checkWinner();
    if (winner) {
      gameOver = true;
      console.log("Winner:", winner);
      playerturn.textContent=winner+" is winner";
      playerturn.style.color="#00d1ff";
      if(winner==="X"){
        player1score++;
        playerturn.style.color="#00d1ff";
      }
      else{
        player2score++;
        playerturn.style.color="#ff2d6d";
      }
      updatescore();

    }
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = cells[pattern[0]].innerText;
    let pos2Val = cells[pattern[1]].innerText;
    let pos3Val = cells[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        cells[pattern[0]].classList.add("crossed");
        cells[pattern[1]].classList.add("crossed");
        cells[pattern[2]].classList.add("crossed");
        return pos1Val;
      }
    }
  }
  return null;
};

function resetbtn() {
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.classList.remove("crossed"); 
  });
  player1 = true;
  gameOver = false;
  playerturn.textContent = "X turn";
  updatescore();
}
function newgamebtn() {
  player1score=0;
  player2score=0;
  resetbtn();
}