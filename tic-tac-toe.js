document.addEventListener("DOMContentLoaded", function() {
  const squares = document.querySelectorAll("#board div");
  const statusDiv = document.getElementById("status");
  let currentPlayer = "X";
  let gameState = Array(9).fill(null);
  let gameOver = false;

  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  function checkWinner() {
    for (const [a,b,c] of wins) {
      const v = gameState[a];
      if (v && v === gameState[b] && v === gameState[c]) return v;
    }
    return null;
  }

  squares.forEach(function(square, index) {
    square.classList.add("square");

    square.addEventListener("mouseenter", function() {
      if (!gameOver) square.classList.add("hover");
    });

    square.addEventListener("mouseleave", function() {
      square.classList.remove("hover");
    });

    square.addEventListener("click", function() {
      if (gameOver || gameState[index]) return;

      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);
      gameState[index] = currentPlayer;

      const winner = checkWinner();
      if (winner) {
        statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
        statusDiv.classList.add("you-won");
        gameOver = true;
        return;
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
  });
});

