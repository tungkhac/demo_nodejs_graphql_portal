FROM node:17.9.0

ARG APP=demo_nodejs

# Copy files into the working directory
COPY package.json /var/www/$APP/

WORKDIR /var/www/$APP

# To handle 'not get uid/gid'
RUN npm config set unsafe-perm true

RUN rm -f package-lock.json

RUN npm install
RUN npm config set cache /tmp --global

# Run file
CMD [ "npm", "run", "dev" ]