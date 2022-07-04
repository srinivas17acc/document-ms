const grpc = require('@grpc/grpc-js');
const {DocumentsServiceClient} = require('../proto/documents_grpc_pb');
const {Document} = require('../proto/documents_pb');

function createDocument(client) {
    const documentReq = new Document();
    documentReq.setUserid('1234');
    documentReq.setName("firstdocs");
    documentReq.setContent("first content");
    documentReq.setFolderid("432");

   client.createDocument(documentReq, (err, res) => {
       if (err) {
           return console.log(err, 'create docs error');
       }
       console.log(`created succussfully `, res);
   });
}


function main() {
    const cred = grpc.ChannelCredentials.createInsecure();
    const client = new DocumentsServiceClient('localhost:50051', cred);    
    
    createDocument(client);
    client.close();
}   

main();