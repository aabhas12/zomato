/**
 * Created by aabhassinghal on 6/22/17.
 */
/**
 * Created by aabhassinghal on 6/22/17.
 */
var request=require('request');
var http=require('http');
var express = require('express');
var app = express();

var options = {
    url: 'https://developers.zomato.com/api/v2.1/cities?q=ahmedabad',
    headers: {
        'user-key': '969742be149fe811ec619744e619b834'
    },
    method:'GET'
};

var server=app.listen(8081,function(){

    console.log("SERVER IS STARTED");


})
app.get('/get',function(req,res) {
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            res.send(info);

        }
    }
    request(options, callback);
});

