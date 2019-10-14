"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Server {
    constructor() {
        this.PORT = process.env.PORT || 8000;
        this.express = require('express');
        this.http = require('http');
        this.io = require('socket.io');
        this.fs = require('fs');
    }
    start() {
        const app = this.express();
        const server = this.http.Server(app);
        app.use(this.express.static('public'));
        app.get('/', (req, res, next) => {
            console.log(`get`);
            var data = this.fs.readFileSync("public/index.htm");
            res.writeHead(200, {
                'Content-Type': 'charset=utf-8',
                'Cache-Control': 'no-cache'
            });
            res.end(data);
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