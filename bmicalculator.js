const express = require("express")
const bodypraser = require("body-parser")
var app = express()
const port = 4000
app.use(bodypraser.urlencoded({extended: true}))

app.get("/bmicalculator",function(request,response){
    response.sendFile(__dirname + "/bmicalculater.html")
})

app.post("/bmicalculator",function(request,response){

    var weight = parseFloat(request.body.weight)
    var height = parseFloat(request.body.height)
    var bmi = weight/(height * height)
    response.send("Your bmi is " + bmi)
})



app.listen(4000, function(){
    console.log("Server started in port 4000")
})