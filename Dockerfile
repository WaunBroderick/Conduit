FROM node:14.16.1
RUN mkdir -p /usr/src/Conduit

ENV MONGO_ATLAS_USER=wbroderick
ENV MONGO_ATLAS_PASSWORD=gnrkTanyMKLN43aa
ENV MONGO_ATLAS_DB_ADDRESS=conduitdb.afr7o.mongodb.net
ENV MONGO_ATLAS_DB=Conduit
ENV JWT_SECRET=AE2E4EC8E42548D56DD076B48CB585EF5ED48A2D3B729B24E8D8CBE2342C6486


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

CMD [ "npm", "run", "start:dev" ]