//Given an array of integers, find the sum of its elements.
function simpleArraySum(ar) {
    let sum=0;
    ar.forEach((element) => sum+=element);
    return sum;
}

//Compare the triplets
function compareTriplets(a, b) {
    let scoreA=0;
    let scoreB=0;
    let result=[];
    for(let i=0;i<a.length;i++){
        if(a[i] < b[i]){
            scoreB+= 1;
        }else if(a[i] > b[i]){
            scoreA+= 1;
        }
    }
    result.push(scoreA);
    result.push(scoreB);
    return result;
}
//Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
function aVeryBigSum(ar) {
    let sum=0;
    ar.forEach((element) => sum+=element);
    return sum;
    
}

//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    let ltrsum = 0;
    let rtlsum = 0;
    let x=arr.length;
    for(let i=0;i<x;i++){
        ltrsum += arr[i][i];
        for(let j=0;j<x;j++){
            if(i+j === x-1){
                rtlsum+= arr[i][j];
            }
        }
    }
    return Math.abs(ltrsum - rtlsum);

}

//Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
function plusMinus(arr) {
    let positive =0; 
    let negative =0;
    let zero=0;
    let n = arr.length;
    arr.forEach(function(element){
        if(element > 0){
            positive +=1;
        }else if(element < 0){
            negative +=1;
        }else{
            zero +=1;
        }
    })
    let ratioP = positive/n.toFixed(6);
    let ratioN = negative/n.toFixed(6);
    let ratioZ = zero/n.toFixed(6);
    return console.log(ratioP + '\n' + ratioN + '\n'+ ratioZ);
}

plusMinus([-4,3,-9,0,4,1]);

//Write a program that prints a staircase of size n 
function staircase(n) {
    let staircase = '';
    for(let i=1;i<=n;i++){
        for(let j=n;j>=1;j--){
            if(j>i){
                staircase += ' ';
            }else{
                staircase += '#';
            }
        }
        staircase += '\n';
    }
    return (console.log(staircase));
}
staircase(6);

//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
function miniMaxSum(arr) {
    let maxSum = 0;
    let minSum = 0;
    if(arr[0] != arr[1]){
        let minNum = Math.min(...arr);
        let maxNum = Math.max(...arr);
        let minSumArr = arr.filter(item => item != maxNum);
        let maxSumArr = arr.filter(item => item != minNum);
        minSumArr.forEach(element => minSum += element);
        maxSumArr.forEach(element => maxSum += element);
    }else{
        for(let i=0;i<arr.length-1;i++){
            minSum+= arr[i];
            maxSum+= arr[i];
        }
    }
    return console.log(minSum + " " + maxSum);
}

miniMaxSum([1,2,3,4,5]);
miniMaxSum([5,5,5,5,5]);

//Birthday Cake 
function birthdayCakeCandles(ar) {
    let tallestCandle =  Math.max(...ar);
    let count = 0;
    ar.forEach((candle) => {
        if (candle == tallestCandle){
            count +=1;
        }
    })
    return count;
}

birthdayCakeCandles([3,2,1,3]);

//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
function timeConversion(s) {
    let timeArr = [];
    let convertedArr = [];
    if(s.includes('PM') || s.includes('pm')){
        timeArr = s.split(/[^0-9]/);
        let n = timeArr.length;
        for(let i = 0; i<n;i++){
            if(timeArr[i] == '12'){
                convertedArr.push('12');
            }
            else if(timeArr[i] === timeArr[0]){
                convertedArr.push(Number(timeArr[0])+12);
            }else if(timeArr[i] != ''){
                convertedArr.push(timeArr[i]);
            }
        }
        return convertedArr.join(':');
    }else{
        timeArr = s.split(/[^0-9]/);
        let n = timeArr.length;
        for(let i = 0; i<n;i++){
            if(timeArr[i] == '12'){
                convertedArr.push('00');
            }else if(timeArr[i] != ''){
                convertedArr.push(timeArr[i]);
            }
        }
        return convertedArr.join(':')
    }
    
}
timeConversion('07:05:45PM');
timeConversion('07:05:45AM');
timeConversion('12:40:22AM');
timeConversion('12:45:54PM');

//HackerLand University
function gradingStudents(grades) {
    let updatedGrades = [];
    grades.forEach((grade) => {
        if(grade <38) {
            updatedGrades.push(grade);
        }else if(grade % 5 >= 3) {
            updatedGrades.push(grade + (5-grade % 5));
        }else{
            updatedGrades.push(grade);
        }

    })
    return updatedGrades;
}
gradingStudents([4,73,67,38,33]);

