FROM node:14.19.1
RUN mkdir -p /usr/src/Conduit




WORKDIR /usr/src/Conduit

COPY . .

# Install nestjs cli to run build
RUN npm i -g @nestjs/cli@8.2.5

RUN cd ./client && npm ci  && npm run build && cd ..

RUN cd ./server && rm -rf ./node_modules/  && npm ci  && nest build && cd ..

RUN mkdir -p /usr/Conduit/app/server/

RUN cp -r ./client/build/* ./server/

WORKDIR  /usr/src/Conduit/server

RUN npm run prebuild

RUN npm run build

EXPOSE 5000 

EXPOSE 3000

#CMD [ "npm", "run", "start:dev" ]