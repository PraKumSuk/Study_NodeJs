# Official Node JS Image
FROM node:12

# Set working dir to store files run cmds etcetra
WORKDIR /app

# Copy app to /app dir and run npm install to download all modules
COPY package.json /app
RUN npm install
COPY . /app

# To start or run the app
CMD node index.js

# Expose contianer's port 3000 to the external world
EXPOSE 3000