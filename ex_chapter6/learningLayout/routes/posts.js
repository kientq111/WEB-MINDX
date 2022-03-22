const express = require('express');
const router = express.Router();
const BlogPost = require('../model/BlogPost');

router.get('/new', function(req, res) {
    res.render('create');
});

router.post('/store', (req, res) => {
    //luu titile, content, image to db
    BlogPost.create({
        ...req.body,
        image: 'acb.jpg'
    });
});

module.exports = router;