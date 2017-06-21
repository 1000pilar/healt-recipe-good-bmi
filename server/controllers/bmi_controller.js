var unirest = require('unirest')


var hitungBMI = (req,res,next)=> {
// These code snippets use an open-source library. http://unirest.io/nodejs
          unirest.post("https://bmi.p.mashape.com/")
          .header("X-Mashape-Key", "Jieaav6aUYmshzu4Vhd0ObYtwtZUp1B67l6jsnK04HKvqe81ff")
          .header("Content-Type", "application/json")
          .header("Accept", "application/json")
          .send({
               "weight":{
                    "value":"85.00",
                    "unit":"kg"},
               "height":{
                    "value":"170.00",
                    "unit":"cm"},
                    "sex":"m",
                    "age":"24",
                    "waist":"34.00","hip":"40.00"})
          .end(function (result) {
            console.log(result.status, result.headers, result.body);
          });
}

 module.exports = {
      hitungBMI
}
