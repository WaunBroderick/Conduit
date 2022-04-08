# Pull official base image
FROM node:14.19.1

# Set up working Dir
WORKDIR /client

# Add `/client/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./ 
RUN npm install

# Add app
COPY . ./


# Expose Port
EXPOSE 3000

# Start App
CMD ["npm", "start"]`