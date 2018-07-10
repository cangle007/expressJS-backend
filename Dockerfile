# specify the node base image with your desired version node:<version>
FROM node:9.6.1

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY /  /usr/src/app

RUN npm install --silent

# start app
CMD ["npm", "start"]
