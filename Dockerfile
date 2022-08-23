FROM node:16.16-alpine3.16
ARG ENV_FILE

COPY . /opt/app
RUN echo "${ENV_FILE}" > /opt/app/.env
WORKDIR /opt/app

RUN npm install
RUN npm run build

CMD ["npm", "run" , "start"]

EXPOSE 3000
