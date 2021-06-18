# Base Image
FROM node:14.4.0-alpine3.10
USER root
WORKDIR /frontend
# Install Dependencies
COPY package.json ./
RUN npm install
COPY . /frontend

# start app
# CMD npm start