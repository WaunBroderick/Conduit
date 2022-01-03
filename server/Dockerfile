FROM node:14

RUN npm i -g @nestjs/cli

COPY package.json .

RUN npm install

RUN --mount=type=secret,id=MONGO_ATLAS_USER \
  --mount=type=secret,id=MONGO_ATLAS_PASSWORD \
  --mount=type=secret,id=MONGO_ATLAS_DB_ADDRESS \
  --mount=type=secret,id=MONGO_ATLAS_DB \
  --mount=type=secret,id=JWT_SECRET \
   export MONGO_ATLAS_USER=$(cat /run/secrets/MONGO_ATLAS_USER) && \
   export MONGO_ATLAS_PASSWORD=$(cat /run/secrets/MONGO_ATLAS_PASSWORD) && \
   export MONGO_ATLAS_DB_ADDRESS=$(cat /run/secrets/MONGO_ATLAS_DB_ADDRESS) && \
   export MONGO_ATLAS_DB=$(cat /run/secrets/MONGO_ATLAS_DB) && \
   export JWT_SECRET=$(cat /run/secrets/JWT_SECRET) && \
   npm gen

COPY  . .

EXPOSE 5000

CMD ["nest", "start", "--watch"]