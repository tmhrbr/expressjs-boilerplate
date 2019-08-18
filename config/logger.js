import winston from 'winston';
import vars from './vars';

const { env } = vars;

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: 'log/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'log/combined.log' }),
    ],
});

if (env !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

logger.stream = {
    write: (message) => {
        logger.info(message.trim());
    },
};

export default logger;