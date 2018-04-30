const request = require('request');

var getLocation= (pincode)=>{


 return new Promise((resolve,reject)=>{
   request(`https://maps.googleapis.com/maps/api/geocode/json?address=${pincode}&key=AIzaSyCQcwblSHAwk50L7pRBPpkTLZxqCiqvCz8`,
     (error,response,body)=>{
        if(!error && response.statusCode==200)
         {
           try {
             var body = JSON.parse(body);
           } catch (e) {
             reject(`JSON Address not fectched for some unkown reason ${e}`);
           } finally {

           }

           if(body.status=="ZERO_RESULTS"){
             reject(`Location is not available with pincode ${pincode}`);
           }else if(body.status=="REQUEST_DENIED") {
              reject(`${body.error_message}`);
           }else if(body.status=="OK"){
             resolve({address:body.results[0].formatted_address,
                                 location:body.results[0].geometry.location});
           }else{
             reject(`Address not fectched for some unkown reason ${body.results}`);
           }
         }else{
           reject(`Not able connect to google api service${error}`);
         }



   });

 });
  }



var getTemparature = (location)=>{

  return new Promise((resolve,reject)=>{

    request(`https://api.darksky.net/forecast/d76fc22f72b91366edcf3976cb7fe911/${location.lat},${location.lng}`,(error,response,body)=>{

       if (error || response.statusCode!=200) {
          reject("Unkown error");
       } else {
         const bodyObj = JSON.parse(body);
         //console.log(bodyObj.currently.apparentTemperature);
         resolve({temparature:bodyObj.currently.temperature , apparentTemprature:bodyObj.currently.apparentTemperature});

       }

    })


  });


}

module.exports = {
  getLocation,
  getTemparature

}
