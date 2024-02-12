# Node version
ARG NODE_VERSION=20.9.0

# ------------------------------------------------------FRONTEND

FROM node:${NODE_VERSION} as FRONTEND

LABEL maintainer="2023 MyHomeworks, { }"

WORKDIR /app

COPY . .

RUN npm install