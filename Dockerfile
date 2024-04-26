FROM node:18-alpine 

WORKDIR /springo

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD npm run dev 