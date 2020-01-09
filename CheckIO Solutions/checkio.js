//Multiply numbers ignoring 0's
const data = 123405;
function multiply(data) {
    let arrData = data.toString(10).split('').map(Number);
    let result = 1;
    let multiply = arrData.filter(function(value, index, arr){
            return value > 0;
        });
    multiply.forEach(function(num){
        return result *= num;
    });
    return result;
}


//Extracts Capitalized Letters
let data= "SusdjasdaUdsadsaIdsadadaE"; 

function findMessage(data) {
   let secretMessage = "";
   for(let i=0;i<data.length;i++){
       let capital = data.charAt(i);
       if(capital === data.charAt(i).toUpperCase() && capital >= "A" && capital <= "Z"){
             secretMessage += capital;
       }
   }
   return secretMessage;
};



//Extracts the second occurence of the same symbol in the given string secondindex('cheese','e') =3
function secondIndex(text,symbol){
    for(let i = 0; i < text.length; i++){
        let letter = text.charAt(i);
        let firstInstIndex = text.indexOf(letter);
        let secondInstIndex = text.indexOf(letter,(firstInstIndex + 1));
        if(letter === symbol && secondInstIndex > 0){
            return secondInstIndex;
        }
    }
}

//Capitalize The first letter and adds a dot. at the end

function correctSentence(text){
    let newSentence = '';
    let lastIndex = text.length - 1;
    if(text.charAt(0) !== text.charAt(0).toUpperCase()){
        newSentence = text.charAt(0).toUpperCase() + text.substring(1);
    }else{
        newSentence = text;
    };
    if(text.charAt(lastIndex) !== '.'){
        newSentence += '.';
    }
    return newSentence;
}

//find the even indexes/add them/multiply the last

function evenLast(data) {
    let sum = 0;
    let lastIndex = data.length - 1;
    if (data === undefined || data.length == 0) {
        sum = 0;
        return 0;
    }else{
    for(let i=0;i<data.length;i++){
        if(i % 2 === 0 ){
            sum += data[i]
        }       
    }
    }
    let multiply = sum * data[lastIndex];
    return multiply;
    
}

//Find if common string exists/output common words

function commonWords(first, second) {
    let firstArr = first.split(',');
    let secondArr = second.split(',');
    let isCommon = [];
    for(let i=0;i<firstArr.length;i++){
        for (let z=0;z<secondArr.length;z++){
            if(secondArr[z] === firstArr[i] && !isCommon.includes(secondArr[z])){
            isCommon.push(secondArr[z]);
                }
            }
    }
    return isCommon.sort().toString();
    

}

commonWords("hello,world", "hello,earth");
commonWords("one,two,three", "four,five,six");
commonWords("one,two,three", "four,five,one,two,six,three")


//Difference between smallest and largest float in an array
function mostNumbers(numbers){
    const numArr = [...arguments];
    const n = numArr.length;
    numArr.sort((a,b) => a-b);
    console.log(numArr);
    if(numArr.length === 0){
        return 0;
    }else{
        return numArr[n-1]-numArr[0];
    }
}

mostNumbers(1, 2, 3);
mostNumbers(5, -5);

//Count Inversion 
function countInversion(sequence){
    let inversions = 0;
    const n = sequence.length;
    sequence.forEach((element) => {
        let temp = sequence.slice(sequence.indexOf(element)).filter((x) => x < element);
        inversions += temp.length;
    })
    return inversions;
}
countInversion([1, 2, 5, 3, 4, 7, 6])

//Most Frequent
function mostFrequent(data){
    function howMany(arr,value){
        let count = 0
        arr.forEach((element) => (element === value && count++));
        return count;
    }
    const freqArr = data.map((x)=>howMany(data,x));
    return data[freqArr.indexOf(Math.max(...freqArr))];
}
mostFrequent(['a', 'a', 'bi', 'bi', 'bi']);

//Three Words
function threeWords(data){
    const dataArr = data.split(' ');
    let count = 0;
    let convertedData = dataArr.map((x) => Number(x));
    for(let i=0;i<convertedData.length;i++){
    if(Number(convertedData[i]) !== convertedData[i]){
        count++;
    }else{
        count = 0;
    }
    if(count === 3){
        return true;
    }
    }
    return false;
}
threeWords("Hello World hello");
threeWords("He is 123 man");

//BiggerPrice
function biggerPrice(limit, data) {
    let sortedData = data.sort((a,b) => b.price - a.price);
    let result = [];
    let i=0;
    while(result.length < limit){
        result.push(sortedData[i]);
        i++;
    }
    return result;    
}

biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]);

//First Word Simplified
function firstWord(a, b) {
    return a.split(' ')[0];
}
firstWord("Hello world");


//First Word 
function firstWord(a, b) {
    let results = a.split(' ');
    return results[0];
}
firstWord("Hello world");
firstWord("greetings, friends")