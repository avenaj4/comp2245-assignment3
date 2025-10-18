document.addEventListener("DOMContentLoaded", function() {

  const boardSquares = document.querySelectorAll("#board div");

  boardSquares.forEach(function(square) {
    square.classList.add("square");
  });

});

