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
    var remaider = num1 % num2
    res.write("<h1>Sum of two numbers is <h1/>" +  sum  +"\n")
    res.write("<h1>Subtraction of two number is <h1/>" + sub + "\n")
    res.write("<h1>Multiplication of two number is <h1/>" + mul + "\n")
    res.write("<h1>Division of two number is <h1/>" + div + "\n")
    res.write("<h1>Remainder of two number is <h1/>" + remaider + "\n")
    res.send()
})



app.listen(3000,function(){
    console.log("Server started")
})
