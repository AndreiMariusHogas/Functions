//Find the length of the longest word in a string

function findLongestWordLength(str){
    strArray = str.split(' ');
    let longestWord = '';
    for (let i = 0;i < strArray.length;i++){
        if(strArray[i].length > longestWord.length){
            longestWord = strArray[i];
        }
    }
    let wordLength = longestWord.length
    return wordLength;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("May the force be with you");
findLongestWordLength("Google do a barrel roll");
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");

//Return array with the biggest element out of each nested array
function largestOfFour(arr) {
    let newArr = [];
    let biggest ;
    arr.forEach(function(elem){
        for(let i = 0;i<elem.length;i++){
            if(elem[i] > biggest){
                biggest = elem[i];
            }
        }
        newArr.push(biggest);
        biggest = 0;
    })    
    return newArr;
  }
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Repeat a string a given number of times
function repeatStringNumTimes(str, num) {
    let newStr = '';
    if( num <= 0 ){
        newStr = '';
    }else{
        for (let i = 1 ; i <= num; i++){
            newStr += str;
        }
    }
    return newStr;
  }
  
  repeatStringNumTimes("abc", 3);


//Truncate a string if length bigger than the number given + add '...'
  function truncateString(str, num) {
    let newStr = '';
    if(str.length > num){
      newStr = str.substr(0,num) + '...';
    }else{
      newStr = str;
    }
    return newStr;
  }

truncateString("A-tisket a-tasket A green and yellow basket", 8);


function findElement(arr, func) {
    let num = 0;
    for (let i=0;i<arr.length;i++){
        if(!func(arr[i])){
            num = undefined;
        }else{
            num = arr[i];
            return num;
        }
    }
    return num;
}
  
findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })

//Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
    if(typeof(bool) === 'boolean'){
        return true;
    }else{
        return false;
    }
}

booWho(null);
booWho(true);

//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
    let newStr = "";
    let newArray = str.split(' ');
    let newStrArray = [];
    let finalSentence = "";
    for (let i=0;i<newArray.length;i++){
        for (let x=0;x < newArray[i].length;x++){
            if(newArray[i].charAt(x) === newArray[i].charAt(0)){
                newStr += newArray[i].charAt(0).toUpperCase();
            }
            else{
                newStr += newArray[i].charAt(x).toLowerCase();
            }
        }
        newStrArray.push(newStr);
        newStr = '';
    }
    for(let y=0;y<newStrArray.length;y++){
        finalSentence += newStrArray[y] + ' ';
    }
    let exception = finalSentence.replace(/\\/g, "");
    console.log(exception);
    return exception;
}
  
titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

//Use the array methods slice and splice to copy each element of the first array into the second array, in order.
function frankenSplice(arr1, arr2, n) {
    let newArr1 = arr1.slice(0);
    let newArr2 = arr2.slice(0);
    for (let i = newArr1.length-1;i>=0;i--){
        newArr2.splice(n,0,newArr1[i]);
    }
    return newArr2;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Remove all falsy values from an array.
function bouncer(arr) {
    let cleanArr = [];
    for(let i = 0; i < arr.length;i++){
        if(arr[i]){
            cleanArr.push(arr[i]);
        }
    }
    return cleanArr;
}
  
bouncer([7, "ate", "", false, 9]);

//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
function getIndexToIns(arr, num) {
    arr.sort(function(a,b){
        return a-b;
    });
    console.log(arr);
    for (let i=0;i<=arr.length;i++){
        if(arr[i] >= num){
            return i;
        } 
    }
    return arr.length;
}
getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([10, 20, 30, 40, 50], 30);
getIndexToIns([40, 60], 50);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 20, 10], 19);
getIndexToIns([2, 5, 10], 15);
getIndexToIns([], 1);

//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
    let newArr = [];
    let isTrue ='';
    for(let i = 0;i < arr[1].length;i++){
            newArr.push(arr[1].charAt(i).toLowerCase());
    }
    for (let x=0;x < newArr.length;x++){
        if(arr[0].indexOf(newArr[x]) == -1){
            isTrue +=  'false';
        }else{
            isTrue += 'true';
        }
    }
    if(isTrue.includes('false')){
        return false;
    }else{
        return true;
    }
}
mutation(["hello", "Hello"])
mutation(["hello", "hey"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])


function chunkArrayInGroups(arr, size) {
        let i; 
        let x;
        let newArr = [];
        let reSize = 2;
        for (i=0,x=arr.length; i<x; i+=reSize) {
            newArr.push(arr.slice(i,i+reSize));
        }
        return newArr;
}
      
chunkArrayInGroups(["a", "b", "c", "d"], 2);

//Sum All Numbers in a Range
function sumAll(arr) {
    let newArr = arr.sort(function(a,b){
      return a-b;
    });
    let sumOf = 0;
    for(let i = newArr[0];i<=newArr[1];i++){
        sumOf +=i;
    }
    return sumOf;
}
  
sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
  function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.forEach(function(element){
        if(!arr2.includes(element)){
            newArr.push(element);
        }
    })
    arr2.forEach(function(elementOf){
        if(!arr1.includes(elementOf)){
            newArr.push(elementOf);
        };
    })
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
  function destroyer(arr) {
    const newArr = Array.from(arguments);
    for(let i = 0;i<arr.length;i++){
        for(let x=1;x<newArr.length;x++){
            if(arr[i] === newArr[x]){
                arr.splice(i,1);
            }
        }
    }
    for(let i = 0;i<arr.length;i++){
        for(let x=1;x<newArr.length;x++){
            if(arr[i] === newArr[x]){
                arr.splice(i,1);
            }
        }
    }
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  destroyer([3, 5, 1, 2, 2], 2, 3, 5);
  destroyer([2, 3, 2, 3], 2, 3);
  destroyer(["tree", "hamburger", 53], "tree", 53);
  destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");

//Wherefore art thou
  function whatIsInAName(collection, source) {
    var arr = [];
    let sourceKeys = Object.keys(source);
    arr = collection.filter(function(obj) {
        for (var i = 0; i < sourceKeys.length; i++) {
          if (
            !obj.hasOwnProperty(sourceKeys[i]) ||
            obj[sourceKeys[i]] !== source[sourceKeys[i]]
          ) {
            return false;
          }
        }
        return true;
      });
    
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  //Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
  function spinalCase(str) {
    let newStr = str.split(/(?=[A-Z])/g).join(' ');
    let modifiedStr = newStr.split(/[_\W]/);
    let finalStr = modifiedStr.filter(item => item !== '');
    return finalStr.join('-').toLowerCase();
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("The_Andy_Griffith_Show");
  spinalCase("Teletubbies say Eh-oh");
  spinalCase("AllThe-small Things");

  //Translate the provided string to pig latin.
  function translatePigLatin(str) {
      let newString = '';
      let regex = /[aeiou]/gi;
      if(str[0].match(regex)){
          newString = str + 'way';
      }else if(str.match(regex) === null){
          newString = str + 'ay';
      }else{
          let vowelIndex = str.indexOf(str.match(regex)[0]);
          newString = str.substr(vowelIndex) + str.substr(0,vowelIndex) + 'ay';
      }
      return newString;
  }
  
  translatePigLatin("consonant");

//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
  function myReplace(str, before, after) {
    let newArr = str.split(/\s/);
    let regex = /[A-Z]/;
    let finalAfter = '';
    if(before.match(regex)){
        let newAfter = after.split('');
        newAfter[0] = newAfter[0].toUpperCase();
        finalAfter = newAfter.join('');
    }else{
        finalAfter = after;
    }
    for (let i=0;i<newArr.length;i++){
        if(newArr[i] === before){
            newArr[i] = finalAfter;
        }
    }
    let finalSentence = newArr.join(' ');
    return finalSentence;
  }
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplace("His name is Tom", "Tom", "john")
  myReplace("Let us go to the store", "store", "mall");
  myReplace("This has a spellngi error", "spellngi", "spelling");

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
  function pairElement(str) {
    let finalArr = [];
    let newArr = str.split('');
    for(let i=0;i<newArr.length;i++){
        if(newArr[i] === "G"){
            finalArr.push(['G','C']);
        }else if(newArr[i] === "C"){
            finalArr.push(['C','G']);
        }else if(newArr[i] === "T"){
            finalArr.push(['T','A']);
        }else{
            finalArr.push(['A','T'])
        }
    }
    return finalArr;
  }
  
  pairElement("GCG");
// Find the missing letter in the passed letter range and return it.
  function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);

        if (code !== str.charCodeAt(0) + i) {

          return String.fromCharCode(code - 1);
        }
      }
      return undefined;
  }
  
  fearNotLetter("abce");
  fearNotLetter("abcdefghjklmno")
  fearNotLetter("abcdefghijklmnopqrstuvwxyz");


function uniteUnique(arr) {
    let initialArr = [];
    for(let i=0;i<arguments.length;i++){
        arguments[i].forEach(function(elem){
            initialArr.push(elem);
        })
    }
    for (let x=0;x<initialArr.length;x++){
        let number = initialArr[x];
        let firstIndex = initialArr.indexOf(number);
        if(initialArr.indexOf(number,(firstIndex + 1)) && initialArr.indexOf(number,(firstIndex + 1)) > 0){
            delete initialArr[initialArr.indexOf(number,(firstIndex + 1))];
        }
    }
    let finalArr = initialArr.filter(function(elem){
        return elem != undefined;
    })
    return finalArr;
}

  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  uniteUnique([1, 2, 3], [5, 2, 1]);
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);



//Convert HTML Entities
//Loop thorugh Array
//find SYMBOL 
//Replace with HTML ENTITY

