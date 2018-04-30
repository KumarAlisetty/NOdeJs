const fs = require('fs');

var fetchNotes = ()=>{
  try {
        return JSON.parse(fs.readFileSync("notes.json"));
  } catch (e) {
        return [];
  }
}


var saveNotes = (notes)=>{
    fs.writeFileSync("notes.json",JSON.stringify(notes));
};

var addNote=(title,body)=>{
  var note={title, body};
  var allNotes=fetchNotes();

  var duplicateNotes = allNotes.filter((note1)=>note1.title==title);

  if (duplicateNotes.length >0) {
    console.log("This notes was already added");
  }else {
    allNotes.push(note);
    saveNotes(allNotes);
    return note;

  }
}

var listNotes =()=>{
  return fetchNotes();

}

var readNote = (title)=>{

  allNotes = fetchNotes();
  filteredNotes = allNotes.filter((note)=>note.title==title);
  if(filteredNotes.length>0){
    return filteredNotes[0];
  }else {
    console.log("Title not found");
  }

}

var removeNote =(title)=>{
    allNotes = fetchNotes();

    filteredNotes = allNotes.filter((note)=>note.title!=title);

    if(allNotes.length == filteredNotes.length)
    {
      console.log("\nNote not found");
    }else {
      saveNotes(filteredNotes);
      return title;
    }

}

module.exports ={
  addNote,
  listNotes,
  readNote,
  removeNote
}
