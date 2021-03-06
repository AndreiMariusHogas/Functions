//Service Lane
//Write function to extract service lane between indices
//function return Math.min of the resulting Array
//Add the result to results array
//return the array
function serviceLane(n, cases) {
  let results = [];
  function extractLane(entry, exit, arr) {
    let temp = arr.slice(entry, exit);
    return Math.min(...temp);
  }
  cases.forEach(x => results.push(extractLane(x[0], x[1], n)));
  return results;
}

serviceLane(
  [2, 3, 1, 2, 3, 2, 3, 3],
  [
    [0, 3],
    [4, 6],
    [6, 7],
    [3, 5],
    [0, 7]
  ]
);

///Parameter Missing in Function Declaration
//Will review //Works but the pre defined function is missing the width array
//Solved!

//Lisa's Workbook
//Problem is special if problem number = page number
//k=max problems on a page
//page num = Math.ceil[arr[i]/k]

function workbook(n, k, arr) {
  let pages = [];
  let special = 0;
  arr.forEach(x => {
    let temp = Array.from(Array(x).keys()).map(y => ++y);
    let cut = 0;
    while (cut < temp.length) {
      pages.push(temp.slice(cut, cut + k));
      cut += k;
    }
  });
  pages.forEach(page => {
    if (page.includes(pages.indexOf(page) + 1)) {
      special++;
    }
  });
  return special;
}
workbook(5, 3, [4, 2, 6, 1, 10]);
//Works!

//Flatland Space Stations
//n=total citites
//c=array of space station
//Timeout Error on Case 15
function flatlandSpaceStations(n, c) {
  let allCities = Array.from(Array(n).keys());
  let allDist = [];
  let toCheck = allCities.filter(x => !c.includes(x));
  function distanceTo(num, arr) {
    let distance = arr.map(x => Math.abs(x - num));
    return Math.min(...distance);
  }
  if (toCheck.length === 0) {
    return 0;
  } else {
    allCities.forEach(x => allDist.push(distanceTo(x, c)));
    return Math.max(...allDist);
  }
}
flatlandSpaceStations(5, [0, 4]);
flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]);

//Rewrite
function flatlandSpaceStations(n, c) {
  let allDist = [];
  c.sort((a, b) => a - b);
  for (let i = 0; i < c.length - 1; i++) {
    const dist = Math.floor(Math.abs(c[i + 1] - c[i]) / 2);
    allDist.push(dist);
  }
  const before = Math.abs(c[0] - 0);
  const after = Math.abs(n - c[c.length - 1] - 1);

  return Math.max(...allDist, before, after);
}
flatlandSpaceStations(5, [0, 4]);
flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]);
//Passed the timeout Error
//Works!

//Fair Rations
//1 bread given + 1 bread to the person in front or back
//loop through array
//each time an element is uneven add 1 to it and the next elem
//add 1 to count
function fairRations(B) {
  let count = 0;
  let sumOfBreads = B.reduce((sum, x) => (x += sum));
  if (sumOfBreads % 2 !== 0) {
    return "NO";
  } else {
    for (let i = 0; i < B.length; i++) {
      let j = i + 1;
      if (B[i] % 2 !== 0) {
        count++;
        B[i]++;
        B[j]++;
      }
    }
    return count * 2;
  }
}

fairRations([2, 3, 4, 5, 6]);

//Cavity Map
//Input is a square matrix of strings
//if prev <x>next x = X
//Correction . You need to also look up and down in the array
//Copy array and split each element
//Start from 1 and loop through each element
//Check for borders
//if bigger than borders replace with X
//return joined element

function cavityMap(grid) {
  let gridArr = [...grid];
  let splitGrid = [];
  let result = [];
  gridArr.forEach(x => splitGrid.push(x.split("")));
  let n = splitGrid.length;
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (
        splitGrid[i][j] > splitGrid[i - 1][j] &&
        splitGrid[i][j] > splitGrid[i + 1][j] &&
        splitGrid[i][j] > splitGrid[i][j + 1] &&
        splitGrid[i][j] > splitGrid[i][j - 1]
      ) {
        splitGrid[i][j] = "X";
      }
    }
  }
  splitGrid.forEach(x => result.push(x.join("")));
  return result;
}

