//PAlINDROME-FREECODECAMP Javascript Algorithms And Data Structures Certification

function palindrome(str) {
    let newArr = str.split('');
    let ltrArr = [];
    let rtlArr = [];
    for(let i=0;i<newArr.length;i++){
        if(!newArr[i].match(/[_\W]/)){
            ltrArr.push(newArr[i].toLowerCase());
        }
    }
    for(let x=ltrArr.length-1;x>=0;x--){
        rtlArr.push(ltrArr[x]);
    }
    let lefttorightString = ltrArr.join('');
    let righttoleftString = rtlArr.join('');
    console.log(lefttorightString);
    console.log(righttoleftString);
    return lefttorightString === righttoleftString;
  }



  palindrome("0_0 (: /-\ :) 0-0");
  palindrome("_eye");

//CONVERT TO ROMAN NUMERALS -- FREECODECAMP Javascript Algorithms And Data Structures Certification
  function convertToRoman(num) { 
    if(num < 1){ return "";}
    if(num >= 1000){ return "M" + convertToRoman(num-1000);}
    if(num >= 900){ return "CM" + convertToRoman(num-900);}
    if(num >= 500){ return "D" + convertToRoman(num-500);}
    if(num >= 400){ return "CD" + convertToRoman(num-400);}
    if(num >= 100){ return "C" + convertToRoman(num-100);}
    if(num >= 90){ return "XC" + convertToRoman(num-90);}
    if(num >= 50){ return "L" + convertToRoman(num-50);}
    if(num >= 40){ return "XL" + convertToRoman(num - 40);}
    if(num >= 10){ return "X" + convertToRoman(num - 10);}
    if(num >= 9){ return "IX" + convertToRoman(num - 9);}
    if(num >= 5){ return "V" + convertToRoman(num - 5);}
    if(num >= 4){ return "IV" + convertToRoman(num - 4);}
    if(num >= 1){ return "I" + convertToRoman(num - 1);}  
  }
   
  convertToRoman(3999);

//Caesar's Cypher -- FREECODECAMP Javascript Algorithms And Data Structures Certification
function rot13(str) { 
  let arr=str.split("");
  let arr1=[];
  let arr2=[]; 
  for (i=0;i<arr.length;i++){    
   let item=arr[i];
   let ascii=item.charCodeAt();
   if (item.match(/[A-Z]/)) {   
     if(ascii>=65 && ascii <=77 ) {
       ascii += 13;
      }
      else {
        ascii -= 13;
      }
      arr1.push(ascii);
  }
   else {
      arr1.push(item.charCodeAt());
  }
  } 
 for (j=0;j<arr1.length;j++){
   let item2=arr1[j];
   arr2.push(String.fromCharCode(item2));
 }
 let test=arr2.join("");
return test;
}
rot13("SERR PBQR PNZC");

//Telephone Number Validator
//Regex taken from stack overflow/Failed about 100 times before getting it done
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("555-555-5555");


//Cash Register

function checkCashRegister(price, cash, cid) {
  let exchange = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
  ];
  let cashRegister = {status: null, change: []};
  let change = cash - price;
  let sumCid = parseFloat(cid.map(function(x) { return x[1] }).reduce((a, b) => a + b, 0).toFixed(2));
  cid = cid.reverse();
  let currentValue = 0;

  let changeArray = exchange.reduce(function(acc, next, index){
      let currentValueArray = 0;
      if(cid[index][1] === 0){
          acc.push(cid[index]);
          return acc;
      }else{
          if(change >= next.val){
              while(change >= next.val && cid[index][1] >= next.val){
                  change -= next.val;
                  change = Math.round(change * 100) / 100;
                  cid[index][1] = Math.round(cid[index][1] * 100) / 100;
                  cid[index][1] -= next.val;
                  currentValueArray += next.val;
              }
              currentValue = currentValueArray;
              acc.push([next.name, Math.round(currentValueArray * 100) / 100]);
              return acc;
          }else{
              return acc;
          }
      }
  }, []);


  if(change > sumCid || change > 0){
      cashRegister.status = "INSUFFICIENT_FUNDS";
      cashRegister.change = [];
      console.log(cashRegister);
      return cashRegister
  }else if(sumCid - Math.round(currentValue * 100) / 100 === 0){
      cashRegister.status = "CLOSED";
      cashRegister.change = changeArray.reverse();
      console.log(cashRegister);
      return cashRegister
  }else {
      cashRegister.status = "OPEN";
      cashRegister.change = changeArray;
      console.log(cashRegister);
      return cashRegister
  }

}