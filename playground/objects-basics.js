// Literal Method

// var books = ["book1", "book2", "book3"];

// var box = {
//     "width" : 6,
//     height : 8,
//     length  : 10,
//     books : books,
//     "# of books" : 3
// };

// box.books.push("book4");
// console.log(box.books.length);      // 4 , 3 , 4
// console.log(books.length);          // 4 , 4 , 3

// box.volume = box.width * box.height * box.length;

// console.log(box["# of books"]);

// console.log(delete box.xyz);
// console.log(box);


// var user = {
//     firstName  : "Foo"
// }

// var person  = user;

// person.firstName = "Bar";

// console.log(user.firstName);          //"Foo", "Bar"
// console.log(person.firstName);        //"Bar", "Bar"


// Constructor Method
// function Person(firstName, lastName, age) {
//     // var this = {};
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     // this.sayHello = function(){
//     //     return "Hello " + this.lastName +", " + this.firstName;
//     // }
//     // return this;
// }

// Person.prototype.sayHello = function () {
//     return "Hi, " + this.firstName + " " + this.lastName + "!";
// }

// var foo = new Person("Foo", "Bar", 32);
// var bam = new Person("Bam", "Bas", 33);

// console.log(foo.sayHello());
// console.log(bam.sayHello());



// - Instance Method

// var Shoe = {
//     size : 8,
//     gender : "Women"
// }

// var magicShoe = Object.create(Shoe);            // __proto__

// console.log(magicShoe.hasOwnProperty("size"));      //
// console.log(Shoe.hasOwnProperty("size"));      //


// console.log(Shoe.isPrototypeOf(magicShoe));
// console.log(magicShoe.isPrototypeOf(Shoe));
// console.log(Object.prototype.isPrototypeOf(Shoe));
// console.log(Object.prototype.isPrototypeOf(magicShoe));     //?

// console.log(magicShoe.gender);
// magicShoe.size = 10;
// console.log("Magic Shoe", magicShoe);     // {size : 10}
// console.log("Shoe", Shoe);     // {size : 8, gender : "Women"}