cavityMap(["1112", "1912", "1892", "1234"]);

//Manasa and Stones
//Find Max possible Number on last stone
//Max possible number = length-1 * smallest difference
//Extract Unique
//Sort the array ascending
//return array
function stones(n, a, b) {
  let stonesCount = n - 1;
  let results = [];
  for (let i = stonesCount; i >= 0; i--) {
    let lastStone = i * a + (stonesCount - i) * b;
    results.push(lastStone);
  }
  return [...new Set(results)].sort((a, b) => a - b);
}
stones(3, 1, 2);
stones(4, 10, 100);
stones(9, 25, 59);
stones(18, 28, 28);
stones(58, 69, 24);
//Works!

//The Grid Search
//Based on given pattern
//See if the grid contains the pattern
//Loop through grid
//Join digits into strings
//Check if any strings include the first string of the pattern
//if yes note the index and extract the sequence
//compare sequence to pattern
//Return result

function gridSearch(G, P) {
  let n = G.length;
  let m = P.length;
  let possibleMatch = G.filter(x => x.includes(P[0]));
  for (let k = 0; k < possibleMatch.length; k++) {
    let i = G.indexOf(possibleMatch[k]);
    let start = G[i].indexOf(P[0]);
    let end = start + P[0].length;
    let results = [];
    for (let j = 1; j < m; j++) {
      let temp = G[i + j].slice(start, end);
      results.push(temp === P[j]);
    }
    if (!results.includes(false)) {
      return "YES";
    }
  }
  return "NO";
}
//Timeout Error on 4 cases

gridSearch(
  [
    "7283455864",
    "6731158619",
    "8988242643",
    "3830589324",
    "2229505813",
    "5633845374",
    "6473530293",
    "7053106601",
    "0834282956",
    "4607924137"
  ],
  ["9505", "3845", "3530"]
);

function gridSearch(G, P) {
  for (let i = 0; i < G.length - P.length + 1; i++) {
    let j = 0;

    while (j < G[i].length - P[0].length + 1) {
      j = G[i].indexOf(P[0], j);
      if (j === -1) {
        break;
      }

      for (let k = i + 1; k - i < P.length; k++) {
        if (G[k].substring(j, j + P[0].length) !== P[k - i]) {
          break;
        } else if (k - i === P.length - 1) {
          return `YES`;
        }
      }
      j++;
    }
  }
  return `NO`;
}
//WORKS!

//Happy LadyBugs
//Check if it's possible to satisfy the condition
//Each ladybug is happy if next or prev ladybug is the same color
//split string into an array
//check if empty spaces
//check if there is alone elements
//if no spaces check if string is happy
//

function happyLadybugs(b) {
  let boardArr = b.split("");
  let results = [];
  let occurences = [];
  function isHappy(bug, index, board) {
    if (bug === board[index - 1] || bug === board[index + 1]) {
      return true;
    } else {
      return false;
    }
  }
  function howMany(arr, value) {
    let count = 0;
    arr.forEach(element => element === value && count++);
    return count;
  }
  let bugArr = boardArr.filter(x => x !== "_");

  for (let i = 0; i < boardArr.length; i++) {
    results.push(isHappy(boardArr[i], i, boardArr));
    occurences.push(howMany(bugArr, boardArr[i]));
  }
  if (
    (b.includes("_") && !occurences.includes(1)) ||
    (!b.includes("_") && !results.includes(false))
  ) {
    return "YES";
  } else {
    return "NO";
  }
}
happyLadybugs("RBY_YBR");
//Works!

