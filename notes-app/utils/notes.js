var fs = require("fs");
var chalk = require("chalk");

var loadNotes = () => {
    try {
        var notesBuffer = fs.readFileSync("./notes.json");
        var notesString = notesBuffer.toString();
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

var saveNotes = notes => {
    fs.writeFileSync("./notes.json", JSON.stringify(notes));
    console.log(chalk.green("Notes Updated."))
}

var add = function (title, body) {
    var notes = loadNotes();
    var duplicateNode = notes.filter(note => note.title === title);
    if (duplicateNode.length === 0) {
        var note = { title, body };
        notes.push(note);
        saveNotes(notes);
    }else{
        console.log(chalk.red("Duplicate Title, Try again!"));
    }

}

var list = () =>{
    return loadNotes();
} 

var remove = title =>{
    var notes = loadNotes();
    var updateNotes = notes.filter(note => note.title !== title);
    saveNotes(updateNotes);
}

var read = title => {
    var notes = loadNotes();
    var notesArray = notes.filter(note => note.title === title);
    console.log(chalk.inverse.green("Note Found"));
    console.log("_____________________________");
    console.log("Title : " + notesArray[0].title);
    console.log("Body : " + notesArray[0].body);
}


module.exports = { add, read, remove, list };