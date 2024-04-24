/**
 * The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.
 */

function min(x, y) {
  return x < y ? x : y;
}

console.log(min(3, 5));
console.log(min(5, 3));
console.log(min(4, 4));
console.log(min(-2, 6));
console.log(min(0, -2));

/**
 * Text solution
 */

function min_(a, b) {
  if (a < b) return a;
  else return b;
}
