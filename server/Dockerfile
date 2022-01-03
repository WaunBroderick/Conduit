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

RUN echo ${JWT_SECRET}

RUN echo {JWT_SECRET}

RUN echo JWT_SECRET

RUN echo ${/run/secrets/JWT_SECRET}

RUN npm i -g @nestjs/cli

COPY package.json .

RUN npm install

COPY  . .

EXPOSE 5000

CMD ["nest", "start", "--watch"]