//Library Fine
//Check if year returned > year due (if yes return 10000)
//check if month > month due (if yes return month-month due * 500)
//check if day > day due (if yes return day-daydue* 15)
//Test cases where y1<y2 && m1<m2

function libraryFine(d1, m1, y1, d2, m2, y2) {
    let fine =0;
    if(y1>y2){
        return fine = (y1-y2)*10000;
    }else if(y2>y1){
        return fine;
    }else{
        if(m1>m2){
            return fine = (m1-m2)*500;
        }else if(m1 < m2){
            return fine;
        }else{
            if(d1>d2){
                return fine = (d1-d2)*15;
            }else{
                return fine;
            }
        }
    }

}

libraryFine(9,6,2015,6,6,2015);
libraryFine(2,7,1014,1,1,1015);

//Cut the sticks
//Check if there's sticks in the array
//if there's sticks extract min value
//map array with elem-min stick value
//filter out the 0
//add arr length to results

function cutTheSticks(arr) {
    let tempArr = [...arr];
    let n=tempArr.length;
    let result = [];
    while(n>0){
        let reducer = Math.min(...tempArr);
        tempArr = tempArr.map((element) => element - reducer);
        tempArr = tempArr.filter((element)=> element !== 0);
        result.push(n)
        n = tempArr.length;
    }
    return result;

}
cutTheSticks([1,2,3,4,3,3,2,1]);

//Non-divisible Subset
//Map remainders of el/k
//loop through remainders and check if 0 value is present
//if yes add 1 to count because there can only be 1 element with remainder 0 in the non div subset
//loop from 1 to k
//save elements value if k = 4 elem1=1 elem2=3/ elem1 =2 elem2 =2
//loop through remainders 
//check if remainder = value 1 or value 2 //add 1 to count for each value found
//add value of new count to the count depending on which value is more present
//return count
function nonDivisibleSubset(k, s) {
    if(k===1){
        return 1;
    }
    let count = 0;
    let hasDiv = false;
    let rem = s.map((element) => element%k)
    rem.forEach((value)=> {
        if(value === 0){
            hasDiv = true;
        }
    })
    if(hasDiv){
        count++;
    }
    for(let i=1;i<=k;i++){
        const elem1 = i;
        const elem2 = k-i;
        let num1C=0;
        let num2C=0;
        if(elem1>elem2){
            break;
        }
        for(let j=0;j<rem.length;j++){
            if(elem1 === rem[j]){
                num1C++;
            }
            if(elem2 === rem[j]){
                num2C++;
            }
        }
        if(num1C>0&&elem1===elem2){
            count ++;
            break;
        }else{
            if(num1C>num2C){
                count+=num1C;
            }else{
                count+=num2C;
            }
        }
    }
    return count;
    
}
nonDivisibleSubset(4,[19,10,12,10,24,25,22]);
nonDivisibleSubset(3,[1,7,2,4]);
nonDivisibleSubset(7,[278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436])

//Repeated String
//check for n/string.length
//check for remainder of n%string.length
//check how many times it repeats in string
//multiply by n/string length
//check how many times it repeats from 0 to remainder of n%string.length
//add to result
//return result
//Error on case n<s.length
//Slice arr from 0 to n if n< slength
//Solved!
function repeatedString(s, n) {
    function howMany(arr,value){
        let count = 0
        arr.forEach((element) => (element === value && count++));
        return count;
    }
    let stringArr = s.split('');
    let sLength = s.length;
    if(n<=sLength){
        return howMany(stringArr.slice(0,n),'a');
    }else{
        let multiplier = Math.floor(n/sLength);
        let remainder = n%sLength;
        return (howMany(stringArr,'a')*multiplier)+howMany(stringArr.slice(0,remainder),'a');
    }

}
repeatedString('aba',3)
repeatedString('a',100000);

//Jumping on the Clouds
//loop through clouds
//check index of "1" and store it in index array
//store if speed was changed - initial set to false
//if step<2 changePace = true add 1
//if ChangePace add 1 and set it back to false
//return numbers of jumps + toAdd/2(because you add 1 every time you change pace(2 cases)so 1x2=2)


function jumpingOnClouds(c) {
    let indexToDodge = [];
    let jumps = Math.floor(c.length/2);
    let changePace = false;
    let toAdd = 0;
    for(let i=0;i<c.length;i++){
        if(c[i] === 1){
            indexToDodge.push(i);
        }
    }
    indexToDodge.forEach((index)=>{
        if(!changePace && index%2 === 0){
            toAdd++;
            changePace = true;
        }else if(changePace && index%2 === 1){
            toAdd++;
            changePace = false;
        }
    })
    
    return jumps+Math.floor(toAdd/2);
}
jumpingOnClouds([0,0,0,1,0,0]);
jumpingOnClouds([0,0,1,0,0,1,0]);
jumpingOnClouds([0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,
     1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0 ,0]);
