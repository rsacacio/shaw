var express = require('express');
var app = express();

app.use('/', express.static('client/'));

app.get('/api/palindrome/:setence', function(req, res){
	var setence = req.params.setence.replace(/ /g,'').toLowerCase();
	var result = '';

	for(var indice = setence.length -1; indice >= 0; indice--){
        result+= setence.charAt(indice);
    }

    if(result == setence){
        res.send(200);
    }else{
        res.send(400);
    }

});

app.listen(3000);