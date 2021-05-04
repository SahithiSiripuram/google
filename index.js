var express = require('express');
var app=express();
app.use(express.static(__dirname+'/frontend'));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/frontend/home.html");
})
var port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log('site run on http://localhost:'+port);
});