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
//var Memcached = require('memcached');
var mongojs = require('mongojs');
var db_newsHeader = mongojs('malvinews',['news_header']);
var db_newsCategory = mongojs('malvinews',['news_category']);
var db_pollHeader = mongojs('malvinews',['poll_header']);
var db_advtHeader = mongojs('malvinews',['advt_header']);
var ObjectId = require('mongodb').ObjectId;
// var memcached = new Memcached();
var fs = require('fs');
var formidable = require('formidable');
// memcached.connect( '127.0.0.1:49299', function( err, conn ){
//   if( err ) {
//      console.log( conn.server );
//   }else{
//      console.log( "connected to memcached ");
//   }
// });

exports.getNewsDetails = function(req, res, next){

   if (true) {
  db_newsHeader.news_header.find({}).sort({_id:-1}).limit(50,function(err, result){
    if(err){
      let responseErrorJson = {
        "status":0,
        "data":{"error":"Server error encountered."}
      }
      res.status(500).send(responseErrorJson);
    }
    if(result){
      // console.log("result.courses"+result.courses[0].title);
      let responseSuccessJson = {
        "status":1,
        "data" : result
      };
      res.status(200).send(responseSuccessJson);
    }else{
      let responseErrorJson = {
        "status":0,
        "data":{"error":"There is no news to display."}
      }
      res.status(200).send(responseErrorJson);
    }
  });
}
  
};

exports.getNewsDetailsById = function(req, res, next){
var o_id = new ObjectId(req.params.id);
   console.log(o_id);
   if (true) {
  db_newsHeader.news_header.findOne({"_id": o_id},function(err, result){
    if(err){
      let responseErrorJson = {
        "status":0,
        "data":{"error":"Server error encountered."}
      }
      res.status(500).send(responseErrorJson);
    }
    if(result){
      // console.log("result.courses"+result.courses[0].title);
      let responseSuccessJson = {
        "status":1,
        "data" : result
      };
      res.status(200).send(responseSuccessJson);
    }else{
      let responseErrorJson = {
        "status":0,
        "data":{"error":"There is no news to display."}
      }
      res.status(200).send(responseErrorJson);
    }
  });
}
  
};

exports.getNewsDetailsByCategory = function(req, res, next){
var category = req.params.category
   console.log(category);
   if (true) {
  db_newsHeader.news_header.find({"category": category}).sort({_id:-1}).limit(50,function(err, result){
    if(err){
      let responseErrorJson = {
        "status":0,
        "data":{"error":"Server error encountered."}
      }
      res.status(500).send(responseErrorJson);
    }
    console.log(result);
    if(result){
      // console.log("result.courses"+result.courses[0].title);
      let responseSuccessJson = {
        "status":1,
        "data" : result
      };
      res.status(200).send(responseSuccessJson);
    }else{
      let responseErrorJson = {
        "status":0,
        "data":{"error":"There is no news to display."}
      }
      res.status(200).send(responseErrorJson);
    }
  });
}
  
};

exports.postNewsDetails = function(req, res, next) {
// console.log(req);
// var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       console.log(files);
//       var oldpath = files.filetoupload.path;
//       var newpath = 'C:/uploadImage/' + files.filetoupload.name;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         // res.status(200).send({'message': 'File uploaded and moved!'});
//         res.end();
//       });
//  });
    var errors = req.validationErrors();
    if (errors) {
      return res.status(400).send(errors);
    }

var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017";

MongoClient.connect(url,function(err,database){
var db=database.db('malvinews');
if(err) throw err;
var collections=db.collection('news_header');

collections.insertOne(req.body,function(err,res){
  if(err) throw err;
    console.log(res.insertedCount+" documents inserted");
    database.close(); 
    
  });
});
let responseSuccessJson = {
        "status":1,
        "data":{"messge":"1 document inserted."}
      }
      res.status(200).send(responseSuccessJson);
};


exports.updateNewsDetails = function(req, res, next) {
   var o_id = new ObjectId(req.params.id);
   console.log(o_id);
   console.log(req.body);
    var errors = req.validationErrors();
    if (errors) {
      return res.status(400).send(errors);
    }

var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017";

MongoClient.connect(url,function(err,database){
var db=database.db('malvinews');
if(err) throw err;
var collections=db.collection('news_header');

collections.updateOne({"_id": o_id }, req.body,function(err,res){
  if(err) throw err;
    console.log(res.nModified+" documents updated");
    database.close(); 
    
  });
});
let responseSuccessJson = {
        "status":1,
        "data":{"messge":"1 document updated."}
      }
      res.status(200).send(responseSuccessJson);
};

