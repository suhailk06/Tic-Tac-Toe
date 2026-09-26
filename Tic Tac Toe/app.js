let cells = document.querySelectorAll(".cell");
let player1 = true;
let gameOver = false;
let player1score=0;
let player2score=0;

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
    } else {
      cell.innerText = "O";
      player1 = true;
    }

    const winner = checkWinner();
    if (winner) {
      gameOver = true;
      console.log("Winner:", winner);
      if(winner==="X"){
        player1score++;
      }
      else{
        player2score++;
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
        cells[pattern[0]].style.backgroundColor="#000000";
        return pos1Val;
      }
    }
  }
  return null;
};

function resetbtn() {
  cells.forEach((cell) => {
    cell.innerText = "";
  });
  player1 = true;
  gameOver = false;
}