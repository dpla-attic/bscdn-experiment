
FROM node:erbium-alpine3.12
ARG API_KEY
WORKDIR /opt/bscdn-experiment
COPY . /opt/bscdn-experiment
RUN npm install
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]