# Rentals micro-frontend
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

