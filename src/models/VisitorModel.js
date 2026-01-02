const mongoose = require('mongoose');
const Schema = mongoose.Schema

const VisitorModel = new Schema({
    id: {type: String},
    name: {type:String},
    email: {type:String},
    isRecruiter: {type: Boolean},
    message: {type: String}
})

module.exports = mongoose.model('visitors',VisitorModel);

