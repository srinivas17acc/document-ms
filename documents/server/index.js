const grpc = require("@grpc/grpc-js");
const { DocumentsServiceService } = require("../proto/documents_grpc_pb");
const documentService = require("./documentService");
var mongoose = require('mongoose');
const config = require('../config/index');

const addr = "localhost:50051";

function cleanup(server) {
  console.log("Clean Up");

  if (server) server.forceShutdown();
}

mongoose.connect(
  config.mongoose.url,
  config.mongoose.options,

  (err) => {
    if (err) {
      console.error("MongoDB NOT able to Connect!");
      console.log(err);
      process.exit(1);
    } else {
      const server = new grpc.Server();
      const cred = grpc.ServerCredentials.createInsecure();
      server.addService(DocumentsServiceService, documentService);
      server.bindAsync(addr, cred, (err, _) => {
        if (err) {
          return cleanup(server);
        }
        server.start();
      });

      console.log(`server listen address ${addr}`);

      const exitHandler = () => {
        if (server) {
             server.close(() => {
            console.log("Server closed");
            process.exit(1);
          });
        } else {
          process.exit(1);
        }
      };

      const unexpectedErrorHandler = (error) => {
        console.log(error);
        exitHandler();
      };

      process.on("uncaughtException", unexpectedErrorHandler);
      process.on("unhandledRejection", unexpectedErrorHandler);
    }
  }
);
