# Node version
ARG NODE_VERSION=20.9.0

# ------------------------------------------------------FRONTEND

FROM node:${NODE_VERSION} as FRONTEND

LABEL maintainer="2023 MyHomeworks, { }"

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# ------------------------------------------------------NGINX

FROM nginx:stable-alpine

COPY --from=FRONTEND /app/dist /app

# RUN rm /etc/nginx/conf.d/default.conf

# COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf