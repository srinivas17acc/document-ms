const {DocumentResult} = require('../proto/documents_pb');
var mongoose = require('mongoose');
const DocumentCollection  = require('../model/document');

exports.createDocument = (call, callback) => {

	if (!call.request.getUserid()) {
			call(null, null);
	  } else {
		var createDocs = new DocumentCollection({name: call.request.getName(), content: call.request.getContent(), folderid: call.request.getFolderid(), userid:call.request.getUserid() });
		createDocs.save(function(err,res){
			if (err){
				console.log(err);
			}
			else{
				console.log(res);
				const result = new DocumentResult();
				result.setResult("document created successfully");
				callback(null, result);
			}
		})
		
	  }
	
}

