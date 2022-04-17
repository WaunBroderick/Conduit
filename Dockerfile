FROM node:14.19.1
RUN mkdir -p /usr/src/Conduit

ENV MONGO_ATLAS_USER=${env.MONGO_ATLAS_USER}
ENV MONGO_ATLAS_PASSWORD=${env.MONGO_ATLAS_PASSWORD}
ENV MONGO_ATLAS_DB_ADDRESS=${env.MONGO_ATLAS_DB_ADDRESS}
ENV MONGO_ATLAS_DB=${env.MONGO_ATLAS_DB}
ENV JWT_SECRET=${env.JWT_SECRET}


WORKDIR /usr/src/Conduit

COPY . .

# Install nestjs cli to run build
RUN npm i -g @nestjs/cli

RUN cd ./client && npm ci  && npm run build && cd ..

RUN cd ./server && npm ci  && nest build && cd ..

RUN mkdir -p /usr/Conduit/app/server/

RUN cp -r ./client/build/* ./server/

WORKDIR  /usr/src/Conduit/server

RUN npm run prebuild

RUN npm run build

EXPOSE 5000

EXPOSE 3000

#CMD [ "npm", "run", "start:dev" ]