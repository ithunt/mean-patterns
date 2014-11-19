var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    body: String,
    author: String,
    upvotes: {type: Number, default: 0},
    pattern: { type: mongoose.Schema.Types.ObjectId, ref: 'Pattern'},
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Comment', CommentSchema);