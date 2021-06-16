#!/usr/bin/env node

/**
 * Module dependencies.
 */

import http from 'http';

import * as env from '../config/environment';
import { app } from '../app';
/**
 * Get port from environment and store in Express.
 */
app.set('port', env.PORT);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(env.PORT, env.HOST);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    console.log('Server is listening on http://' + env.HOST + ':' + env.PORT);
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(err) {
    console.error(err.message);
    process.exit(1);
}


export { server };