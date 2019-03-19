var chalk = require("chalk");
var yargs = require("yargs");

console.log(chalk.inverse.green("Hello NodeJS!"));

console.log("ARGS : ", process.argv);
console.log("YARGS :", yargs.argv);