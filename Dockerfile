FROM node:13
RUN mkdir /villains-web
WORKDIR /villains-web

COPY . .

RUN npm install

VOLUME '/villains-web'
CMD ["npm", "run", "serve"]