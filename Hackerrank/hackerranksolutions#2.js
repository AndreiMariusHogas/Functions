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
//check if number of rotations is bigger than array length
//if yes rot-arr.length
//loop through array. 
//add rot to index 
//return index

function rotLeft(a, d) {
    let n=a.length;
    let rotations = d;
    let result= [];
    if(d>n){
        rotations = d-n;
    }
    for (let i=0;i<n;i++){
        if(i+d>=n){
            result.push(a[Math.abs(n-(i+d))]);
        }else{
            result.push(a[i+d]);
        }
    }
    return result;
}

rotLeft([1,2,3,4,5],2);


//New Year Chaos
//Loop through 
//check if number is bigger than index+1
//if yes check number of bribes to original place
//if number of bribes > 2
//too chaotic
//else add to bribes
//Timeout on 4 cases
function minimumBribes(q) {
    let n=q.length;
    let bribes = 0;
    let firstSwap = 0;
    for(let i=0;i<n;i++){
        if(q[i]>i+1){
            firstSwap = q[i];
            break;
        }
    }
    let swappedArr = q.filter((elem) => elem >= firstSwap);
    function extractIndex(num) {
        return q.indexOf(num);
    }
    let isChaotic = swappedArr.filter((element) => element-(extractIndex(element)+1) > 2);
    let m = isChaotic.length;
    if(m>0){
        console.log('Too chaotic');
    }else{
        swappedArr.forEach((element) => {
            let temp = q.slice(extractIndex(element),n);
            let diff = temp.filter((val) => val < element);
            bribes += diff.length;
        })
        return bribes;
    }
    
}
minimumBribes([2,1,5,3,4]);
minimumBribes([2,5,1,3,4]);
minimumBribes([1,2,5,3,7,8,6,4]);
//Timeout on 4 cases
//Need to simplify
function minimumBribes(q) {
    const n=q.length;
    let bribes = 0;
    for(let i=0;i<n;i++){
        const pos =q[i]
        let initVal = i+1;
        if(pos - initVal > 2){
            console.log('Too chaotic');
            return;
        }
        for(let j=pos-2;j<i;j++){
            if(pos < q[j]){
                bribes++;
            }
        }
    }
    console.log(bribes);
    return;
}

minimumBribes([2,1,5,3,4]);
minimumBribes([2,5,1,3,4]);
minimumBribes([1,2,5,3,7,8,6,4]);

///Minimum Swaps 2
//check for element value. If element value != index+1
//element value = index + 1, swap to index of index+1;

function minimumSwaps(arr) {
    let n=arr.length;
    let swaps =0;
    for(let i=n-1;i>=0;i--){
        for(let j=i-1;j>=0;j--){
            if(arr[i]<arr[j]){
                arr[j] = arr[i];
                swaps++
            }
        }
    }
    return swaps;
}


//Timeout Error on 3 cases;
//Need to research
function minimumSwaps(arr) {
    let n=arr.length;
    let temp = [];
    let seen = [];
    let swaps = 0;
    for(let i=0;i<n;i++){
        temp[i]=[];
        temp[i].value = arr[i];
        temp[i].key = i;
        seen[i]=false;
    }
    temp.sort((a,b)=>a.value-b.value);
    for(let i=0;i<n;i++){
        if(temp[i].key === i || seen[i]){
            continue;
        }
        let cycle = 0;
        let j=i;
        while(!seen[j]){
            seen[j]= true;
            j=temp[j].key;
            cycle++;
        }
        if(cycle>0){
            swaps+= (cycle>1)?cycle-1:cycle;
        }
    }
    return swaps;
    
}
minimumSwaps([1,3,5,2,4,6,7]);
minimumSwaps([4,3,1,2]);
minimumSwaps([2,3,4,1,5]);

//Array Manipulation
//Check indexes
//save most common index
//perform operations on most common index
//return the result
function arrayManipulation(n, queries) {
    let arr=[];
    let operations = [];
    let maxSum=0;
    function extractIndex([a,b,k]){
        for(let i=a;i<=b;i++){
            arr.push(i);
            operations.push([i,k]);
        }
    }
    function howMany(array,value){
        let count = 0
        array.forEach((element) => (element === value && count++));
        return count;
    }
    queries.forEach((query) => extractIndex(query));
    let occurences = 0;
    let operationsIndex = 0;
    arr.forEach((element) => {
        if(howMany(arr,element) > occurences){
            occurences = howMany(arr,element);
            operationsIndex = element;
        }
    } );
    function addOperations([num,value]){
        maxSum+=value;
    }
    operations.forEach((pair)=> pair[0] === operationsIndex ? addOperations(pair):0);
    return maxSum;
    
}

arrayManipulation(5,[[1,2,100],[2,5,100],[3,4,100]]);
arrayManipulation(4,[[2,3,603],[1,1,286],[4,4,882]]);
//Works but limited due to k > sum of most often index
//Rework 

function arrayManipulation(n, queries) {
    let arr=  Array.apply(null,{length:n}).map((elem) => elem = 0);
    function performOperations([a,b,k]){
        for(let i=a-1;i<=b-1;i++){
            arr[i] +=k;
        }
    }
    queries.forEach((query) => performOperations(query));
    return Math.max(...arr);
    
}
arrayManipulation(5,[[1,2,100],[2,5,100],[3,4,100]]);
arrayManipulation(4,[[2,3,603],[1,1,286],[4,4,882]]);
//7 Runtime Error Cases

