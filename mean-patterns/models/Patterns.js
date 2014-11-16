var mongoose = require('mongoose');

var PatternSchema = new mongoose.Schema({
    name: String,
    upvotes: {type: Number, default: 0},
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref:'Comment'}] //array of comment references
});

mongoose.model('Pattern', PatternSchema);