# Pull official base image
FROM node:17


# Install nestjs cli to run build
RUN npm i -g @nestjs/cli

# Install app dependencies
COPY package.json .
RUN npm install

# Add app
COPY  . .

# Expose port
EXPOSE 5000

CMD ["nest", "start", "--watch"]