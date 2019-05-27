var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.get('/teste',(req,res)=>{
    res.json({
        message:"Hello user",
    });
});

app.listen(8000, ()=>{
    console.log('Listening on port 8000');
})