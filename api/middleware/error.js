import httpStatus from 'http-status';

import { env } from '../../config/vars';

export const handler = (err, req, res, next) => {
    const response = {
        code: err.status,
        message: err.message || httpStatus[err.status],
        errors: err.errors,
        stack: err.stack,
    };

    if (env !== 'development') {
        delete response.stack;
    }

    res.status(err.status);
    res.json(response);
};

export const notFound = (req, res, next) => {
    const err = {
        message: 'Not found',
        status: httpStatus.NOT_FOUND,
    };
    return handler(err, req, res);
};