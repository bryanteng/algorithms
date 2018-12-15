// 7 kyu kata
// You might know some pretty large perfect squares. But what about the NEXT one?
//
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.
//
function findNextSquare(sq) {
  return Math.sqrt(sq) === parseInt(Math.sqrt(sq)) ? (Math.sqrt(sq)+1)**2 : -1;
}