//Sam's House Orange and Apples 

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    apples.forEach((apple) => {
        if( a + apple >= s && a + apple <= t){
            appleCount += 1;
        }
    })
    oranges.forEach((orange) => {
        if( b + orange >= s && b + orange <= t){
            orangeCount += 1;
        }
    })
    return console.log(appleCount + '\n' + orangeCount);
}

countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]);

//Kangaroo Jump 
function kangaroo(x1, v1, x2, v2) {
    if(x2>x1 && v2>v1){
        return "NO";
    }else if(x1< x2 && v1 == v2){
        return "NO";
    }
    else{
        let distancek1 = x1 + v1;
        let distancek2 = x2 + v2;
        while(distancek1 < distancek2){
            distancek1 += v1;
            distancek2 += v2;
        }
        console.log(distancek1);
        console.log(distancek2);
        if(distancek1 == distancek2){
            return "YES";
        }
        else{
            return "NO";
        }
    }
}

kangaroo(0,3,4,2);

//Between Two Sets
function getTotalX(a, b) {
    let n=a.length;
    let m=b.length;
    let totalLength = n * m;
    let betweenNums = [];
    let resultsArr = [];
    let finals = 0;
    for(let i=a[n-1]; i <= b[0];i++){
        betweenNums.push(i);
    }
    betweenNums.forEach((num) => {
        for(let i=0; i < n;i++){
            for (let j=0; j< m;j++){
                if(num % a[i] === 0 && b[j] % num === 0){
                    resultsArr.push(num);
                }
                
            }   
            
        }
    })
    function repeatX(arr,value){
        let times = 0;
        arr.forEach((element) => (element === value && times ++));
        return times;
    }
    for(let i=0;i<resultsArr.length;i++){
        let count = repeatX(resultsArr,resultsArr[i]);
        if(count === totalLength){
            finals+=1;
        }
    }
    
    return finals/totalLength;
}

getTotalX([2,6],[24,36]);
getTotalX([2,4],[16,32,96]);

//Breaking the Records

function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let minBreaks = 0;
    let maxBreaks = 0;
    let n=scores.length;
    let finalArr = [];
    for(let i=1;i<n;i++){
        if(scores[i] < min){
            min = scores[i];
            minBreaks += 1;
        }else if(scores[i] > max){
            max = scores[i];
            maxBreaks +=1;
        }
    }
    finalArr.push(maxBreaks);
    finalArr.push(minBreaks);
    return finalArr;

}

breakingRecords([10,5,20,20,4,5,2,25,1]);

//Birthday Chocolate
function birthday(s, d, m) {
    let n = s.length;
    let results = [];
    for(let i = 0; i < n;i++){
        let newArr = s.slice(i,i+m);
        let chocoSum = 0;
        newArr.forEach((element) => chocoSum += element);
        if(chocoSum === d){
            results.push(newArr);
        }
    }
    return results.length;
}

birthday([1,2,1,3,2],3,2);

//Divisible Sum Pairs
function divisibleSumPairs(n, k, ar) {
    let pairsArr = [];
    for(let i=0; i < n - 1; i++){
        for(let j = i + 1;j < n;j++){
            if((ar[i]+ar[j]) % k === 0){
                pairsArr.push([ar[i],ar[j]]);
            }
        }
    }
    return pairsArr.length;
}

divisibleSumPairs(6,3,[1,3,2,6,1,2]);
divisibleSumPairs(100,22,[43, 95, 51, 55,40, 86, 65, 81, 51, 20, 47, 50, 65, 53, 23, 78, 75, 75, 47, 73, 25, 27, 14, 8, 26, 58, 95, 28, 3,
    23, 48, 69, 26, 3, 73, 52, 34, 7, 40, 33, 56, 98, 71, 29, 70, 71, 28, 12, 18, 49, 19, 25, 2, 18, 15, 41, 51, 42, 46, 19, 98, 56, 54, 98,
    72 ,25 ,16 ,49 ,34 ,99 ,48 ,93 ,64 ,44 ,50 ,91 ,44 ,17 ,63 ,27 ,3 ,65 ,75 ,19 ,68 ,30 ,43 ,37 ,72 ,54 ,82 ,92 ,37 ,52 ,72, 62, 3,88,82,71])


