# Pull official base image
FROM node:14

# Mounting secrets as accessible variables from GITHUB SECRETS
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

# Install nestjs cli to run build
RUN npm i -g @nestjs/cli

# Install app dependencies
COPY package.json .
RUN npm install

# Add app
COPY  . .

# Expose port
EXPOSE 5000

CMD ["nest", "start", "--watch"]