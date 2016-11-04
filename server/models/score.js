var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ScoreSchema   = new Schema({
    c2array: Boolean,
    size: Array,
    data: Array  
}, { versionKey: false });

module.exports = mongoose.model('Score', ScoreSchema);