FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm i
ARG API_URL
RUN API_URL=${API_URL} npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]