var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();


// - emit () : fire the event
// - on () : handle the event / Resgistering the event with subscriber

// emitter.on("removeLi")

emitter.setMaxListeners(30);

emitter.on("removeListener", (eventName, listenerFunc) => {
    console.log(eventName + " detached the " + listenerFunc.name);
})

emitter.on("newListener", (eventName, listenerFunc) => {
    console.log(eventName + " subscribe with " + listenerFunc.name);
})

function handler1(eventName) {
    console.log("Handler Fired with " + eventName);
    emitter.removeListener("foo", handler1);
}
for (var i = 0; i < 20; i++) {
    emitter.on("foo", handler1);
}

emitter.on("bar", handler1);

emitter.on("foo", function () {
    console.log("Foo event fired.");
});

emitter.emit("foo", "Foo Event");
emitter.emit("foo", "Second Foo Event");
// emitter.emit("bar", "Bar Event");


