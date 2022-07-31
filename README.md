# Rentals micro-frontend
## URL: http://localhost:3006/?name=NAMEHERE
```
docker build -t rental-frontend .

docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3006:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    rental-frontend

```

