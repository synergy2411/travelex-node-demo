// var EventEmitter = require("events").EventEmitter;
// var emitter = new EventEmitter();


// // - emit () : fire the event
// // - on () : handle the event / Resgistering the event with subscriber

// // emitter.on("removeLi")

// //increasing the limit for attaching listerners for one event (default : 10)
// emitter.setMaxListeners(30);

// emitter.on("removeListener", (eventName, listenerFunc) => {
//     console.log(eventName + " detached the " + listenerFunc.name);
// })

// emitter.on("newListener", (eventName, listenerFunc) => {
//     console.log(eventName + " subscribe with " + listenerFunc.name);
// })

// function handler1(msg, eventName) {
//     console.log("Handler Fired with " + msg);
//     emitter.removeListener("foo", handler1);
// }
// //synergy2411@outlook.com
// for (var i = 0; i < 20; i++) {
//     emitter.on("foo", handler1);
// }

// emitter.on("bar", handler1);

// emitter.on("foo", function () {
//     console.log("Foo event fired.");
// });

// emitter.emit("foo", "Message","Foo");
// emitter.emit("foo", "Second Foo Event");
// // emitter.emit("bar", "Bar Event");


// process.on("exit", code =>{
//     console.log("Process exited with code " + code);
// })

// process.on("SIGINT", () => {
//     console.log("SIGINT ....")
// })
// setTimeout(()=>{
//     process.exit(1);
// }, 3000);

// var fs = require("fs");

// fs.createReadStream("./eventloop.js").pipe(process.stdout);

// process.stdin.on("readable", ()=>{
//     var buf = process.stdin.read();
//     if(buf!=null){
//         // process.stdout.write(buf);
//         console.log(buf);
//     }else{
//         console.log("Read completed.");
//     }
// })


// var EventEmitter = require("events").EventEmitter;
// var Stream = require("stream").Stream;
// var Readable = require("stream").Readable;
// var Writable = require("stream").Writable;
// var Transform = require("stream").Transform;
// var Duplex = require("stream").Duplex;

// console.log(new Stream() instanceof EventEmitter);
// console.log(new Readable() instanceof Stream);
// console.log(new Writable() instanceof Stream);
// console.log(new Transform() instanceof Stream);
// console.log(new Duplex() instanceof Stream);
