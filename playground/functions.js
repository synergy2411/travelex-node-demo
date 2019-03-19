//function expression
// var addition = function (num1 , num2){
//     return num1 + num2;
// }

// console.log(add(3,5));
// console.log(addition(2,4));      // ?

//Function can be nested
// function hoisting

// function mysetry(){
//     var chooseNumber = function (){
//         return 12;
//     } 
//     return chooseNumber();
//     var chooseNumber = function (){
//         return 7;
//     } 
// }

// console.log(mysetry());


// function assignment to an Array

// var arr = [function(){
//     console.log("Hi, This is Array function.");
// }, 
// function(){
//     console.log("Second function.")
// }];

// arr[0]();

// function assignment to an object property
// - 'this' lost its reference in nested functions.
// - in nested function, 'this' refers to global context.

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         var that = this;
//         function nestedFunc(){
//             // console.log(this);          //?
//             return that.firstName + " " + that.lastName;
//         }
//         return nestedFunc();
//     }
// }

// console.log(user.getFullName());

// Immediately Invoked Function Execution (IIFE)
// - create its own scope
// - shorter syntax

// var x =100;

// (function(){
//     var x =201;
//     console.log("IIFE Called!", x); //?
// })();

// functions create Scopes

// var myVar = 100;

// function b(){
//     console.log(myVar);         // ?
// }

// function a(){
//     var myVar = 200;
//     b();
// }

// a();


// HOF / Callbacks - functions as a parameter

// setTimeout(function(){
//     console.log("3 seconds left!");
// }, 3000);


//JS Thread (T1) engaged in processing
var start = Date.now();

function delayTimeout(cb, ms) {
    while ((Date.now() - start) < ms) { }
    cb();
}

delayTimeout(function () {
    console.log("Custom timer...");
}, 3000);


console.log("Program ends!");