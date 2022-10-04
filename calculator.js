const express = require("express")
const bodypraser = require("body-parser")
var app = express()
app.use(bodypraser.urlencoded({extended: true}))
const port = 3000

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})
app.post("/",function(req,res){

    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    var sum = num1+num2
    var sub = num1 - num2
    var mul = num1 * num2
    var div = num1 / num2
    res.write("Sum of two number is " + sum +".\n")
    res.write("Subtraction of two number is " + sub + ".\n")
    res.write("Multiplication of two number is " + mul + ".\n")
    res.write("Division of two number is " + div + ".\n")
    res.send()
})



app.listen(3000,function(){
    console.log("Server started")
})