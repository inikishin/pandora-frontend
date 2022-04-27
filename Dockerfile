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

# docker build -t pandora-frontend --no-cache .
# docker run --name pandora-frontend --network pandora -d pandora-frontend
# docker run --name pandora-frontend -p 80:80 -d pandora-frontend

# add to default.conf after index.html: 'try_files $uri /index.html;'

# docker run --name nginx -p 80:80 -p 443:443 -d --network pandora --mount type=bind,source=/opt/nginx.conf,target=/etc/nginx/conf.d nginx:1.19.2