"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Server {
    constructor() {
        this.PORT = process.env.PORT || 8000;
        this.express = require('express');
        this.http = require('http');
        this.io = require('socket.io');
    }
    start() {
        const app = this.express();
        const server = this.http.Server(app);
        app.get('/', (req, res, next) => {
            res.send('hello world');
        });
        server.listen(this.PORT, () => {
            console.log(`server staerted. PORT:${this.PORT}`);
            console.log(`http://localhost:${this.PORT}`);
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=server.js.map