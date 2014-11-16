var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Pattern = mongoose.model('Pattern');
var Comment = mongoose.model('Comment');


/* GET all patterns */
router.get('/patterns', function(req, res, next) {
    Pattern.find(function(error, patterns) {
        if(error) {return next(error); }

        res.json(patterns);
    })
});
/* POST new pattern */
router.post('/patterns', function(req, res, next){
    var pattern = new Pattern(req.body);

    pattern.save(function(error, pattern) {
        if(error) {return next(error); }
        res.json(pattern);
    })
})
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
