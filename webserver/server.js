var express    = require("express"),
    path       = require("path"),
    bodyParser = require("body-parser");

var app = express();

//Set port
app.set('port', (process.env.port || 3000));

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function(){
  console.log('Listening on port ' + app.get('port') + '...');
});