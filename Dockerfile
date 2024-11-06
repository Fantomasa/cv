FROM node:20.5

WORKDIR /nextjs

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "start"]