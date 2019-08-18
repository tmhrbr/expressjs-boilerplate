import 'dotenv/config';
import vars from './config/vars';
import logger from './config/logger';
import app from './config/express';

const { port, env} = vars;

app.listen(port, () => logger.info(`Running on port "${port}" in "${env}"`));