//Strange Counter
//More complicated than it seems
//Tried to write down result in 1 line
//Works on 3 cases
//Remake
function strangeCounter(t) {
  let dev = Math.floor(t / 3),
    m = 1,
    cm = 0,
    diff = dev - m,
    zone,
    remain;
  while (diff >= 0) {
    cm += m;
    m = m * 2;
    diff -= m;
  }
  remain = t - 3 * cm;
  if (remain == 0) {
    return 1;
  }
  zone = m * 3;
  return zone - remain + 1;
}
strangeCounter(4);
strangeCounter(5);
strangeCounter(8);

//Super Reduced String
//Loop from the end of array
//check if 2 elements are consecutively the same
//delete the elements
//filter the array from empty element
//if endArr.length = 0 return empty string
//else return the array.join('');
function superReducedString(s) {
  let stringArr = s.split("");
  let n = stringArr.length;
  for (let i = n - 1; i > 0; i--) {
    if (stringArr[i] === stringArr[i - 1]) {
      delete stringArr[i];
      delete stringArr[i - 1];
    }
    stringArr = stringArr.filter(x => x !== "");
  }
  if (stringArr.length === 0) {
    return "Empty String";
  } else {
    return stringArr.join("");
  }
}
superReducedString("baab");
superReducedString("aaabccddd");

//CamelCase
//Input = one string divided by capital letters
//use split with a positive lookahead to match the capital letters
//count the length of the array
//return the length

function camelcase(s) {
  let stringArr = s.split(/(?=[A-Z])/);
  return stringArr.length;
}
camelcase("saveChangesInTheEditor");

//Two Characthers
function alternate(s) {
  function howMany(arr, value) {
    let count = 0;
    arr.forEach(element => element === value && count++);
    return count;
  }
}

alternate("beabeefeab");

//Closest Numbers
//Sort Array ascending
//Find the smallest difference
//Check which pairs are equal to that
//add them to new arr
//return new arr
function closestNumbers(arr) {
  let minAbsDif = Math.abs(arr[0] - arr[1]);
  const n = arr.length;
  arr.sort((a, b) => a - b);
  let pairs = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) < minAbsDif) {
      minAbsDif = Math.abs(arr[i] - arr[i + 1]);
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) === minAbsDif) {
      pairs.push(arr[i], arr[i + 1]);
    }
  }
  return pairs;
}
closestNumbers([5, 4, 3, 2]);
closestNumbers([
  -20,
  -3916237,
  -357920,
  -3620601,
  7374819,
  -7330761,
  30,
  6246457,
  -6461594,
  266854,
  -520,
  -470
]);
closestNumbers([
  -20,
  -3916237,
  -357920,
  -3620601,
  7374819,
  -7330761,
  30,
  6246457,
  -6461594,
  266854
]);

//Find the Median
//Sort the array
//Determin middle element = length-1/2 || Math.floor(n/2)
//return middle element
function findMedian(arr) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  const median = Math.floor(n / 2);
  return arr[median];
}
findMedian([0, 1, 2, 4, 6, 5, 3]);

//Missing Numbers
//Sort the two arrays
//extract unique set
//count how many of each of element of the unique set and add them to an object
//return missing numbers
function missingNumbers(arr, brr) {
  function howMany(array, value) {
    let count = 0;
    array.forEach(element => element === value && count++);
    return count;
  }
  let n1 = arr.length;
  let n2 = brr.length;
  arr.sort((a, b) => a - b);
  brr.sort((a, b) => a - b);
  console.log(arr);
  console.log(brr);

  let checkArr = [...new Set(brr)];
  let resultsArr = [];

  console.log(checkArr);
  checkArr.forEach(element => {
    if (howMany(arr, element) < howMany(brr, element)) {
      resultsArr.push(element);
    }
  });
  return resultsArr;
}

missingNumbers(
  [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
  [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
);

//Pairs
//Loop through array
//Loop through array from i+1
//check if diff = k
//add count
//return count

function pairs(k, arr) {
  let count = 0;
  const n = arr.length;
  arr.sort((a, b) => a - b);
  arr.forEach(x => {
    let temp = arr.filter(y => y === x + k);
    count += temp.length;
  });
  return count;
}
pairs(2, [1, 5, 4, 3, 2]);
