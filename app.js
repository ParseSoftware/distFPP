var express             = require('express');
var app                 = express();
var cors                = require('cors');

app.use(express.static(__dirname + '/public'));

app.use(cors());

app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
});
  
app.options('*', cors());

//Import all routes

app.set('port', 3000);

app.use(function (req, res, next) {
    if(!req.originalUrl.includes('/api/')){
        res.sendfile(__dirname+'/public/index.html');
    }else{
        next();
    }
       
  });
//here start the middlewares
app.listen(app.get('port'), function() {
                console.log('Express server listening on port ' + app.get('port'))
            })
