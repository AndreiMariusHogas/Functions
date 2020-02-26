//Find out of the number is a perfect square
//User Math.sqrt

var isSquare = function(n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return true;
  } else {
    return false;
  }
};

isSquare(-1);
isSquare(0);
isSquare(3);
isSquare(4);
