// console.log("Starting....");
//
// setTimeout(()=>{
//   console.log("Inside callback");
// },2000);
//
//
// setTimeout(()=>{
//   console.log("Inside 0 callback");
// },0);
//
// console.log("ending......");



// var getUser = (id,callback)=>{
//   var user={
//     id:1,
//     name:"MyName"
//   }
//
//   callback(user)
//
// }
//
// getUser(1,(user)=>{console.log(`${user.id} - ${user.name}`);});


const request = require('request');

request('https://maps.googleapis.com/maps/api/geocode/json?address=560066&key=AIzaSyCQcwblSHAwk50L7pRBPpkTLZxqCiqvCz8', function (error, response, body) {
 var body = JSON.parse(body);
  console.log(body.results[0].geometry.location);
});
