# Pull official base image
FROM node:14.16.1

# Set up working Dir
WORKDIR /client

# Add `/client/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./ 
RUN npm install

# Add app
COPY . ./

# Start App
CMD ["npm", "start"]`