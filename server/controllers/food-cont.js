var express = require('express');
var router = express.Router();
require('dotenv').config()
var unirest = require('unirest');


module.exports = {
  food: function(req, res) {
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
}
