"use strict"        

//syntax - funcation /funcation name /parmeters /curly braces for the body

//funcation declaration

function mySum (){
     let x = 2 + 2
 console.log(x);
}

//mySum ();
// funcation expression

const myFunc = function (){
let x = 3 * 3;
console.log (x);
};
myFunc();

//myFunc();

function bestSum(param1, parma2){
 let x = param1 + parma2;
 console.log(x);
}   

bestSum(10,10);
bestSum(10, 10);
bestSum("Hi", "You won a free sundae!");

function theReturningSum (num1, num2, num3){
    let sum= num1 + num2;
    let sumDivided =sum/num3;
    return sumDivided;
}

console.log (theReturningSum(30, 30, 3))
