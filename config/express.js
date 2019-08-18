import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import vars from './vars';
import * as error from '../api/middleware/error';
import route from '../api/routes';

const { logs } = vars;

const app = express();

app.use(morgan(logs));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compress());

app.use(helmet());

app.use(cors());

app.use(route);

app.use(error.notFound);

app.use(error.handler);

export default app;