jumpingOnClouds([0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0,
     0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0,
      1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0])


//Equalize The Array
//check howMany of each element is in the array
//store maxvalue
//arr.length -maxvalue = equalized
//Worked first try
function equalizeArray(arr) {
    function howMany(arr,value){
        let count = 0
        arr.forEach((element) => (element === value && count++));
        return count;
    }
    let maxValue=0;
    arr.forEach((element)=>{
        if(howMany(arr,element)>=maxValue){
            maxValue = howMany(arr,element);
        }
    })
    return arr.length-maxValue;
}

//ACM ICPC Team
//Loop Through Topics 
//Save known subj for each participant
//check for maximum subj 
//remove duplicates from pairs arr
//check max length of subjects
//check max length of subjects knows
//return length of maxknownsubj
//return pairs.length = maxknownsubj.length
//Perfect
function acmTeam(topic) {
    let topicPos = [];
    let pairs = [];
    let finalPairs = [];
    let maxSubj = [];
    let maxKnownSubj = 0;
    let finalPairsKnownSubj = [];
    let howManyPairs = 0;
    let result = [];
    for (let i=0;i<topic[0].length;i++){
        maxSubj.push(i)
    }
    topic.forEach((num) =>{
        let independentTopic = num.split('');
        let knownSubj = [];
        console.log(independentTopic);
        for(let i=0;i<independentTopic.length;i++){
            if(Number(independentTopic[i]) === 1){
                knownSubj.push(i);
            }
        }
        topicPos.push(knownSubj);
    })
    for(let i=0;i<topicPos.length;i++){
        for(let j=i+1;j<topicPos.length;j++){
            pairs.push(topicPos[i].concat(topicPos[j]).sort((a,b)=>a-b));
        }
    }
    for(let i=0;i<pairs.length;i++){
        finalPairs.push([...new Set(pairs[i])]);
    }

    for(let i=0;i<finalPairs.length;i++){
        finalPairsKnownSubj.push(finalPairs[i].length);
        if(finalPairs[i].length>maxKnownSubj){
            maxKnownSubj = finalPairs[i].length;
        }
    }
    finalPairsKnownSubj.forEach((pair)=> {
        if(pair === maxKnownSubj){
            howManyPairs++;
        }
    })
    result.push(maxKnownSubj);
    result.push(howManyPairs);
    return result;
}


acmTeam(['10101','11100','11010','00101'])

//Simplified to pass timeout errors

function acmTeam(topic) {
    let people = [];
    let peopleKnownSubj = [];
    let pairs = [];
    let result = [];
    topic.forEach((subj) => people.push(subj.split('')));
    people.forEach((person) => {
        let knownSubj = [];
        for(let i=0;i<person.length;i++){
            if(person[i] === '1'){
                knownSubj.push(i);
            }
        }
        peopleKnownSubj.push(knownSubj);
    })
    for(let i=0;i<peopleKnownSubj.length;i++){
        for(let j=i+1;j<peopleKnownSubj.length;j++){
            pairs.push([...new Set(peopleKnownSubj[i].concat(peopleKnownSubj[j]))])
        }
    }
    let maxKnown = pairs.reduce((max,pair) => max>pair.length? max:pair.length,0); 
    let howMany = pairs.filter((pair) => pair.length === maxKnown);
    result.push(maxKnown,howMany.length);
    return result;
}
acmTeam(['10101','11100','11010','00101'])


//2D Array - DS
-9-9-9 1 1 1
 0-9 0 4 3 2
-9-9-9 1 2 3
 0 0 8 6 6 0
 0 0 0-2 0 0
 0 0 1 2 4 0 

//Solution start from middle  start at index 1 row 1 col  sum = arr[i]
//Drew Array on a piece of paper
//realized that if you calculate indexes from the center square you can actually calculate the sum of the hourglass by adding every element around the index 
//remember to not add the side elements arr[i][i-1] and arr[i][i+1];
 function hourglassSum(arr) {
    let sumsArr = [];
    let n=arr.length;
    let sum = 0
    for (let i=1;i<n-1;i++){
        for(let j=1;j<n-1;j++){
            sum = arr[i][j]+arr[i-1][j-1]+arr[i-1][j]+arr[i-1][j+1]+arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1];
            sumsArr.push(sum);
            sum = 0;
        }
        
    }
    return Math.max(...sumsArr);
}

hourglassSum([[-9,-9,-9,1,1,1],[0,-9,0,4,3,2],[-9,-9,-9,1,2,3],[0,0,8,6,6,0],[0,0,0,-2,0,0],[0,0,1,2,4,0]]);


//Arrays: Left Rotation