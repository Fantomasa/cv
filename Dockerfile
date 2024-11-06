FROM node:20.5

WORKDIR /nextjs

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build

CMD ["npm", "start"]