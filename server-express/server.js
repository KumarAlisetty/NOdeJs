const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine','hbs');

console.log(__dirname);
app.use(express.static(__dirname+'/public'));

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear',()=> new Date().getFullYear()
)


app.use((req,res,next)=>{
  //res.render('maintenance.hbs');
  next();
});
app.get("/", (req,res)=>{
  //res.send("<h1>This is my server</h1>");

  //res.send({name:'Kumar',lkes:['touring','restaurant']});

  res.render('home.hbs',{
    myName:'Kumar'
  })
});

app.get("/about",(req,res)=>{
  res.render('about.hbs',{
    myname:'Kumar',
    year:'2018'
  });
});


app.get("/bad",(req,res)=>{
  res.send({errorMessage:"This is error message"});

});


app.listen(3000,()=>{
  console.log("Server started running on 3000");
});
