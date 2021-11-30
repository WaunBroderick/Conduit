FROM node:14.16.1
RUN mkdir -p /usr/src/Conduit

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