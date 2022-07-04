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
};

exports.DocumentsServiceClient = grpc.makeGenericClientConstructor(DocumentsServiceService);
