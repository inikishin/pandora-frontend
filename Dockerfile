FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm ci

CMD npm start

# docker build -t pf .
# docker run --publish 3090:3000 --name pf --network pandora pf