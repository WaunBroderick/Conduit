FROM node:12.19.0-alpine3.9 AS development

WORKDIR /usr/src/Conduit

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:12.19.0-alpine3.9 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/Conduit

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/Conduit/dist ./dist

EXPOSE 5000

CMD ["node", "dist/main"]