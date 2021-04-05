import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './utils/web';
import options, { filesData } from './utils/config';


const app: express.Application = express();

app
   .use(express.json())
   .use(express.static(filesData.options.root))
   .use(cors())
   .use(morgan('combined'))
   .use('/', router);

const server: Object = app.listen(...options);

console.log(server);