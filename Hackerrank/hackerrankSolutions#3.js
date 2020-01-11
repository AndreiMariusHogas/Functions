//Service Lane
//Write function to extract service lane between indices
//function return Math.min of the resulting Array
//Add the result to results array
//return the array
function serviceLane(n, cases) {
    let results = [];
    function extractLane(entry,exit,arr){
        let temp = arr.slice(entry,exit);
        return Math.min(...temp);
    }
    cases.forEach((x) => results.push(extractLane(x[0],x[1],n)));
    return results;
}

serviceLane([2,3,1,2,3,2,3,3],[[0,3],[4,6],[6,7],[3,5],[0,7]]);

///Parameter Missing in Function Declaration
//Will review //Works but the pre defined function is missing the width array
//Solved!

//Lisa's Workbook
//Problem is special if problem number = page number
//k=max problems on a page
//page num = Math.ceil[arr[i]/k]

function workbook(n, k, arr){
    let pages = [];
    let special = 0;
    arr.forEach((x) => {
        let temp = Array.from(Array(x).keys()).map((y)=> ++y);
        let cut=0;
        while(cut < temp.length){
            pages.push(temp.slice(cut,cut+k));
            cut += k;
        }
    })
    pages.forEach((page) => {
        if(page.includes(pages.indexOf(page) + 1)){
            special++;
        }
    })
    return special
}
workbook(5,3,[4,2,6,1,10]);
//Works!