FROM node:12.13-alpine

WORKDIR /usr/src/Conduit

COPY package.json ./

RUN npm install 

COPY . .

EXPOSE 5000

CMD ["npm", "start:dev"]`

