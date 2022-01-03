FROM node:14.16.1
RUN mkdir -p /usr/src/Conduit

RUN --mount=type=secret,id=MONGO_ATLAS_USER \
  cat /run/secrets/MONGO_ATLAS_USER\
  && echo ${MONGO_ATLAS_USER}

RUN --mount=type=secret,id=MONGO_ATLAS_PASSWORD \
  cat /run/secrets/MONGO_ATLAS_PASSWORD \
  && echo ${MONGO_ATLAS_PASSWORD}

RUN --mount=type=secret,id=MONGO_ATLAS_DB_ADDRESS \
  cat /run/secrets/MONGO_ATLAS_DB_ADDRESS\
  && echo ${MONGO_ATLAS_DB_ADDRESS}

RUN --mount=type=secret,id=MONGO_ATLAS_DB \
  cat /run/secrets/MONGO_ATLAS_DB\
  && echo ${MONGO_ATLAS_DB}

RUN --mount=type=secret,id=JWT_SECRET \
  cat /run/secrets/JWT_SECRET\
  && echo ${JWT_SECRET}


ENV MONGO_ATLAS_USER=wbroderick
ENV MONGO_ATLAS_PASSWORD=gnrkTanyMKLN43aa
ENV MONGO_ATLAS_DB_ADDRESS=conduitdb.afr7o.mongodb.net
ENV MONGO_ATLAS_DB=Conduit
ENV JWT_SECRET=AE2E4EC8E42548D56DD076B48CB585EF5ED48A2D3B729B24E8D8CBE2342C6486


WORKDIR /usr/src/Conduit

COPY . .

RUN cd ./client && npm ci  && npm start

RUN cd ./server && npm ci  && npm run start

RUN mkdir -p /usr/Conduit/app/server/

RUN cp -r ./client/build/* ./server/

WORKDIR  /usr/src/Conduit/server

EXPOSE 5000

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]