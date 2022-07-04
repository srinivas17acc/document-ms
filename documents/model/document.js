
var mongoose = require( 'mongoose' );

var docSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  content: {
    type: String
  },
  created: { 
    type: Date, 
    default: Date.now 
  },
  folderid: {
    type: String
  },
  userid: {
    type: String,
    
  }
});

module.exports = mongoose.model('DocumentCollection', docSchema);