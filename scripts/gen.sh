#!/bin/bash
argc=$#
argv=("$@")

for (( j = 0; j < argc; ++j )); do
  # Generate gRPC and Protobuf code for ${PROJECT}/${PROJECT}.proto
  ./node_modules/.bin/grpc_tools_node_protoc -I ${argv[j]}/proto/                                   \
    --js_out=import_style=commonjs:${argv[j]}/proto/                            \
    --grpc_out=grpc_js:${argv[j]}/proto/                                        \
    ${argv[j]}/proto/${argv[j]}.proto;
  
done