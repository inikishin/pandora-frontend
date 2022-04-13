FROM node:16-alpine AS build

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

# production environment
FROM nginx:1.19.2
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# docker build -t pandora-frontend .
# docker run --name pandora-frontend --network pandora pandora-frontend

# add to default.conf after index.html: 'try_files $uri /index.html;'