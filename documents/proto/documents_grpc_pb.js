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

function serialize_documents_DocumentResult(arg) {
  if (!(arg instanceof documents_pb.DocumentResult)) {
    throw new Error('Expected argument of type documents.DocumentResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_documents_DocumentResult(buffer_arg) {
  return documents_pb.DocumentResult.deserializeBinary(new Uint8Array(buffer_arg));
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


var DocumentsServiceService = exports.DocumentsServiceService = {
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
};

exports.DocumentsServiceClient = grpc.makeGenericClientConstructor(DocumentsServiceService);
