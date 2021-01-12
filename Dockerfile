
FROM node:erbium-alpine3.12
WORKDIR /opt/bscdn-experiment
COPY . /opt/bscdn-experiment
RUN npm install
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]