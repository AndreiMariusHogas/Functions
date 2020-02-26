//Write a function that takes a positive integer as input and returns its digits in descending order
//number.toString.split().sort(a,b) => a-b

function descendingOrder(n) {
  let sorted = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return Number(sorted);
}
descendingOrder(123456789);
