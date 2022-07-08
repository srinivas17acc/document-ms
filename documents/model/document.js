
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
    type: mongoose.Schema.Types.ObjectId // ObjectId 
  },
  userid: {
    type: String,
    
  }
});
docSchema.index({userid: 1})
module.exports = mongoose.model('DocumentCollection', docSchema);

