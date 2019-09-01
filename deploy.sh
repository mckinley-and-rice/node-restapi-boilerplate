#!/bin/bash
docker build -t mcrice/node-restapi-boilerplate .
docker push mcrice/node-restapi-boilerplate

ssh deploy@$DEPLOY_SERVER << EOF
docker pull mcrice/node-restapi-boilerplate
docker stop api-boilerplate || true
docker rm api-boilerplate || true
docker rmi mcrice/node-restapi-boilerplate:current || true
docker tag mcrice/node-restapi-boilerplate:latest mcrice/node-restapi-boilerplate:current
docker run -d --restart always --name api-boilerplate -p 3000:3000 mcrice/node-restapi-boilerplate:current
EOF
