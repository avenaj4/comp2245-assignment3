document.addEventListener("DOMContentLoaded", function() {

  const boardSquares = document.querySelectorAll("#board div");

  boardSquares.forEach(function(square) {
    square.classList.add("square");
  });

});

document.addEventListener("DOMContentLoaded", function() {
  const boardSquares = document.querySelectorAll("#board div");
  let currentPlayer = "X"; 
  let gameState = Array(9).fill(null); 

  boardSquares.forEach(function(square, index) {
    square.classList.add("square");

    square.addEventListener("click", function() {
      if (!gameState[index]) {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        gameState[index] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
});
