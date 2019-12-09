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

# Default mount dir
# Below wil mount or copy log files generated inside containers i.e. at path /app/log
# to the containers host/guest machines in the 
# default location for e.g. as below depending on profile being run
# ///var/lib/docker/volumes/<somelengthyid>/_data/index-dev.log
# ///var/lib/docker/volumes/<somelengthyid>/_data/index-prod.log
VOLUME /app/log
