#!/usr/bin/env node

import {Socket} from "socket.io";

/**
 * Module dependencies.
 */

import app from '../app';
import debug from 'debug'

const _debug = debug('t1:server');
import http from 'http';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
const socketOptions = {
    cors: {
        // origin: function (origin: any, fn: any) {
        //   // const isTarget = origin !== undefined && origin.match(/^https?:\/\/www\.test\.net/) !== null;
        //   // return isTarget ? fn(null, origin) : fn('error invalid domain');
        //     return 'http://localhost:5173';
        // },
        origin: 'http://localhost:5173',
        credentials: true
    }
};

const io = require('socket.io')(server, socketOptions)

io.of('/ws').on('connection', (socket: Socket) => {
    console.log('connected');
    socket.emit('hello', 'world');

    socket.on('howdy', (arg: string) => {
        console.log(arg);
    })

    socket.on('request new user', (name: string) => {
        const age = Math.floor(Math.random() * 5) + 18
        console.log(name)

        io.of('/ws').emit('new user', {name, age});    // 全員に

        // socket.broadcast.emit('new user', name) // 本人以外に
        // socket.emit('new user', name)   // 本人に
    })
})

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

type Error1 = {
    syscall: string, code: string
}

function onError(error: Error1) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr: string | { port: string | number } | null = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        // @ts-ignore
        : 'port ' + addr.port;
    _debug('Listening on ' + bind);
}
