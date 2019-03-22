var mongodb = require("mongodb");
var client = mongodb.MongoClient;
var _db;

client.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true },
    (error, mongo) => {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log("Mongo Connected!");
        _db = mongo.db("db_travelex");
    })

var createDocument = (doc, cb) => {
    // var doc = { username: "test", "password": "test123" };
    // _db.collection("users").insertMany([doc, {
    //     "username": "hello",
    //     "password": "goodbye"
    // }], (error, status) => {
    //     if (error) console.log(error);
    //     console.log("Result : ", status.ops);
    // })
    _db.collection("users").insertOne(doc, (error, status) => {
        if (error) cb(error);
        console.log("Assigned Object ID : ", status.insertedId);
        if (status.ops.length) {
            cb(null, status.ops[0]);
        }
    })
}

var readDocument = (key, cb) => {
    //Return collection
    // _db.collection("users").find(key).toArray((error, docs) => {
    //     if (error) console.log(error);
    //     console.log(docs);
    // })
    // Return One Document
    _db.collection("users").findOne(key, (error, docs) => {
        if (error) cb(error);
        if (docs) {
            console.log(docs);
            cb(null, docs)
        }else{
            cb("Unable to find the record.");
        }

    })
}

var deleteDocument = (key, cb) => {
    _db.collection("users").deleteOne(key, (error, status) => {
        if (error) cb(error);
        if(status.result.n > 0){
            cb(null, status.)
        }
        console.log("Result : ", status.result.n);
    })
}

var updateDocument = () => {
    _db.collection("users").updateOne({ "username": "hello" },
        { $set: { "password": "bye-bye" } }, (error, result) => {
            if (error) console.log(error);
            if (result.modifiedCount) {
                console.log("Updated successfully");
            } else {
                console.log("Unable to update.")
            }

        })
}

module.exports = { createDocument, readDocument, updateDocument, deleteDocument };