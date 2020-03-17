FROM node:13.10

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . .

CMD ng serve --configuration=docker --host 0.0.0.0
