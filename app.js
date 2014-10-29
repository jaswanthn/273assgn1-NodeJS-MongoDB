
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var MongoClient = require('mongodb').MongoClient;
var category = require('./routes/category');
var item = require('./routes/item');

  

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

MongoClient.connect("mongodb://localhost:27017/bestchoice", function(err, db) {
	  if(!err) {
	    console.log("We are connected");
	  }
	});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  }


app.get('/', routes.index);
app.get('/Best_Choice',routes.index);
app.get('/Best_Choice/Television',category.Television);
app.get('/Best_Choice/Car', category.Car);
app.get('/Best_Choice/NailPolish', category.NailPolish);
app.get('/Best_Choice/Television/Onida',item.Onida);
app.get('/Best_Choice/Television/Samsung',item.Samsung);
app.get('/Best_Choice/Television/LG',item.LG);
app.get('/Best_Choice/Television/Sony',item.Sony);
app.get('/Best_Choice/Car/Benz',item.Benz);
app.get('/Best_Choice/Car/BMW',item.BMW);
app.get('/Best_Choice/Car/VW',item.VW);
app.get('/Best_Choice/Car/Toyota',item.Toyota);
app.get('/Best_Choice/NailPolish/Butter',item.Butter);
app.get('/Best_Choice/NailPolish/Cnd',item.Cnd);
app.get('/Best_Choice/NailPolish/Essie',item.Essie);
app.get('/Best_Choice/NailPolish/Opi',item.Opi);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
