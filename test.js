// var obj={name:"myname"};
//
// console.log(typeof obj);
// console.log(obj);
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


//
// var stringObj ='{"name":"My Name", "age":25}';
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var obj = JSON.parse(stringObj);
// console.log(typeof obj);
// console.log(obj.name);
//

var square = x=>{ return x*x}

console.log(square(9));

//Below is working
// const fs = require('fs');
//
// var note={title:'secret1', body:'This is my secret'};
// var allNotes=[];
//
// try {
//       allNotes=JSON.parse(fs.readFileSync("notes.json"));
// } catch (e) {
//
// }
//
//
// var duplicateNotes = allNotes.filter((note1)=>note1.title==note.title);
//
// if (duplicateNotes.length >0) {
//   console.log("This notes was already added");
// }else {
//   allNotes.push(note);
//   fs.writeFileSync("notes.json",JSON.stringify(allNotes));
//
// }