//Migratory Birds
function migratoryBirds(arr) {
    let countArr=[];
    let resultArr = [];
    function howMany(arr,value){
        let count = 0
        arr.forEach((bird) => (bird === value && count++));
        return count;
    }
    for(let i=1;i<=5;i++){
        countArr.push(howMany(arr,i));
    }
    let seen = Math.max(...countArr);
    for(let i=0;i<=5;i++){
        if(countArr[i] === seen){
            return i+1;
        }
    }
}
migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]);
//Failed twice because i wrote too many functions
//Managed to optimize so it doesn't loop through an immense array
//The 1,2,3,4,5 type limitation was my hint to understand the timeout error
//Loop and count the occurence of just numbers 1 to 5 without looping through the entire array
//Remember An Array starts at 0 even if you loop from 1

//Day of the Programmer
//Create if statement before after and equal to 1918
//if prior to 1918 & divsible by 4 = Julian Leap Year
//after 1918 divisible by 400 || (4 but not 100)  

function dayOfProgrammer(year) {
    let celebrationDay = '';
    if(year<1918){
        if(year % 4 === 0){
            return celebrationDay = '12.09.'+year;
        }else{
            return celebrationDay = '13.09.'+year;
        }
    }else if(year === 1918){
            return celebrationDay = '26.09.'+year;
    }else{
        if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
            return celebrationDay = '12.09.'+year;
        }else{
            return celebrationDay = '13.09.'+year;
        }
    }

}

dayOfProgrammer(1918);
dayOfProgrammer(2017);
dayOfProgrammer(1884);
dayOfProgrammer(1873);

//Bon Appétit
//Loop Through Array 
//Calculate Bill Value 
//Remove k item form the sum and divide it by  2
//Compare to b 
//return result 
//Error on big array
//Simplify the Average Array Sum 

function bonAppetit(bill, k, b) {
    let totalBill = bill.reduce((a,b) => a + b, 0) - bill[k];
    let compare =  b - totalBill/2;
    if(compare === 0){
        console.log('Bon Appetit');
    }else{
        console.log(compare);
    }
}

bonAppetit([3,10,2,9],1,7);
bonAppetit([3,10,2,9],1,12);

//Sock Merchant
//Loop Through Array 
//Filter Array of Unique Values 
//Check occurences of each unique element in given Array
//Check if number of occurences is divisible by 2 
//If yes add number/2 to total pairs
//if no add (num-1)/2 to total pairs

function sockMerchant(n, ar) {
    function extractUnique(value, index, self){
        return self.indexOf(value) === index;
    }
    function howMany(arr,value){
        let count = 0
        arr.forEach((bird) => (bird === value && count++));
        return count;
    }
    let uniqueArr = ar.filter(extractUnique);
    let resultsArr = [];
    let totalPairs = 0;
    uniqueArr.forEach((num) => resultsArr.push(howMany(ar,num)));
    resultsArr.forEach((num) => {
        if(num >= 2 && num % 2 === 0){
            totalPairs += num/2;
        }else{
            totalPairs += (num-1)/2;
        }
    })
    return totalPairs;
}

sockMerchant(9,[10,20,20,10,10,30,50,10,20]);

//Drawing Book 
//n-length of book 
//p-page index 
//You can see 2 pages of the book everytime you turn except first and last
//Check if there's more than 2 pages 
//Check what is the minimum amount of pages to turn  from 0 or n 
//return the result 

function pageCount(n, p) {
    let pagesArr = [];
    for(let i=0;i<=n;i++){
        pagesArr.push(i);
    }
    if(n<=2){
        return 0;
    }
    for(let i=0;i<pagesArr.length;i++){
        if(pagesArr[i] === p){
            if(i < n-i){
                return Math.floor(i/2);
            }else{
                if(n%2===0 && n-p <= 1){
                    return Math.floor(((n-i)+1)/2);
                }
                return Math.floor((n-i)/2);
            }
        }
    }
}

pageCount(5,4);
pageCount(9,7);
pageCount(6,5);

//Counting Valleys
//Split String into Array 
//Check height 
//check if is valley
//conditionals if/else for step to track height
//return count 
function countingValleys(n, s) {
    let guideArr = s.split('');
    let height = 0;
    let isValley = false;
    let valleyCount = 0;
    guideArr.forEach((step)=>{
        if(step === "U"){
            height ++;
        }
        else{
            height --;
        }
        if(height<0 && isValley === false){
            valleyCount ++;
            isValley = true;
        }else if( height >= 0){
            isValley = false;
        }
    })
    return valleyCount;
   
}
countingValleys(8,'DDUUDDUDUUUD');

