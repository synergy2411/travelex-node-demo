// var user = {
//     firstName: "XYZ"
// }

// var foo = {};

// foo.__proto__ = user;

// console.log(foo.firstName);


// var str = "Some String";
var str = new String("Some String");
var str1 = "Welcome to JavaScript!";
var str2 = new String("JavaScript is not strange!");

String.prototype.countAll = function (letter) {
    var counter = 0;

    for (var i = 0; i < this.length; i++) {
        if(this.charAt(i).toUpperCase() === letter.toUpperCase()){
            counter++;
        }
    }

    return counter;
}

console.log(str.countAll('e'));
console.log(str1.countAll('a'));
console.log(str2.countAll('s'));

// console.log(str.length);
// console.log(str.valueOf());


// Object (constructor, valueOf(), hasOwnProperty(), isPrototypeOf(), toString())
//     -> String (length, charAt, indexOf, subStr etc)
            // -> str
//     -> Number (toFixed, Number())
//     -> Date (setDate, getDate, setMonth, getMonth)
//     -> Array(push, pop, shift, reduce, filter)
//     -> Function(call, apply, bind)
//     -> Person(firstName, lastName, age, sayHello())
        // -> foo 

