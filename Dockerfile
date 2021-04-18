FROM node:14-alpine3.10 as builder

# set working dir
WORKDIR /app

# set path
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

# install dependency
RUN npm install 

# add app
COPY . ./

RUN npm run build

# if you want api and api with key and stuff, you can run express
WORKDIR /app/server

COPY ./server/package.json ./
COPY ./server/package-lock.json ./

RUN npm install

# add app
COPY ./server ./

CMD ["npm", "start"]

# this works for the front end not having to talk with server
# # nginx state for serving content
# FROM nginx:alpine
# # Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static assets
# RUN rm -rf ./*
# # Copy static assets from builder stage
# COPY --from=builder /app/build .
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]