//Electronics Shop
//Loop Through both array and push value pairs onto new array 
//Push Price into a price array
//Check for Biggest value in Price Array


function getMoneySpent(keyboards, drives, b) {
    let combinedPrice = [];
    keyboards.forEach((keyboard) => {
        drives.forEach((drive) => {
            if(keyboard+drive <= b){
                combinedPrice.push(keyboard+drive);
            }
        })
    })
    if(combinedPrice.length === 0){
        return -1;
    }else{
        return Math.max(...combinedPrice);

    }
}
getMoneySpent([3,1],[5,2,8],10);

//Cats and a Mouse
//Calculate distance from mouse to cat
//Make it absolute in case z<y || z<x
//compare

function catAndMouse(x, y, z) {
    const distanceCatA = Math.abs(z-x);
    const distanceCatB = Math.abs(z-y);
    if(distanceCatA === distanceCatB){
        return "Mouse C";
    }else if(distanceCatA < distanceCatB){
        return "Cat A";
    }else{
        return "Cat B";
    }

}
catAndMouse(1,2,3);
catAndMouse(1,3,2);

//Forming a Magic Square
//Failed miserably
//Taken into consideration that the matrix is 3x3. How many possibilities are there? 
//Found list of possibilities online
//Loop through possibilities
//Check for the smallest amount of changes u can make
//Push results into an array
//Check for the smallest difference in the array
function formingMagicSquare(s) {
    const n=s.length;
    let flatArr = [];
    let compare = [];
    let difference = 0;
    const possible = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ];
    s.forEach((arr) => arr.forEach((element) => flatArr.push(element)));
    possible.forEach((arr) => {
        for (let i = 0;i<arr.length;i++){
            if(flatArr[i] !== arr[i]){
                difference += (Math.abs(flatArr[i]-arr[i]));
            }
        }
        compare.push(difference);
        difference = 0;
    })
    return Math.min(...compare);
}
formingMagicSquare([[4,9,2],[3,5,7],[8,1,5]]);

//Picking Numbers
//loop trough array
//if elem-elem2 <= 1 and they're not equal. Count how many times a is in array, and b is in array
//add them up and push for comparison
//check highest number of pair values
//Error for case when a[i] === a[i]
//Added safety net for a[i] === a[j]
//Works!
function pickingNumbers(a) {
    let n=a.length;
    let count = 0;
    let compare = []
    function howMany(arr,value){
        let count = 0
        a.forEach((elem) => (elem === value && count++));
        return count;
    }
    for(let i = 0;i<n;i++){
        for(let j = 0;j < n;j++){
            if(Math.abs(a[i]-a[j]) <= 1 && a[i] !== a[j]){
                compare.push(howMany(a,a[i])+howMany(a,a[j]));
            }else if(Math.abs(a[i]-a[j]) <= 1 && a[i] === a[j]){
                compare.push(howMany(a,a[i]));
            }
        }
    }
    return Math.max(...compare);

}
pickingNumbers([1,2,2,3,1,2]);
pickingNumbers([4,6,5,3,3,1]);
pickingNumbers([4, 2, 3, 4, 4, 9, 98, 98, 3 ,3 ,3 ,4, 2, 98, 1,
     98, 98, 1, 1, 4, 98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9 ,
     2, 9, 4, 2, 2, 9 ,98, 4 ,98 ,1, 3 ,4 ,9 ,1 ,98 ,98 ,4 ,2 ,
     3 ,98 ,98 ,1 ,99 ,9 ,98 ,98 ,3 ,98 ,98, 4 ,98 ,2 ,98 ,4 ,2 ,1 ,1 ,9 ,2 ,4]);

//Climbing the Leaderboard
//Loop through alice's scores
//insert score into array and sort it
//Remove duplicates
//check where gamescore is and return indexof
//This is the first version. Works but takes too much
//Need to Simplify

function climbingLeaderboard(scores, alice) {
    let orderArr = []; 
    let resultsArr= [];
    alice.forEach((gameScore)=>{
        let arrCopy = [...scores];
        let tempArr = [];
        arrCopy.push(gameScore);
        arrCopy.forEach((element)=>{
            let firstIndex = arrCopy.indexOf(element);
            let secondIndex = arrCopy.indexOf(element,(firstIndex + 1));
            if (secondIndex === -1){
                tempArr.push(element);
            }else if(secondIndex !== -1){
                if(!tempArr.includes(element)){
                    tempArr.push(element);
                }
            }
        })

        orderArr.push(tempArr.sort((a,b)=> b-a));
    })
    for(let i=0;i<orderArr.length;i++){
        resultsArr.push(orderArr[i].indexOf(alice[i])+1);
    }
    return resultsArr;    
}
climbingLeaderboard([100,90,90,80,75,60],[50,65,77,90,102])

