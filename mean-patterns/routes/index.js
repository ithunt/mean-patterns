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
});

//automatically load an object.. hmm
//chain of responsibility here it seems
router.param('pattern', function(req, res, next, id) {
    var query = Pattern.findById(id);

    //mongoose query interface
    query.exec(function(err, pattern) {
        if(err) { return next(err); }
        if(!pattern) { return next(new Error("can't find pattern")); }

        req.pattern = pattern;
        return next();
    })
});

router.get('/patterns/:pattern', function(req, res) {
    //so the router param is picked up first and function run,
    // then pattern is already in the request
    res.json(req.pattern);
});

//curl -X PUT http://localhost:3000/patterns/<PATTERN ID>/upvote
router.put('/patterns/:pattern/upvote', function(req, res, next) {
    req.pattern.upvote(function(err, pattern) {
        if(err) {return next(err);}
        res.json(pattern);
    });//upvote using a callback
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
