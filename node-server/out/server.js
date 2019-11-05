"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Server {
    constructor() {
        this.PORT = process.env.PORT || 8000;
        this.express = require('express');
        this.http = require('http');
        this.io = require('socket.io');
        this.fs = require('fs');
        this.path = require('path');
        this.ws = require('ws');
    }
    start() {
        const app = this.express();
        const server = this.http.createServer(app);
        const wss = new this.ws.Server({ server });
        app.use(this.express.static(this.path.join(__dirname, '/../public')));
        app.get('/', (req, res, next) => {
            var data = this.fs.readFileSync(this.path.join(__dirname, '/../public/index.htm'));
            res.end(data);
        });
        app.get('/test', (req, res, next) => {
            var data = this.fs.readFileSync(this.path.join(__dirname, '/../public/index.htm'));
            res.end(data);
        });
        wss.on('connection', (ws) => {
            ws.on('message', (message) => {
                ws.send(message);
            });
            console.log('Connect WebSocket client.');
        });
        server.listen(this.PORT, () => {
            console.log(`server started. PORT:${this.PORT}`);
            console.log(`http://localhost:${this.PORT}`);
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=server.js.map