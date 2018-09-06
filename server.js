var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var request = require('request');
//var Memcached = require('memcached');

//var memcached = new Memcached();

// memcached.connect( '127.0.0.1:49299', function( err, conn ){
//   if( err ) {
//     console.log("server error:");
//      console.log( conn.server );
//   }else{
//      console.log( "connected to memcached ");
//   }
// });


// Load environment variables from .env file
dotenv.load();

// Models
var User = require('./models/User');

// Controllers
var userController = require('./controllers/user');
var contactController = require('./controllers/contact');
var newsController = require('./controllers/news');

var app = express();

app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 }); 

mongoose.connect(process.env.MONGODB);
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});
app.set('port', process.env.PORT || 3001);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'malvi')));

app.use(function(req, res, next) {
  req.isAuthenticated = function() {
    var token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
    try {
      return jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
      return false;
    }
  };

if (req.isAuthenticated()) {
    var payload = req.isAuthenticated();
    User.findById(payload.sub, function(err, user) {
      console.log(JSON.stringify(user));
      req.user = user;
      next();
    });
  } else {
    next();
  }
});

// app.post('/saveLoginInfo', userController.saveLoginInfo)
// app.post('/contact', contactController.contactPost);
// app.put('/account', userController.ensureAuthenticated, userController.accountPut);
// app.delete('/account', userController.ensureAuthenticated, userController.accountDelete);
// app.post('/signup', userController.signupPost);
// app.post('/login', userController.loginPost);
// app.post('/forgot', userController.forgotPost);
// app.post('/reset/:token', userController.resetPost);
// app.get('/unlink/:provider', userController.ensureAuthenticated, userController.unlink);
// app.post('/auth/facebook', userController.authFacebook);
// app.get('/auth/facebook/callback', userController.authFacebookCallback);
// app.post('/auth/google', userController.authGoogle);
// app.get('/getTransactionDetails', userController.getTransactionDetails);
// app.post('/auth/github', userController.authGithub);
// app.get('/auth/github/callback', userController.authGithubCallback);

 app.post('/news', newsController.postNewsDetails);
 app.get('/news', newsController.getNewsDetails);
 app.put('/news/:id', newsController.updateNewsDetails);
 app.delete('/news/:id', newsController.deleteNewsDetails);
 app.get('/news/ById/:id', newsController.getNewsDetailsById);
 app.get('/news/ByCategory/:category', newsController.getNewsDetailsByCategory);
 app.get('/news/category', newsController.getNewsCategoryDetails);

 app.post('/poll', newsController.postPollDetails);
 app.get('/poll', newsController.getPollDetails);
 app.put('/poll/:id', newsController.updatePollDetails);
 app.delete('/poll/:id', newsController.deletePollDetails);
 app.get('/poll/ById/:id', newsController.getPollDetailsById);
 app.put('/poll/count/:id', newsController.PollCountDetails);

 app.post('/advt', newsController.postAdvtDetails);
 app.get('/advt', newsController.getAdvtDetails);
 app.put('/advt/:id', newsController.updateAdvtDetails);
 app.delete('/advt/:id', newsController.deleteAdvtDetails);
 app.get('/advt/ById/:id', newsController.getAdvtDetailsById);

 app.get('/upload', newsController.uploadFiles);
app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
