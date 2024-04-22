/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

 # # # # // Line 1
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # # 
# # # # // Line 8

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

const size = 8;

let oddLinePattern = "";
let evenLinePattern = "";

// Form odd/even line patterns
for (let i = 0; i < size; i++) {
  if (i % 2 === 0) {
    oddLinePattern += " ";
    evenLinePattern += "#";
  } else {
    oddLinePattern += "#";
    evenLinePattern += " ";
  }
}
let grid = "";

for (let i = 0; i < size; i++) {
  if (i % 2 === 0) {
    grid += oddLinePattern + "\n";
  } else {
    grid += evenLinePattern + "\n";
  }
}

console.log(grid);

/**
 * Textbook Solution
 */

let size_ = 8;

let board = "";

for (let y = 0; y < size_; y++) {
  for (let x = 0; x < size_; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
