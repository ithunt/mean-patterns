var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    body: String,
    author: String,
    upvotes: {type: Number, default: 0},
    pattern: { type: mongoose.Schema.Types.ObjectId, ref: 'Pattern'}
});

mongoose.model('Comment', CommentSchema);