FROM node:18.17.0-alpine

WORKDIR /app

COPY package*.json ./

RUN NODE_ENV=development npm i

COPY . .

RUN npm run build

CMD ["npm", "start"]
