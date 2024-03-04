FROM node:lts-alpine AS base

FROM base AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm i
RUN npm uninstall -g yarn
EXPOSE 3000
ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]