#build
FROM node:lts-alpine as build
WORKDIR /app
COPY . .
RUN npm install yarn
RUN yarn
RUN yarn build

#production
FROM nginx:stable-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
