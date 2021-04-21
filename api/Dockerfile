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

CMD ["npm", "start"]