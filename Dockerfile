# Dockerfile

# Use official node.js v8 image
FROM node:8

# Create work directory
WORKDIR /www

# Copy repo to work directory
COPY ./ /www

# Avoid error
RUN sed -i "s/^exit 101$/exit 0/" /usr/sbin/policy-rc.d

# Install dependencies
RUN apt-get update && apt-get install -y php php-sqlite3
RUN npm install gulp-cli -g
RUN npm install gulp -D
RUN npm install

# Build gulp
RUN gulp build

# Change work directory for running php
WORKDIR /www/site/public

# Command to run at start of container
CMD php -S 0.0.0.0:8080
