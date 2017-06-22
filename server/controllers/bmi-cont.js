var unirest = require('unirest')


module.exports = {
  bmi: (req, res)=>{
    unirest.post("https://bmi.p.mashape.com/")
    .header("X-Mashape-Key", "GEmfLeInuLmshD6AgNkJnDUqykdip1uKkS9jsn3Or7NQSq3bzT")
    .header("Content-Type", "application/json")
    .header("Accept", "application/json")
    .send({"weight":{"value":req.body.weight,"unit":"kg"},"height":{"value":req.body.height,"unit":"cm"},"sex":req.body.sex,"age":req.body.age,"waist":"34.00","hip":"40.00"})
    .end(function (result) {
      console.log(result.body);
      res.send(result.body)
    })
  }
}
