const express = require("express");
const bodyParser = require("body-parser");

const app = express();
                                                        //app.use(express.json());
app.use(bodyParser.urlencoded({exended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
    //console.log(__dirname);
});


app.post("/", function(req, res){
    //console.log(req.body.num1);
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1+n2;
    res.send("The answer is " + result);
});

/*app.get("/", function(req, res){
    res.send("<h1>Hello World</h1>");
});

app.get("/about", function(req, res){
    res.send("<h1>Heet Kumar Kothadiya</h1><p>B.Tech Computer Science Student</p>");
});

app.get("/hector1", function(req, res){
    res.send("<h1>Heet Kumar Kothadiya</h1><p>B.Tech from VIT Bhopal</p>");
}); */

app.listen(3000,function(){
    console.log("Server has started on port 3000");
});
