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

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# server will be separted into diffrent one either use redis or mongo
# start fake server : run as damone to excute the one below
# eventually, this server is fake anyway and this gotta have its own docker image
#CMD ["nohup" "npm", "run", "server", "&"]

# no need to start npm because build can be run from nginx as static webserver
# start app
# dev version
#CMD ["npm", "start"]    
#CMD ["serve" "-s" "build"]