exports.deleteNewsDetails = function(req, res, next) {
console.log('delete...');
   var o_id = new ObjectId(req.params.id);
console.log(o_id);
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017";

MongoClient.connect(url,function(err,database){
var db=database.db('malvinews');
if(err) throw err;
var collections=db.collection('news_header');

collections.deleteOne({"_id": o_id  }, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
let responseSuccessJson = {
        "status":1,
        "data":{"messge":"1 document deleted."}
      }
      res.status(200).send(responseSuccessJson);
});
};


exports.getNewsCategoryDetails = function(req, res, next){
console.log('category');
   if (true) {
  db_newsCategory.news_category.find({},function(err, result){
    if(err){
      let responseErrorJson = {
        "status":0,
        "data":{"error":"Server error encountered."}
      }
      res.status(500).send(responseErrorJson);
    }
    if(result){
       console.log(result);
      let responseSuccessJson = {
        "status":1,
        "data" : result.reverse()
      };
      res.status(200).send(responseSuccessJson);
    }else{
      let responseErrorJson = {
        "status":0,
        "data":{"error":"There is no news to display."}
      }
      res.status(200).send(responseErrorJson);
    }
  });
}
  
};



exports.getPollDetails = function(req, res, next){

   if (true) {
  db_pollHeader.poll_header.find({}).sort({_id:-1}).limit(20,function(err, result){
    if(err){
      let responseErrorJson = {
        "status":0,
        "data":{"error":"Server error encountered."}
      }
      res.status(500).send(responseErrorJson);
    }
    if(result){
      // console.log("result.courses"+result.courses[0].title);
      let responseSuccessJson = {
        "status":1,
        "data" : result
      };
      res.status(200).send(responseSuccessJson);
    }else{
      let responseErrorJson = {
        "status":0,
        "data":{"error":"There is no poll to display."}
      }
      res.status(200).send(responseErrorJson);
    }
  })
}
  
};


exports.getPollDetailsById = function(req, res, next){
var o_id = new ObjectId(req.params.id);
   console.log(o_id);
   if (true) {
  db_pollHeader.poll_header.findOne({"_id": o_id},function(err, result){
    if(err){
      let responseErrorJson = {
        "status":0,
        "data":{"error":"Server error encountered."}
      }
      res.status(500).send(responseErrorJson);
    }
    if(result){
      // console.log("result.courses"+result.courses[0].title);
      let responseSuccessJson = {
        "status":1,
        "data" : result
      };
      res.status(200).send(responseSuccessJson);
    }else{
      let responseErrorJson = {
        "status":0,
        "data":{"error":"There is no poll to display."}
      }
      res.status(200).send(responseErrorJson);
    }
  });
}
  
};

exports.postPollDetails = function(req, res, next) {
console.log(req);
    var errors = req.validationErrors();
    if (errors) {
      return res.status(400).send(errors);
    }

var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017";

MongoClient.connect(url,function(err,database){
var db=database.db('malvinews');
if(err) throw err;
var collections=db.collection('poll_header');

collections.insertOne(req.body,function(err,res){
  if(err) throw err;
    console.log(res.insertedCount+" documents inserted");
    database.close(); 
    
  });
});
let responseSuccessJson = {
        "status":1,
        "data":{"messge":"1 document inserted."}
      }
      res.status(200).send(responseSuccessJson);
};

exports.updatePollDetails = function(req, res, next) {
   var o_id = new ObjectId(req.params.id);
   console.log(o_id);
   console.log(req.body);
    var errors = req.validationErrors();
    if (errors) {
      return res.status(400).send(errors);
    }

var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017";

MongoClient.connect(url,function(err,database){
var db=database.db('malvinews');
if(err) throw err;
var collections=db.collection('poll_header');

collections.updateOne({"_id": o_id }, req.body,function(err,res){
  if(err) throw err;
    console.log(res.nModified+" documents updated");
    database.close(); 
    
  });
});
let responseSuccessJson = {
        "status":1,
        "data":{"messge":"1 document updated."}
      }
      res.status(200).send(responseSuccessJson);
};

exports.deletePollDetails = function(req, res, next) {
console.log('delete...');
   var o_id = new ObjectId(req.params.id);
console.log(o_id);
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017";

MongoClient.connect(url,function(err,database){
var db=database.db('malvinews');
if(err) throw err;
var collections=db.collection('poll_header');

collections.deleteOne({"_id": o_id  }, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
let responseSuccessJson = {
        "status":1,
        "data":{"messge":"1 document deleted."}
      }
      res.status(200).send(responseSuccessJson);
});
};

exports.PollCountDetails = function(req, res, next) {
   var o_id = new ObjectId(req.params.id);
   console.log(o_id);
   console.log(req.body.updateField);
   var updateField=req.body.updateField;
    var errors = req.validationErrors();
    if (errors) {
      return res.status(400).send(errors);
    }

var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017";

MongoClient.connect(url,function(err,database){
var db=database.db('malvinews');
if(err) throw err;
var collections=db.collection('poll_header');
if(updateField=== "option1Count"){
collections.update( { "_id" : o_id }, { $inc : { "option1Count" : 1 } } ,function(err,res){
  if(err) throw err;
    console.log(res.nModified+" documents updated");
    database.close(); 
    
  });
}
else if(updateField=== "option2Count"){
collections.update( { "_id" : o_id }, { $inc : { "option2Count" : 1 } } ,function(err,res){
  if(err) throw err;
    console.log(res.nModified+" documents updated");
    database.close(); 
    
  });
}
else if(updateField=== "option3Count"){
collections.update( { "_id" : o_id }, { $inc : { "option3Count" : 1 } } ,function(err,res){
  if(err) throw err;
    console.log(res.nModified+" documents updated");
    database.close(); 
    
  });
}
if(updateField === "option4Count"){
collections.update( { "_id" : o_id }, { $inc : { "option4Count" : 1 } } ,function(err,res){
  if(err) throw err;
    console.log(res.nModified+" documents updated");
    database.close(); 
    
  });
}
});
let responseSuccessJson = {
        "status":1,
        "data":{"messge":"1 document updated."}
      }
      res.status(200).send(responseSuccessJson);
};

exports.getAdvtDetails = function(req, res, next){

   if (true) {
  db_advtHeader.advt_header.find({}).sort({_id:-1}).limit(50,function(err, result){
    if(err){
      let responseErrorJson = {
        "status":0,
        "data":{"error":"Server error encountered."}
      }
      res.status(500).send(responseErrorJson);
    }
    if(result){
      // console.log("result.courses"+result.courses[0].title);
      let responseSuccessJson = {
        "status":1,
        "data" : result
      };
      res.status(200).send(responseSuccessJson);
    }else{
      let responseErrorJson = {
        "status":0,
        "data":{"error":"There is no Advt. to display."}
      }
      res.status(200).send(responseErrorJson);
    }
  });
}
  
};


exports.getAdvtDetailsById = function(req, res, next){
var o_id = new ObjectId(req.params.id);
   console.log(o_id);
   if (true) {
  db_advtHeader.advt_header.findOne({"_id": o_id},function(err, result){
    if(err){
      let responseErrorJson = {
        "status":0,
        "data":{"error":"Server error encountered."}
      }
      res.status(500).send(responseErrorJson);
    }
    if(result){
      // console.log("result.courses"+result.courses[0].title);
      let responseSuccessJson = {
        "status":1,
        "data" : result
      };
      res.status(200).send(responseSuccessJson);
    }else{
      let responseErrorJson = {
        "status":0,
        "data":{"error":"There is no advt to display."}
      }
      res.status(200).send(responseErrorJson);
    }
  });
}
  
};

exports.postAdvtDetails = function(req, res, next) {

    var errors = req.validationErrors();
    if (errors) {
      return res.status(400).send(errors);
    }

var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017";

MongoClient.connect(url,function(err,database){
var db=database.db('malvinews');
if(err) throw err;
var collections=db.collection('advt_header');

collections.insertOne(req.body,function(err,res){
  if(err) throw err;
    console.log(res.insertedCount+" documents inserted");
    database.close(); 
    
  });
});
let responseSuccessJson = {
        "status":1,
        "data":{"messge":"1 document inserted."}
      }
      res.status(200).send(responseSuccessJson);
};

exports.updateAdvtDetails = function(req, res, next) {
   var o_id = new ObjectId(req.params.id);
   console.log(o_id);
   console.log(req.body);
    var errors = req.validationErrors();
    if (errors) {
      return res.status(400).send(errors);
    }

var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017";

MongoClient.connect(url,function(err,database){
var db=database.db('malvinews');
if(err) throw err;
var collections=db.collection('advt_header');

collections.updateOne({"_id": o_id }, req.body,function(err,res){
  if(err) throw err;
    console.log(res.nModified+" documents updated");
    database.close(); 
    
  });
});
let responseSuccessJson = {
        "status":1,
        "data":{"messge":"1 document updated."}
      }
      res.status(200).send(responseSuccessJson);
};

exports.deleteAdvtDetails = function(req, res, next) {
console.log('delete...');
   var o_id = new ObjectId(req.params.id);
console.log(o_id);
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017";

MongoClient.connect(url,function(err,database){
var db=database.db('malvinews');
if(err) throw err;
var collections=db.collection('advt_header');

collections.deleteOne({"_id": o_id  }, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
let responseSuccessJson = {
        "status":1,
        "data":{"messge":"1 document deleted."}
      }
      res.status(200).send(responseSuccessJson);
});
};


exports.uploadFiles = function(req, res, next) {
console.log('upload: '+req);
 if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/uploadImage/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
   
};