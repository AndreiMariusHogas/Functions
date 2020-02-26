//Write a function that takes a string as input and returns all words that are 5 or bigger in length reversed
//Write a function that reverses a string
//Write a function that returns the length of each substring
//Split the main string into substrings
//map lengths
//reverse words at given indexes
//join resulting arr
//return resulting string

function spinWords(str) {
  function reverseString(string) {
    return string
      .split("")
      .reverse()
      .join("");
  }
  function checkLength(arr, string) {
    if (string.length >= 5) return arr.indexOf(string);
    else return -1;
  }
  const strArr = str.split(" ");
  const indexArr = strArr.map(x => checkLength(strArr, x));
  const indexToChangeArr = indexArr.filter(x => x !== -1);
  if (indexToChangeArr.length === 0) {
    return str;
  } else {
    let resultArr = [...strArr];
    indexToChangeArr.forEach(x => {
      resultArr[x] = reverseString(resultArr[x]);
    });
    return resultArr.join(" ");
  }
}

spinWords("Welcome");
spinWords("This is a test");
spinWords("This is another test");
