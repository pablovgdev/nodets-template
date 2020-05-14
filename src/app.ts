import express from 'express';
import helmet from 'helmet';
import indexController from './controllers/index.controller';
import { auth } from './middlewares/auth.middleware';

const server = express()

server.use(helmet());
server.use(express.json());
server.use('/', indexController);
server.use('/', auth);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log('Server listening on port ' + PORT));