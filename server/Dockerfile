FROM node:14

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

ENV MONGO_ATLAS_USER=wbroderick
ENV MONGO_ATLAS_PASSWORD=gnrkTanyMKLN43aa
ENV MONGO_ATLAS_DB_ADDRESS=conduitdb.afr7o.mongodb.net
ENV MONGO_ATLAS_DB=Conduit
ENV JWT_SECRET=AE2E4EC8E42548D56DD076B48CB585EF5ED48A2D3B729B24E8D8CBE2342C6486

RUN npm i -g @nestjs/cli

COPY package.json .

RUN npm install

COPY  . .

EXPOSE 5000

CMD ["nest", "start", "--watch"]