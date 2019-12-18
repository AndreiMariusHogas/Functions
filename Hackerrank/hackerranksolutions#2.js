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
//loop through remainders and add them
function nonDivisibleSubset(k, s) {
    let newArr = s.map((el) => el%k);
    let combos = [];
    let solutions = []
    function addUpIndivisible(arr) { 
        for (let i = 0; i < arr.length;i++) {
            for (let e = i + 1; e < arr.length; e++) {
            
                combos.push(arr[i] + arr[e]);
                
                
            }   
        }    
    } 
    addUpIndivisible(newArr);
    function modK(arr) {
      
        for(let g= 0; g<arr.length; g++) {
            
           
           if(arr[g] % k == 0){
               
               solutions.push(arr[g]);
               
           } 
             
            
        }        
        
        
    }
    modK(combos);
    console.log(combos);
    console.log(solutions);
}
nonDivisibleSubset(4,[19,10,12,10,24,25,22]);
nonDivisibleSubset(3,[1,7,2,4]);
