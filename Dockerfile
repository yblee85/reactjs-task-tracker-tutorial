FROM node:14-alpine3.10

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

# start fake server : run as damone to excute the one below
# eventually, this server is fake anyway and this gotta have its own docker image
CMD ["nohup" "npm", "run", "server", "&"]

# start app
CMD ["npm", "start"]