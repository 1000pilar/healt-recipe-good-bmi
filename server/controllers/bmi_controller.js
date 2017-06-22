var unirest = require('unirest')


var hitungBMI = (req,res,next)=> {
// These code snippets use an open-source library. http://unirest.io/nodejs
          unirest.post("https://bmi.p.mashape.com/")
          .header("X-Mashape-Key", "Jieaav6aUYmshzu4Vhd0ObYtwtZUp1B67l6jsnK04HKvqe81ff")
          .header("Content-Type", "application/json")
          .header("Accept", "application/json")
          .send({
               "weight":{
                    "value": req.body.weight,
                    "unit":"kg"},
               "height":{
                    "value":req.body.height,
                    "unit":"cm"},
               "sex":req.body.sex,
               "age":req.body.age,
                    "waist":"34.00","hip":"40.00"})
          .end(function (result) {
            console.log(result.status, result.headers, result.body);
            res.send(result)
          });
}


 var food = function(req, res) {
    let body = req.body
    let resSearch = body.recipe
    let searchFree = body.free
    console.log(req.body);
    let url

    if (+body.value < 19) {
      console.log('ini di kurus',req.body.value);
      url = `https://edamam-recipe-search-and-diet-v1.p.mashape.com/search?q=${resSearch}&diet=high-protein`
    }
    else if (+body.value >= 19 && +body.value < 25) {
      url = `https://edamam-recipe-search-and-diet-v1.p.mashape.com/search?q=${resSearch}&diet=balanced`
    }
    else if (+body.value >=25) {
      console.log('ini di gendut',req.body.value);
      url = `https://edamam-recipe-search-and-diet-v1.p.mashape.com/search?q=${resSearch}&diet=low-carb`
    }

    // res.redirect(`https://api.edamam.com/search?q=${resSearch}`)
    unirest.get(url)
      .header("X-Mashape-Key", "wFxKaDqES8mshupXO1jC3ymRVwk0p1qbFjdjsnGxHqSt12Vkje")
      .header("Accept", "application/json")
      .end(function(result) {
        console.log(result.body);
        res.send(result.body);
      });
    }


 module.exports = {
      hitungBMI,
      food
}
