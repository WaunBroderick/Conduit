FROM node:14.16.1
RUN mkdir -p /usr/src/Conduit

RUN --mount=type=secret,id=MONGO_ATLAS_USER \
  cat /run/secrets/MONGO_ATLAS_USER

RUN --mount=type=secret,id=MONGO_ATLAS_PASSWORD \
  cat /run/secrets/MONGO_ATLAS_PASSWORD

RUN --mount=type=secret,id=MONGO_ATLAS_DB_ADDRESS \
  cat /run/secrets/MONGO_ATLAS_DB_ADDRESS

RUN --mount=type=secret,id=MONGO_ATLAS_DB \
  cat /run/secrets/MONGO_ATLAS_DB

RUN --mount=type=secret,id=JWT_SECRET \
  cat /run/secrets/JWT_SECRET

RUN echo ${JWT_SECRET}

RUN echo ${MONGO_ATLAS_USER}

RUN echo ${MONGO_ATLAS_PASSWORD}


WORKDIR /usr/src/Conduit

COPY . .

RUN cd ./client && npm ci  && npm run build && cd ..

RUN cd ./server && npm ci  && npm run start:dev && cd ..

RUN mkdir -p /usr/Conduit/app/server/

RUN cp -r ./client/build/* ./server/

WORKDIR  /usr/src/Conduit/server

RUN npm run prebuild

RUN npm run build

EXPOSE 5000

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]