# Check out https://hub.docker.com/_/node to select a new base image
FROM node:18.15

USER node

RUN mkdir -p /home/node/dist/app

WORKDIR /home/node/dist/app

COPY --chown=node package*.json ./

RUN npm install yarn

RUN yarn install

ENV PORT=3119

COPY --chown=node . .

RUN yarn run build


EXPOSE ${PORT}

CMD [ "yarn", "run", "prod" ]