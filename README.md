<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Run upload service localy

```
npm run start:dev upload
```

## Build upload service

```
cd apps/upload
docker build -f ./apps/upload/Dockerfile -t upload-developmen-t1 --target development .
docker run -it upload-development-t1 sh
docker image rm -f upload-development-t1

```

## Run upload service

```
docker run upload_tag_1
```

## Stoppig all docker containers

```
docker kill $(docker ps -q)
```

## Status

```
docker ps
```

## Run using docker compose

```
cd videoshare
docker-compose up
docker-compose up --build
```

Note: need to start docker daemon

```
# Start minikube
minikube start

# Tell Docker CLI to talk to minikube's VM
eval $(minikube docker-env)

# Save IP to a hostname
echo "`minikube ip` docker.local" | sudo tee -a /etc/hosts > /dev/null

# Stop minkube
minikube stop

```

# mongo

```
start
mongod --config /usr/local/etc/mongod.conf --fork

status
ps aux | grep mongod

stop
# lsof -i tcp:3000
kill -9 <process_id>

mongodb://localhost:27017

Alternate option:
mongod --dbpath=data/db


docker-compose run upload ls /usr/src/app

```

Communicaton between different services using network protocol - TCP

RPC calls - TCP message pattern

Event pattern - does not need to send response

CI CD
docker build -t upload -f . ../../

push to docker hub

### helm charts

```
kubectl get namespaces
kubectl get po

In k8s
kubectl create deployment auth --image=image-id --dry-run=client -o yaml ? deployment.yaml

cd videshare
helm install videoshare .

kubectl get po
kubectl describe po container-id
kubectl logs container-id

helm upgrade videoshare .

kubectl create secret generic mongodb --from-literal=connectionString=mongodb+srv://videoshare:<enter_pass>@videoshare.4ovyz65.mongodb.net

kubectl get secrets

kubectl get secret mongodb -o yaml


helm upgread videoshare

kubectl create service clusterip upload --tcp=3002 --dry-run=client -o yaml > service.yaml

cd to k8s/videoshare
helm upgrade videoshare .

kubectl get svc

AUTH deployment

kubectl create secret generic jwt --from-literal=jwtSecret=jwt_secret_string

heml upgrade videoshare .

kubectl create service clusterip auth --tcp=3001,3002 --dry-run=client -o yaml > serivce.yaml


UPLOAD deployment

kubectl create service nodeport upload --tcp=3000 --dry-run=client -o yaml > service.yaml

```

```
helm install videoshare .
kubectl get pods
kubectl describe po <pod_name>
```
