var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var request = require('request');
var qs = require('querystring');
var User = require('../models/User');
var pg = require("pg");
var port = 5433;
var host = '127.0.0.1';
// var conString = "pg://postgres:postgres@localhost:5432/zenrays";
// var client = new pg.Client(conString);
// client.connect();
// var Memcached = require('memcached');
var mongojs = require('mongojs');
var db = mongojs('zenrays', ['course_info']);

// var memcached = new Memcached();

// memcached.connect( '127.0.0.1:49299', function( err, conn ){
//   if( err ) {
//      console.log( conn.server );
//   }else{
//      console.log( "connected to memcached ");
//   }
// });

var profile = {'name':'Rohit kumar', 
               'location':'Delhi', 
               'emailid':'iamrohitx@gmail.com' 
               }
// create your profile key where user personal information will be store in json format.               
// memcached.set('profile', profile, 10000, function (err) { 
//  // if(err) throw new err;
// });
 
 
// get profile key data
// memcached.get('profile', function (err, data) {
//   console.log(data);
// });

function generateToken(user) {
  var payload = {
    iss: 'my.domain.com',
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(7, 'days').unix()
  };
  return jwt.sign(payload, process.env.TOKEN_SECRET);
}

/**
 * Login required middleware
 */
exports.ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};


exports.getCourseInfo = function(req, res, next){
  console.log(req);
// get profile key data
// memcached.get('course_info', function (err, data) {
//   if(data){
//     console.log("from cached"+data);
//     res.json(data);
//   }else{
//     console.log("from non cached");
//     db.course_info.find({course_name:"JAVA"},function(err, doc){
//       if(doc){
//         memcached.set('course_info',doc, 10000, function (err) { 
//           if(err) throw new err;
//         });
//         res.json(doc);
//       }
//       else{
//         res.send("No info found")
//       }
//       })
//   }
 
// });
};

  /**
   * POST /login
   * Sign in with email and password
   */
  exports.loginPost = function(req, res, next) {
      console.log("Login Start: "+req.body.email);
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('password', 'Password cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    var errors = req.validationErrors();

    if (errors) {
        console.log("Login error");
      return res.status(400).send(errors);
    }

    User.findOne({ email: req.body.email }, function(err, user) {
        console.log("User find"+user);
      if (!user) {
        return res.status(401).send({ msg: 'The email address ' + req.body.email + ' is not associated with any account. ' +
        'Double-check your email address and try again.'
        });
      }
      user.comparePassword(req.body.password, function(err, isMatch) {
          console.log("Compare Password");
        if (!isMatch) {
          return res.status(401).send({ msg: 'Invalid email or password' });
        }
        res.send({ token: generateToken(user), user: user.toJSON(), msg: 'Login Successfully...' });
      });
    });
  };

/**
 * POST /signup
 */
exports.signupPost = function(req, res, next) {
  req.assert('name', 'Name cannot be blank').notEmpty();
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Email cannot be blank').notEmpty();
  req.assert('password', 'Password must be at least 4 characters long').len(4);
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

 //  if (errors) {
 //    return res.status(400).send(errors);
 //  }
 //  var conString = "pg://postgres:postgres@localhost:5432/zenrays";
 //  var client = new pg.Client(conString);
 //  client.connect();
 //  console.log("connected");
 //    console.log('Email: '+req.body.email);
 //  client.query('SELECT * FROM user_info where email = 1',).then(function(response){
	//   console.log("2");
	//   console.log("response"+response.data);
	//   res.status(400).send({ msg: 'The email address you have entered is already associated with another account.'});
 //  }).catch(function(err){
	// console.log("1");
 //    user = new User({
 //      name: req.body.name,
 //      email: req.body.email,
 //      password: req.body.password
 //    });
      
 //   client.query("INSERT INTO user_info(name, email, created_date, updated_date, password) values($1, $2, $3, $4, $5)", [req.body.name, req.body.email, req.body.createdAt, req.body.updatedAt, req.body.password]);
 //   res.send({ token: generateToken(user), user: user, msg: "Sign up successfully!!!" });
 // });
//    console.log("1"); 'SELECT * FROM user_info where email = $1',[req.body.email]
}

exports.saveTransaction = function(req, res) {
  console.log(req);
// var conString = "pg://postgres:postgres@localhost:5432/employees";
// var client = new pg.Client(conString);
// client.connect();
// console.log("connected");
// //Drop table if it exists
// client.query("DROP TABLE IF EXISTS emps");
// // Creat table and insert 2 records into it
// client.query("CREATE TABLE IF NOT EXISTS emps(firstname varchar(64), lastname varchar(64))");
// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Tinniam', 'Ganesh']);
// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Anand', 'Karthik']); 
// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Kim', 'Zong']);
// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Tim', 'Barpee']); 
// };


// exports.getTransactionDetails = function(req, res) {
// var conString = "pg://postgres:postgres@localhost:5432/zenrays";
// var client = new pg.Client(conString);
// client.connect();
// console.log("connected");
// var cached_value = memcached.get('vidio_info');
// console.log("cached_value"+cached_value);
// // get profile key data
// memcached.get('vidio_info', function (err, data) {
//   console.log("vidio_info"+data.command);
//   if(data){
// 	console.log("sending from cached");
//     res.send(data)
//   }else{
// 	  	console.log ("not sending from cached value");
// 	client.query("SELECT * FROM vidio_info").then(function(response){
//  // create your profile key where user personal information will be store in json format.               
// memcached.set('vidio_info', response, 10000, function (err) { 
//   if(err) throw new err;
// });
// res.send(response);
// })
// .catch(function(err){
//  console.log(err);
// });
//   }
// });

};

/**
 * PUT /account
 * Update profile information OR change password.
 */
exports.accountPut = function(req, res, next) {
  if ('password' in req.body) {
    req.assert('password', 'Password must be at least 4 characters long').len(4);
    req.assert('confirm', 'Passwords must match').equals(req.body.password);
  } else {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });
  }

  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }

  User.findById(req.user.id, function(err, user) {
    if ('password' in req.body) {
      user.password = req.body.password;
    } else {
      user.email = req.body.email;
      user.name = req.body.name;
      user.gender = req.body.gender;
      user.location = req.body.location;
      user.website = req.body.website;
    }
    user.save(function(err) {
      if ('password' in req.body) {
        res.send({ msg: 'Your password has been changed.' });
      } else if (err && err.code === 11000) {
        res.status(409).send({ msg: 'The email address you have entered is already associated with another account.' });
      } else {
        res.send({ user: user, msg: 'Your profile information has been updated.' });
      }
    });
  });
};

