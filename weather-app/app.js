
const yargs = require('yargs');

const appHttp = require('./http.js');

const argv = yargs.options( {
  p:{
  demand:true,
  alias:'pincode',
  describe:'Provide pincode to fetch address',
  string:true
}
}).help().argv;



if(argv.p ){

  appHttp.getLocation(argv.p).then((results)=>{
    console.log(`Adress : ${results.address}`);
    //return new Promise((resolve,reject)=>{resolve(appHttp.getTemparature(results.location))})
   return appHttp.getTemparature(results.location);
  }).then((data)=>{

    console.log(`\ncurrent temparature id ${data.temparature} and its already feels like ${data.apparentTemprature}`);

  }).catch((errorMessage)=>{
    console.log(errorMessage);
  });
  // appHttp.getLocation(argv.p,(errorMessage,results)=>{
  //   if (errorMessage) {
  //     console.log(errorMessage);
  //   } else {
  //     console.log(`Adress : ${results.address}`);
  //     // console.log(results.location.lat);
  //     // console.log(results.location.lng);
  //
  //     appHttp.getTemparature(results.location,(errorMessage,results)=>{
  //      if (errorMessage) {
  //        console.log(errorMessage);
  //      } else {
  //        console.log(`\ncurrent temparature id ${results.temparature} and its already feels like ${results.apparentTemprature}`);
  //      }
  //     });
  //   }
  // });
}else {
  console.log(`Please provide proper pincode`);
}
