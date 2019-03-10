import * as jsonServer from 'json-server'
import * as fs from 'fs';
import * as https from 'https';

const server = jsonServer.create()
let router = jsonServer.router('./db.json');
let middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)

const options = {
  key: fs.readFileSync('./backend/keys/key.pem'),
  cert: fs.readFileSync('./backend/keys/cert.pem')
}

server.use(router);

https.createServer(options, server).listen(3000, () => {
   console.log('JSON Server is running: http://localhost:3000')
});

