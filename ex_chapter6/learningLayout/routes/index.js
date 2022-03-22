var express = require('express');
var router = express.Router();
const BlogPost = require('../model/BlogPost');
let blogs = [];
/* GET home page. */
router.get('/', function(req, res, next) {

    BlogPost.find({}, function(err, records) {
        blogs = records;
    });
    console.log(blogs);
    res.render('index', { title: 'Express', blogs });
});



module.exports = router;