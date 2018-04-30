const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const note = require('./notes');

const titleOptions= {
       describe:'Title of the note',
       demand:true,
       alias:'t'
};

const bodyOptions={
  describe:'Body of the note',
  demand:true,
  alias:'b'
};
const argv = yargs.command('add','Add a note',{
  title:titleOptions,
  body:bodyOptions
}).command('remove','for removing a note',{
   title:titleOptions
}).command('list','for listing all notes',{}).
command('read','for reading a note',{
  title:titleOptions
}).help().alias('add','a').argv;


var command = argv._[0];


if (command=="add") {
  var noteAdded = note.addNote(argv.title,argv.body);
  if (noteAdded) {
    console.log("\nBelow noteshas been Added");
    console.log("*******");
    console.log(`${noteAdded.title} - ${noteAdded.body}`);
  } else {
     console.log("Not able to add note");
  }
} else if (command=="list") {

  allNotes=note.listNotes();
  console.log(`\nPrinting ${allNotes.length} note(s)`);
  allNotes.forEach((note)=> console.log(`\n ${note.title} - ${note.body}`));


} else if (command=="read") {
  var readNote= note.readNote(argv.title);
  if(readNote){
     debugger;
    console.log("\nBelow is the requested data of the title");
    console.log("******************");
    console.log(`${readNote.title} - ${readNote.body}`);
  }else {
    console.log("\nNot able search title");
  }
} else if(command=="remove") {
  var removeNote=note.removeNote(argv.title);

  if(removeNote){
    console.log("\nBelow Note has been removed");
    console.log("*********");
    console.log(argv.title);
  }else{
    console.log("\nNote has not been deleted");
  }
} else {
  console.log("Command not recognized");
}
