// module.exports.foo = function () {
//     console.log("Foo Called!");
// }

// module.exports.bar = function () {
//     console.log("Bar Called!");
// }

// module.exports.MAGIC_NUMBER = Math.floor(Math.random() * 100);

var MAGIC_NUMBER = Math.floor(Math.random() * 100);

var privateFunc = function(){
    console.log("Private Function.");
}
var publicFunction = function () {
    privateFunc();
    console.log("Magic Number : ", MAGIC_NUMBER);
}

module.exports = { publicFunction }