/**
 * DELETE /account
 */
exports.accountDelete = function(req, res, next) {
  User.remove({ _id: req.user.id }, function(err) {
    res.send({ msg: 'Your account has been permanently deleted.' });
  });
};

/**
 * GET /unlink/:provider
 */
exports.unlink = function(req, res, next) {
  User.findById(req.user.id, function(err, user) {
    switch (req.params.provider) {
      case 'facebook':
        user.facebook = undefined;
        break;
      case 'google':
        user.google = undefined;
        break;
      case 'twitter':
        user.twitter = undefined;
        break;
      case 'vk':
        user.vk = undefined;
        break;
      case 'github':
          user.github = undefined;
        break;      
      default:
        return res.status(400).send({ msg: 'Invalid OAuth Provider' });
    }
    user.save(function(err) {
      res.send({ msg: 'Your account has been unlinked.' });
    });
  });
};

/**
 * POST /forgot
 */
exports.forgotPost = function(req, res, next) {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Email cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }

  async.waterfall([
    function(done) {
      crypto.randomBytes(16, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          return res.status(400).send({ msg: 'The email address ' + req.body.email + ' is not associated with any account.' });
        }
        user.passwordResetToken = token;
        user.passwordResetExpires = Date.now() + 3600000; // expire in 1 hour
        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var transporter = nodemailer.createTransport({
        service: 'Mailgun',
        auth: {
          user: process.env.MAILGUN_USERNAME,
          pass: process.env.MAILGUN_PASSWORD
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'support@yourdomain.com',
        subject: '✔ Reset your password on Mega Boilerplate',
        text: 'You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://' + req.headers.host + '/reset/' + token + '\n\n' +
        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      transporter.sendMail(mailOptions, function(err) {
        res.send({ msg: 'An email has been sent to ' + user.email + ' with further instructions.' });
        done(err);
      });
    }
  ]);
};

/**
 * POST /reset
 */
exports.resetPost = function(req, res, next) {
  req.assert('password', 'Password must be at least 4 characters long').len(4);
  req.assert('confirm', 'Passwords must match').equals(req.body.password);

  var errors = req.validationErrors();

  if (errors) {
      return res.status(400).send(errors);
  }

  async.waterfall([
    function(done) {
      User.findOne({ passwordResetToken: req.params.token })
        .where('passwordResetExpires').gt(Date.now())
        .exec(function(err, user) {
          if (!user) {
            return res.status(400).send({ msg: 'Password reset token is invalid or has expired.' });
          }
          user.password = req.body.password;
          user.passwordResetToken = undefined;
          user.passwordResetExpires = undefined;
          user.save(function(err) {
            done(err, user);
          });
        });
    },
    function(user, done) {
      var transporter = nodemailer.createTransport({
        service: 'Mailgun',
        auth: {
          user: process.env.MAILGUN_USERNAME,
          pass: process.env.MAILGUN_PASSWORD
        }
      });
      var mailOptions = {
        from: 'support@yourdomain.com',
        to: user.email,
        subject: 'Your Mega Boilerplate password has been changed',
        text: 'Hello,\n\n' +
        'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      transporter.sendMail(mailOptions, function(err) {
        res.send({ msg: 'Your password has been changed successfully.' });
      });
    }
  ]);
};

/**
 * POST /auth/facebook
 * Sign in with Facebook
 */
exports.authFacebook = function(req, res) {
  console.log(req);
  // var profileFields = ['id', 'name', 'email', 'gender', 'location'];
  // var accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';
  // var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + profileFields.join(',');

  // var params = {
  //   code: req.body.code,
  //   client_id: req.body.clientId,
  //   client_secret: process.env.FACEBOOK_SECRET,
  //   redirect_uri: req.body.redirectUri
  // };

  // // Step 1. Exchange authorization code for access token.
  // request.get({ url: accessTokenUrl, qs: params, json: true }, function(err, response, accessToken) {
  //   if (accessToken.error) {
  //     return res.status(500).send({ msg: accessToken.error.message });
  //   }

  //   // Step 2. Retrieve user's profile information.
  //   request.get({ url: graphApiUrl, qs: accessToken, json: true }, function(err, response, profile) {
  //     if (profile.error) {
  //       return res.status(500).send({ msg: profile.error.message });
  //     }

  //     // Step 3a. Link accounts if user is authenticated.
  //     if (req.isAuthenticated()) {
  //       User.findOne({ facebook: profile.id }, function(err, user) {
  //         if (user) {
  //           return res.status(409).send({ msg: 'There is already an existing account linked with Facebook that belongs to you.' });
  //         }
  //         user = req.user;
  //         user.name = user.name || profile.name;
  //         user.gender = user.gender || profile.gender;
  //         user.picture = user.picture || 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
  //         user.facebook = profile.id;
  //         user.save(function() {
  //           res.send({ token: generateToken(user), user: user });
  //         });
  //       });
  //     } else {
  //       // Step 3b. Create a new user account or return an existing one.
  //       User.findOne({ facebook: profile.id }, function(err, user) {
  //         if (user) {
  //           return res.send({ token: generateToken(user), user: user });
  //         }
  //         User.findOne({ email: profile.email }, function(err, user) {
  //           if (user) {
  //             return res.status(400).send({ msg: user.email + ' is already associated with another account.' })
  //           }
  //           user = new User({
  //             name: profile.name,
  //             email: profile.email,
  //             gender: profile.gender,
  //             location: profile.location && profile.location.name,
  //             picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large',
  //             facebook: profile.id
  //           });
  //           user.save(function(err) {
  //             return res.send({ token: generateToken(user), user: user });
  //           });
  //         });
  //       });
  //     }
  //   });
  // });
};

exports.authFacebookCallback = function(req, res) {
  res.send('Loading...');
};
/**
 * POST /auth/google
 * Sign in with Google
 */
exports.authGoogle = function(req, res) {
  console.log(req);
  // var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
  // var peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';

  // var params = {
  //   code: req.body.code,
  //   client_id: req.body.clientId,
  //   client_secret: process.env.GOOGLE_SECRET,
  //   redirect_uri: req.body.redirectUri,
  //   grant_type: 'authorization_code'
  // };

  // // Step 1. Exchange authorization code for access token.
  // request.post(accessTokenUrl, { json: true, form: params }, function(err, response, token) {
  //   var accessToken = token.access_token;
  //   var headers = { Authorization: 'Bearer ' + accessToken };

  //   // Step 2. Retrieve user's profile information.
  //   request.get({ url: peopleApiUrl, headers: headers, json: true }, function(err, response, profile) {
  //     if (profile.error) {
  //       return res.status(500).send({ message: profile.error.message });
  //     }
  //     // Step 3a. Link accounts if user is authenticated.
  //     if (req.isAuthenticated()) {
  //       User.findOne({ google: profile.sub }, function(err, user) {
  //         if (user) {
  //           return res.status(409).send({ msg: 'There is already an existing account linked with Google that belongs to you.' });
  //         }
  //         user = req.user;
  //         user.name = user.name || profile.name;
  //         user.gender = profile.gender;
  //         user.picture = user.picture || profile.picture.replace('sz=50', 'sz=200');
  //         user.location = user.location || profile.location;
  //         user.google = profile.sub;
  //         user.save(function() {
  //           res.send({ token: generateToken(user), user: user });
  //         });
  //       });
  //     } else {
  //       // Step 3b. Create a new user account or return an existing one.
  //       User.findOne({ google: profile.sub }, function(err, user) {
  //         if (user) {
  //           return res.send({ token: generateToken(user), user: user });
  //         }
  //         user = new User({
  //           name: profile.name,
  //           email: profile.email,
  //           gender: profile.gender,
  //           picture: profile.picture.replace('sz=50', 'sz=200'),
  //           location: profile.location,
  //           google: profile.sub
  //         });
  //         user.save(function(err) {
  //           res.send({ token: generateToken(user), user: user });
  //         });
  //       });
  //     }
  //   });
  // });
};

exports.authGoogleCallback = function(req, res) {
  res.send('Loading...');
};
/**
 * POST /auth/google
 * Sign in with Github
 */
exports.authGithub = function(req, res) {
  console.log(req);
  // var accessTokenUrl = 'https://github.com/login/oauth/access_token';
  // var userUrl = 'https://api.github.com/user';

  // var params = {
  //   code: req.body.code,
  //   client_id: req.body.clientId,
  //   client_secret: process.env.GITHUB_SECRET,
  //   redirect_uri: req.body.redirectUri,
  //   grant_type: 'authorization_code'
  // };

  // // Step 1. Exchange authorization code for access token.
  // request.post(accessTokenUrl, { json: true, form: params }, function(err, response, token) {
  //   var accessToken = token.access_token;
  //   var headers = { 
  //       Authorization: 'Bearer ' + accessToken,
  //       'User-Agent': 'MegaBoilerplate'
  //     };
  //   // Step 2. Retrieve user's profile information.
  //   request.get({ url: userUrl, headers: headers, json: true }, function(err, response, profile) {
  //     if (profile.error) {
  //       return res.status(500).send({ message: profile.error.message });
  //     }
  //     // Step 3a. Link accounts if user is authenticated.
  //     if (req.isAuthenticated()) {
  //       User.findOne({ github: profile.id }, function(err, user) {
  //         if (user) {
  //           return res.status(409).send({ msg: 'There is already an existing account linked with Github that belongs to you.' });
  //         }
  //         user = req.user;
  //         user.name = user.name || profile.name;
  //         user.picture = user.picture || profile.avatar_url;
  //         user.location = user.location || profile.location;
  //         user.github = profile.id;
  //         user.save(function() {
  //           res.send({ token: generateToken(user), user: user });
  //         });
  //       });
  //     } else {
  //       // Step 3b. Create a new user account or return an existing one.
  //       User.findOne({ github: profile.id }, function(err, user) {
  //         if (user) {
  //           return res.send({ token: generateToken(user), user: user });
  //         }
  //         user = new User({
  //           name: profile.name,
  //           email: profile.email,
  //           picture: profile.avatar_url,
  //           location: profile.location,
  //           github: profile.id
  //         });
  //         user.save(function(err) {
  //           res.send({ token: generateToken(user), user: user });
  //         });
  //       });
  //     }
  //   });
  // });
};

exports.saveLoginInfo = function(req, res) {
  console.log(req);
// var conString = "pg://postgres:postgres@localhost:5432/employees";
// console.log("connected1"+req.body.password);
// var client = new pg.Client(conString);
// console.log("connected2"+req.body.email);
// client.connect();
// console.log("connected");
// client.query("INSERT INTO LOGIN_DETAILS(USERNAME, PASSWORD) values($1, $2)", [req.body.email, 'TEST']);
// res.status(200).send({msg:'Login Successful'})
};

exports.authGithubCallback = function(req, res) {
  res.send('Loading...');
};
