var express = require('express');
var path = require('path');
var port = process.env.PORT || 80;
var app = express();

//使用静态文件
app.use(express.static('public'));
//当收到访问请求
app.get('/',function(req, res){
    res.sendFile(__dirname + "/public/views/index.html");
})

app.listen(port);