function arrayManipulation(n,queries){
    let arr = new Array(n).fill(0);
    let sumPairs = [];
    let maxSum = 0;
    let sum = 0;
    function performOperations([a,b,k]){
        sumPairs.push([a,k]);
        sumPairs.push([b,-k]);
    }
    function addUp([element,accumulator]){
        sum += accumulator;
        if(sum>maxSum){
            maxSum = sum;
        }
    }
    queries.forEach(query => performOperations(query));
    sumPairs.sort(([a,b],[c,d]) => a-c === 0 ? d-b: a-c);
    sumPairs.forEach(pair => addUp(pair));

    return maxSum;
    
}
arrayManipulation(5,[[1,2,100],[2,5,100],[3,4,100]]);
arrayManipulation(4,[[2,3,603],[1,1,286],[4,4,882]]);
arrayManipulation(10,[[1,5,3],[4,8,7],[6,9,1]]);
arrayManipulation(10,[[2,6,8],[3,5,7],[1,8,1],[5,9,15]]);

///Hash Tables: Ransom Note
//split ransom note into words
//check if magazine includes ransom words
//return yes if magazine includes all the words
//error. check if word repeats
//timeout error
function checkMagazine(magazine, note) {
    function howMany(arr,value){
        let count = 0
        arr.forEach((element) => (element === value && count++));
        return count;
    }
    for(let i=0;i<note.length;i++){
        if(howMany(magazine,note[i]) !== howMany(note,note[i]) && howMany(magazine,note[i]) < howMany(note,note[i])){
            console.log('No');
            return;
        }
    }
    return "Yes";
}


checkMagazine(['two','times','three','is','not','four'],['two','times','two','is','four']);

function checkMagazine(magazine, note) {
    let noteStr = note.join(' ');
    function howMany(arr,value){
        let count = 0
        arr.forEach((element) => (element === value && count++));
        return count;
    }
    let newMag = magazine.filter((words) => noteStr.includes(words));
    let uniqueNote = [...new Set(note)];
    for(let i=0;i<uniqueNote.length;i++){
        if(howMany(note,uniqueNote[i]) !== howMany(newMag,uniqueNote[i]) && howMany(note,uniqueNote[i]) > howMany(newMag,uniqueNote[i])){
            console.log('No');
            return;
        }
    }
    console.log("Yes");
    return;
}


checkMagazine(['two','times','three','is','not','four'],['two','times','two','is','four']);
//Simplify Loop
function checkMagazine(magazine, note) {
    let l1 = note.length;
    let l2 = magazine.length;
    let count = 0;
    magazine.sort();
    note.sort();
    for(let i=0;i<l1;i++){
        for(let j=i;j<l2;j++){
            if(note[i] === magazine[j]){
                count++;
                i++;
            }
        }
    }
    if(count == l1){
        console.log('Yes');
        return;
    }else{
        console.log('No');
        return;
    }
}

checkMagazine(['two','times','three','is','not','four'],['two','times','two','is','four']);
//Solved


//Two Strings
//Split first string into letters
//loop through letters
//check if s2. includes letters
//return YES if condition checks
//return No after loop ends
function twoStrings(s1, s2) {
    let sentence1 = s1.split('');
    for(let i=0;i<sentence1.length;i++){
        if(s2.includes(sentence1[i])){
            console.log('YES');
            return
        }
    }
    console.log('NO');
    return;
}


//Strings Making Anagrams
//split strings into array
//filter common values
//check the lowest repeat times for each unique element
//add the lowest repeat to anagram length
//deduct anagram length from length of both strings

function makeAnagram(a, b) {
    let stringA = a.split('');
    let stringB = b.split('');
    let versionA = (stringA.filter((x) => stringB.includes(x)).sort());
    let versionB = (stringB.filter((x) => stringA.includes(x)).sort());
    function checkAnagram(a,b){
        if(a.length<b.length){
            return a
        }else{
            return b
        }
    }
    function howMany(arr,value){
        let count = 0
        arr.forEach((element) => (element === value && count++));
        return count;
    }
    let toCheck = [...new Set(versionA)];
    let anagram = 0;
    for(let i=0;i<toCheck.length;i++){
        if(howMany(versionA,toCheck[i])<howMany(versionB,toCheck[i])){
            anagram += howMany(versionA,toCheck[i]);
        }else{
            anagram += howMany(versionB,toCheck[i]);
        }
    }
    let result = (stringA.length-anagram)+(stringB.length-anagram);
    return result;
    
}

makeAnagram('bugexikjevtubidpulaelsbcqlupwetzyzdvjphn','lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk')
makeAnagram('fsqoiaidfaukvngpsugszsnseskicpejjvytviya','ksmfgsxamduovigbasjchnoskolfwjhgetnmnkmcphqmpwnrrwtymjtwxget')


//Alternating Charachters
//Split string
//Loop through and check if next char = current char
//if yes index = nextchar 
//removal++
//Error
//if sets[i] !== sets[j] add 1 to i and stop the continuation of the loop
function alternatingCharacters(s) {
    let removals = 0;
    let sets = s.split('');
    for(let i=0;i<sets.length;i++){
        for (let j=i+1;j<sets.length;j++){
            if(sets[i] === sets[j]){
                removals++;
                i=j
            }else if(sets[i]!==sets[j]){
                i++
            }
        }
    }
    return removals
}

alternatingCharacters('ABABABAB')

//Sherlock and the valid String

