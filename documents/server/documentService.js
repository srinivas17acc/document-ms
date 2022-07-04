const {DocumentResult, FolderAddResp, FoldersReadResp, Folder, MoveFolderResp} = require('../proto/documents_pb');
var mongoose = require('mongoose');
const DocumentCollection  = require('../model/document');
const FolderCollection  = require('../model/folder');

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


exports.addFolder = (call, callback) => {
	console.log(call.request.getUserid(), 'userId');
    
	if (!call.request.getUserid()) {
			call(null, null);
	  } else {
		var createFolder = new FolderCollection({name: call.request.getName(), userid:call.request.getUserid() });

		createFolder.save(function(err,res){
			if (err){
				console.log(err);
			}
			else{
				const result = new FolderAddResp();
				result.setResult("Folder created successfully");
				callback(null, result);
			}
		})
		
	  }
	
}


exports.readFolders = (call, callback) => {
	console.log(call.request.getUserid(), 'userId');
    
	if (!call.request.getUserid()) {
			call(null, null);
	  } else {
		FolderCollection.find({ userid:call.request.getUserid() }, function (err, folder) {
			if (err){
				console.log(err);
			}
			else{
				const folderReadResp = new FoldersReadResp();

				folder.forEach( f => {
					const folderRes = new Folder();
					folderRes.setName(f.name);
				    folderRes.setUserid(f.userid);
					folderReadResp.addFolders(folderRes);
					
				})
			
				console.log(folderReadResp, 'test');
				callback(null, folderReadResp);
			}
		});
		
	  }
	
}


exports.moveFolder = (call, callback) => {
	console.log(call.request.getUserid(), 'userId');
    
	if (!call.request.getUserid()) {
			call(null, null);
	  } else {

		let promise = new Promise(function(resolve, reject) {

				 FolderCollection.find({ _id: call.request.getId(), userid:call.request.getUserid() }, function (err, folder) {
						if (err){
							console.log(err);
							reject(folder);
						}
							resolve(folder);
					});
					
		})
		
		promise.then(function(result) {

               if (!result) {
				callback(null, null);
				return result;
			   }

				DocumentCollection.updateOne( {_id:call.request.getId()}, {folderid: call.request.getFolderid()} , function (err, folder) {
					if (err){
						console.log(err);
					}
					else{		
						const folderMoveResp = new MoveFolderResp();
						folderMoveResp.setResult('Moved successfully');
						callback(null, folderMoveResp);
					}
				});

		});
		
	  }
}