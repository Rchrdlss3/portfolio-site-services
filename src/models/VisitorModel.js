const mongoose = require('mongoose');
const Schema = mongoose.Schema

const GeoSchema = new Schema({
    lat: {type:String},
    lon: {type:String},  
    state: {type:String},
    city: {type:String},
    zipcode: {type:String}  
})

const VisitorModel = new Schema({
    id: {type: String},
    name: {type:String},
    email: {type:String},
    isRecruiter: {type: Boolean},
    message: {type: String},
    geo: {type: GeoSchema}
})

module.exports = mongoose.model('visitors',VisitorModel);

