import * as env from './default.json';

export const
    // Server Environment Variables
    NODE_ENV = process.env.NODE_ENV || env['nodeEnv'],
    HOST = process.env.HOST || env['host'],
    PORT = parseInt(process.env.PORT) || env['port']
