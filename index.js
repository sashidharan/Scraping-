  var request=require('request');
  var cheerio=require('cheerio');
  var express=require('express');
  var fs=require('fs');
  var app=express();
  var url = "http://directory.stokesentinel.co.uk/search/%METHOD%/%ACTION%";
  url.replace("%METHOD", "stoke-on-trent%2Cstaffordshire");
  url.replace("%ACTION%", "temple");
  request('http://directory.stokesentinel.co.uk/search/stoke-on-trent%2Cstaffordshire/temple', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      // console.log(html);
      var $=cheerio.load(html);
      var json=[];
      // let i=0;
      $('h2.ser-title').each(function(){
      	var result = $(this);
        var shop={title:result.text()};
        json.push(shop);
       //  i++;
       // console.log(i);
      	// console.log(result.text());
      });
      console.log(json)

    }
    else{
    	console.log(error);
    }
  });

  app.listen(4000,function(){
  	console.log("Done!");
  });