function convertHTML(str) {
    newArr = str.split('');
    for(let i=0;i<newArr.length;i++){
        if(newArr[i] === '&'){
            newArr[i] = '&amp;';
        }else if(newArr[i] === '<'){
            newArr[i] = '&lt;';
        }else if(newArr[i] === '>'){
            newArr[i] = '&gt;';
        }else if(newArr[i] === "'"){
            newArr[i] = '&apos;';
        }else if(newArr[i] === '"'){
            newArr[i] = '&quot;'
        }
    }
    let finalArr = newArr.join('');
    return finalArr;
  }
  
  convertHTML("Dolce & Gabbana");
  convertHTML("Hamburgers < Pizza < Tacos")
  convertHTML("Sixty > twelve")
  function convertHTML(str) {
  
    var newArr = str.split("");
  
    for (var i = 0; i < newArr.length; i++) {
      switch (newArr[i]) {
        case "<":
          newArr[i] = "&lt;";
          break;
        case "&":
          newArr[i] = "&amp;";
          break;
        case ">":
          newArr[i] = "&gt;";
          break;
        case '"':
          newArr[i] = "&quot;";
          break;
        case "'":
          newArr[i] = "&apos;";
          break;
      }
    }
    newArr = newArr.join("");
    return newArr;
}


//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {
    let dividerArr=[];
    let newArr = arr.sort(function(a,b){
        return a-b;
    });
    for(let i=newArr[0];i<=newArr[1];i++){
        dividerArr.push(i);
    }
    var quot = 0;
    var loop = 1;
    var n;
    do {
        quot = dividerArr[0] * loop * dividerArr[1];
        for (n = 2; n < dividerArr.length; n++) {
          if (quot % dividerArr[n] !== 0) {
            break;
          }
        }
    
        loop++;
      } while (n !== dividerArr.length);
    
    return quot;
    
}
  
  
  smallestCommons([1,5]);

  //Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
  
  function dropElements(arr, func) {
    var times = arr.length;
    for (var i = 0; i < times; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
  }

dropElements([1, 2, 3], function(n) {return n < 3; });

//Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
    let newArr = [];
    let extract = function(arg){
        if(!Array.isArray(arg)){
            newArr.push(arg);
        }else{
            for (let a in arg){
                extract(arg[a]);
            }
        }
    }
    arr.forEach(extract);
    return newArr;
  }
  

  steamrollArray([1, [2], [3, [[4]]]]);

  //Return an English translated sentence of the passed binary string.

  function binaryAgent(str) {
    let newArr = str.split(' ');
    let translate = [];
    for(let i=0;i<newArr.length;i++){
        translate.push(String.fromCharCode(parseInt(newArr[i],2)));
    }
    return translate.join('');
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
  function truthCheck(collection, pre) {
    // Is everyone being true?
    let isTrue = [];
    for(let i=0;i<collection.length;i++){
      let colKeys = Object.keys(collection[i]);
        for(let x=0;x<colKeys.length;x++){
            if(colKeys[x] === pre){
                if(collection[i][colKeys[x]]){
                    isTrue.push(true);
                }
            }
        }
    }
    return isTrue.length == collection.length
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
  truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")

//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
  function addTogether() {
    let isNumber = function(arg){
        if(typeof arg !== 'number'){
            return undefined;
        }else{
            return arg;
        }
    }
    if (arguments.length > 1){
        let firstArg = isNumber(arguments[0]);
        let secondArg = isNumber(arguments[1]);
        if (firstArg === undefined || secondArg === undefined){
            return undefined;
        }else{
            return firstArg + secondArg;
        }
    }else{
        let firstArg = arguments[0];
        if(isNumber(firstArg)){
            return function(secondArg){
                if(firstArg === undefined || isNumber(secondArg) === undefined){
                    return undefined;
                }else{
                    return firstArg + secondArg;
                }
            }
        }
    }
  }
  
  addTogether(2,3);
  addTogether("http://bit.ly/IqT6zt");


// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
  var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let nameArr = firstAndLast.split(/\W/);
    this.fullName = firstAndLast;
    this.firstName = nameArr[0];
    this.lastName = nameArr[1];
    this.getFullName = function() {
      return this.fullName;
    };
    this.getFirstName = function(){
        return this.firstName;
    }
    this.getLastName = function(){
        return this.lastName;
    }
    this.setFirstName = function(firstName) {
        this.firstName = firstName;
    }
    this.setLastName =  function(lastName){
        this.lastName = lastName;
    }
    this.setFullName = function(fullName){
        this.fullName = fullName;
    }
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();

//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
  function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let newArr = [];
    let radius = 2 * Math.PI;
    let getOrbital =  function(obj){
        let semiMajor = Math.pow(earthRadius = obj.avgAlt,3);
        let radical = Math.sqrt(semiMajor/GM);
        let orbitalPeriod =Math.round(radius * radical);
        delete obj.avgAlt;
        obj.orbitalPeriod = orbitalPeriod;
        return obj;
    };
    for (let element in arr){
        newArr.push(getOrbital(arr[element]));
    }
    return newArr;
  }


  function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    var newArr = [];
    var getOrbPeriod = function(obj) {
      var c = Math.pow(earthRadius + obj.avgAlt, 3);
      var b = Math.sqrt(c / GM);
      var orbPeriod = Math.round(a * b);
      delete obj.avgAlt;
      obj.orbitalPeriod = orbPeriod;
      return obj;
    };
  
    for (var elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])



