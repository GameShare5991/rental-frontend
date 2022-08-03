# Rentals micro-frontend
## URL: http://localhost:3006/?name=NAMEHERE
```
docker build -t jackjackzhou/rental-frontend .

docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3006:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    jackjackzhou/rental-frontend

```

# build docker
npm run build
docker build . -t jackjackzhou/rental-frontend

# push image:
docker push jackjackzhou/rental-frontend

# kubectl create&run
minikube start
kubectl create -f rental-frontend-deployment.yaml
minikube tunnel
minikube dashboard

# clean up
kubectl delete -f rental-frontend-deployment.yaml