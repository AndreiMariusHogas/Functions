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
        for(let j=0<x;j++){
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
        arr.forEach((element) => (element === value && count ++));
        return times;
    }

}

getTotalX([2,6],[24,36]);
getTotalX([2,4],[16,32,96]);