//How to Improve it? 
//sort the array before the loop
//Simplify Syntax
//use instead of copying the temparr
//check Runtime
//Still 4 cases timeout
//Create funciton to check where insert should happen
//return results of the function into an arr
//Observation: This actually seems longer
//Still 4 cases timed out
//Further research needed
function climbingLeaderboard(scores, alice) {
    let resultsArr= [];
    let tempArr=[];
    scores.forEach((score)=>{
        let firstIndex = scores.indexOf(score);
            let secondIndex = scores.indexOf(score,(firstIndex + 1));
            if (secondIndex === -1){
                tempArr.push(score);
            }else if(secondIndex !== -1){
                if(!tempArr.includes(score)){
                    tempArr.push(score);
                }
        }
    }) 
    tempArr.sort((a,b)=>b-a);
    function getIndexToIns(arr, num) {
        for (let i=0;i<=arr.length;i++){
            if(arr[i] <= num){
                return i;
            } 
        }
        return arr.length;
    }
    alice.forEach((gameScore) => resultsArr.push(getIndexToIns(tempArr,gameScore) +1));
    return resultsArr;    
}
climbingLeaderboard([100,90,90,80,75,60],[50,65,77,90,102])

//Improvement step 3
//Went down from 11 cases to 4. 
//Timeout error
//Wrote a function to extract uniques from Array
//This might Simplify. doesn't look much simpler
//Removed the sort. I don't know why i sorted it in the first place
//Simplified it so it starts from the last known index
//This was the hint in the discussion board
//This worked! Final 4 cases Solved

function climbingLeaderboard(scores, alice) {
    let resultsArr= [];
    function extractUnique(arr){
        return arr.filter((item,pos,array) => {
            return !pos || item !== array[pos-1];
        })
    }
    let tempArr = extractUnique(scores);
    console.log(tempArr);
    let indexToStart = tempArr.length;
    function getIndexToIns(arr, num,indexToStart) {
        for (let i=indexToStart;i>=0;i--){
            if(arr[i] > num){
                return i+1;
            }else if(arr[i] === num){
                return i;
            }
        }
        return 0;
    }
    alice.forEach((gameScore) =>{
        let lastValue = getIndexToIns(tempArr,gameScore,indexToStart);
        resultsArr.push(lastValue + 1);
        indexToStart = lastValue;
    })
    
    return resultsArr;    
}
climbingLeaderboard([100,90,90,80,75,60],[50,65,77,90,102]);
climbingLeaderboard([100,100,50,40,40,20,10],[5,25,50,120]);


//The Hurdle Race
//get maximum heigh of hurdles
//Check if potion is needed
//deduct characther jump ability

function hurdleRace(k, height) {
    const highest = Math.max(...height);
    if(k>highest){
        return 0;
    }else{
        return highest -k;
    }
}
hurdleRace(4,[1,6,3,5,2]);

//Designer PDF Viewer
//Split word into array
//generate alphabet arr
//find index of wordletter into alphabet
//extract values at index of wordletter in height arr
//extract max 
// multiply with word length
//return result

function designerPdfViewer(h, word) {
    let n = word.length;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let compare = word.split('');
    let indexArr = [];
    let wordHeightArr = [];
    compare.forEach((letter)=> {
        alphabet.forEach((alphletter) =>{
            if(letter === alphletter){
                indexArr.push(alphabet.indexOf(alphletter));
            }
        })
    })
    indexArr.forEach((index) => wordHeightArr.push(h[index]));
    return (Math.max(...wordHeightArr) )* n;
}
designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7],'zaba');

//Utopian Tree
//Check Cycle
//If divisible by 2 add 1
//if not multiply by 2
//return result 
function utopianTree(n) {
    let height = 1;
    for(let i=1;i<=n;i++){
        if(i%2 === 0){
            height ++;
        }else{
            height = height * 2;
        }
    }
    return height;
}

//Angry Professor
//Loop through times of arrival
//Save number of students on time
//check if higher than K 
//if yes return no
//if no return yes

function angryProfessor(k, a) {
    let studentsOnTime = 0;
    a.forEach((student) => {
        if(student <= 0){
            studentsOnTime++
        }
    })
    if(studentsOnTime >= k){
        return "NO";
    }else{
        return "YES";
    }

}