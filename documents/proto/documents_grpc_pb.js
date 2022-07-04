// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var documents_pb = require('./documents_pb.js');

function serialize_documents_Document(arg) {
  if (!(arg instanceof documents_pb.Document)) {
    throw new Error('Expected argument of type documents.Document');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_documents_Document(buffer_arg) {
  return documents_pb.Document.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_documents_DocumentListResponse(arg) {
  if (!(arg instanceof documents_pb.DocumentListResponse)) {
    throw new Error('Expected argument of type documents.DocumentListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_documents_DocumentListResponse(buffer_arg) {
  return documents_pb.DocumentListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_documents_DocumentResult(arg) {
  if (!(arg instanceof documents_pb.DocumentResult)) {
    throw new Error('Expected argument of type documents.DocumentResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_documents_DocumentResult(buffer_arg) {
  return documents_pb.DocumentResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_documents_DocumentsGetByUserReq(arg) {
  if (!(arg instanceof documents_pb.DocumentsGetByUserReq)) {
    throw new Error('Expected argument of type documents.DocumentsGetByUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_documents_DocumentsGetByUserReq(buffer_arg) {
  return documents_pb.DocumentsGetByUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_documents_FolderAddReq(arg) {
  if (!(arg instanceof documents_pb.FolderAddReq)) {
    throw new Error('Expected argument of type documents.FolderAddReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_documents_FolderAddReq(buffer_arg) {
  return documents_pb.FolderAddReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_documents_FolderAddResp(arg) {
  if (!(arg instanceof documents_pb.FolderAddResp)) {
    throw new Error('Expected argument of type documents.FolderAddResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_documents_FolderAddResp(buffer_arg) {
  return documents_pb.FolderAddResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_documents_FoldersReadReq(arg) {
  if (!(arg instanceof documents_pb.FoldersReadReq)) {
    throw new Error('Expected argument of type documents.FoldersReadReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_documents_FoldersReadReq(buffer_arg) {
  return documents_pb.FoldersReadReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_documents_FoldersReadResp(arg) {
  if (!(arg instanceof documents_pb.FoldersReadResp)) {
    throw new Error('Expected argument of type documents.FoldersReadResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_documents_FoldersReadResp(buffer_arg) {
  return documents_pb.FoldersReadResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_documents_MoveFolderReq(arg) {
  if (!(arg instanceof documents_pb.MoveFolderReq)) {
    throw new Error('Expected argument of type documents.MoveFolderReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_documents_MoveFolderReq(buffer_arg) {
  return documents_pb.MoveFolderReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_documents_MoveFolderResp(arg) {
  if (!(arg instanceof documents_pb.MoveFolderResp)) {
    throw new Error('Expected argument of type documents.MoveFolderResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_documents_MoveFolderResp(buffer_arg) {
  return documents_pb.MoveFolderResp.deserializeBinary(new Uint8Array(buffer_arg));
}


var DocumentsServiceService = exports.DocumentsServiceService = {
  getDocuments: {
    path: '/documents.DocumentsService/GetDocuments',
    requestStream: false,
    responseStream: false,
    requestType: documents_pb.DocumentsGetByUserReq,
    responseType: documents_pb.DocumentListResponse,
    requestSerialize: serialize_documents_DocumentsGetByUserReq,
    requestDeserialize: deserialize_documents_DocumentsGetByUserReq,
    responseSerialize: serialize_documents_DocumentListResponse,
    responseDeserialize: deserialize_documents_DocumentListResponse,
  },
  createDocument: {
    path: '/documents.DocumentsService/CreateDocument',
    requestStream: false,
    responseStream: false,
    requestType: documents_pb.Document,
    responseType: documents_pb.DocumentResult,
    requestSerialize: serialize_documents_Document,
    requestDeserialize: deserialize_documents_Document,
    responseSerialize: serialize_documents_DocumentResult,
    responseDeserialize: deserialize_documents_DocumentResult,
  },
  readDocument: {
    path: '/documents.DocumentsService/ReadDocument',
    requestStream: false,
    responseStream: false,
    requestType: documents_pb.DocumentsGetByUserReq,
    responseType: documents_pb.Document,
    requestSerialize: serialize_documents_DocumentsGetByUserReq,
    requestDeserialize: deserialize_documents_DocumentsGetByUserReq,
    responseSerialize: serialize_documents_Document,
    responseDeserialize: deserialize_documents_Document,
  },
  readFolders: {
    path: '/documents.DocumentsService/ReadFolders',
    requestStream: false,
    responseStream: false,
    requestType: documents_pb.FoldersReadReq,
    responseType: documents_pb.FoldersReadResp,
    requestSerialize: serialize_documents_FoldersReadReq,
    requestDeserialize: deserialize_documents_FoldersReadReq,
    responseSerialize: serialize_documents_FoldersReadResp,
    responseDeserialize: deserialize_documents_FoldersReadResp,
  },
  addFolder: {
    path: '/documents.DocumentsService/AddFolder',
    requestStream: false,
    responseStream: false,
    requestType: documents_pb.FolderAddReq,
    responseType: documents_pb.FolderAddResp,
    requestSerialize: serialize_documents_FolderAddReq,
    requestDeserialize: deserialize_documents_FolderAddReq,
    responseSerialize: serialize_documents_FolderAddResp,
    responseDeserialize: deserialize_documents_FolderAddResp,
  },
  moveFolder: {
    path: '/documents.DocumentsService/MoveFolder',
    requestStream: false,
    responseStream: false,
    requestType: documents_pb.MoveFolderReq,
    responseType: documents_pb.MoveFolderResp,
    requestSerialize: serialize_documents_MoveFolderReq,
    requestDeserialize: deserialize_documents_MoveFolderReq,
    responseSerialize: serialize_documents_MoveFolderResp,
    responseDeserialize: deserialize_documents_MoveFolderResp,
  },
};

exports.DocumentsServiceClient = grpc.makeGenericClientConstructor(DocumentsServiceService);
