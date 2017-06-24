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


var server=app.listen(8081,function(){

    console.log("SERVER IS STARTED");


})
//city details by name
app.get('/getcity/:name',function(req,res) {
    var options = {
        url: 'https://developers.zomato.com/api/v2.1/cities?q='+req.params.name,
        headers: {
            'user-key': '969742be149fe811ec619744e619b834'
        },
        method:'GET'
    };

    console.log(options);
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            console.log(info);

            res.send(info['location_suggestions'][0]['id']+"  "+info['location_suggestions'][0]['name']+"  "+info['location_suggestions'][0]['country_name']);

        }
    }
    request(options, callback);
});
//restaurant by cityid
app.get('/searchbyrest/:cityid',function(req,res) {
    console.log(req.params.name);
    var options1 = {
        url: 'https://developers.zomato.com/api/v2.1/search?entity_id='+req.params.cityid+'&entity_type=city&start=0&count=20',
        headers: {
            'user-key': '969742be149fe811ec619744e619b834'

        },
        method:'GET'
    };
    console.log(options1);
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            console.log(info);
            console.log(info['restaurants'].length);
            res.send(info['restaurants']);
        }
        else
        {
            console.log("FUCK YOU");
        }
    }
    request(options1, callback);
});

