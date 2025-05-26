FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x scripts/init.sh

EXPOSE 3000

CMD ["sh", "scripts/init.sh"]
