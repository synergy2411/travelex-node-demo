var yargs = require("yargs");

yargs.command({
    command: "add",
    description: "To add new note",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "Title of new note"
        },
        body: {
            type: "string",
            demandOption: true,
            description: "Body of new note"
        }
    },
    handler : function(argv){
        console.log("ARGV : ", argv.title, argv.body);
    }
});
yargs.command({
    command : "remove",
    description :"To remove the note",
    builder : {
        title : {
            type : "string",
            description : "Remove the note",
            demandOption : true
        }
    },
    handler : function(argv){
        console.log("REMOVE ARGS : ", argv.title)
    }
})
yargs.command({
    command : "read",
    description :"To read the note",
    builder : {
        title : {
            type : "string",
            description : "Remove the note",
            demandOption : true
        }
    },
    handler : function(argv){
        console.log("READ ARGS : ", argv.title)
    }
})
yargs.command({
    command : "list",
    description :"To list down all notes",
    handler : function(argv){
        console.log("LIST ALL NOTES.")
    }
})

yargs.parse();


// node app.js add --title="New Title" --body="Title Body"
// node app.js remove --title = "New Title"
// node app.js read --title="New Title"
// node app.js list
// node app.js --help