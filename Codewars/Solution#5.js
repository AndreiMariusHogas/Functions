//Return number of vowels in a string
function getCount(str) {
  let vowelsCount = 0;
  function checkVowel(letter) {
    if (letter.match(/[aeiou]/)) return 1;
    else return 0;
  }
  const strArr = str.split("");
  strArr.forEach(element => (vowelsCount += checkVowel(element)));
  return vowelsCount;
}

getCount("abracadabra");
