"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlayerSQL_1 = require("./sql/PlayerSQL");
const connection_1 = require("./connection");
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
        const playerSQL = new PlayerSQL_1.PlayerSQL();
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
            const connection = new connection_1.Connection(ws);
            ws.on('message', (message) => {
                // var obj = JSON.parse(message)
                // console.log(`Day:${obj.day},Phase:${obj.phase},MyJob:${obj.myCharacter.role.name.en},Text:${obj.text["@value"]}`)
                // connection.sendMyMessageOnChat()
                // connection.sendDay()
                switch (message) {
                    case 'Noon':
                        connection.sendNoon();
                        break;
                    case 'Error':
                        connection.sendError();
                        break;
                    case 'FirstMorning':
                        connection.sendFirstMorning();
                        break;
                    case 'FlavorText':
                        connection.sendFlavorText();
                        break;
                    case 'Morning':
                        connection.sendMorning();
                        break;
                    case 'Night':
                        connection.sendNight();
                        break;
                    case 'AnonymousAudienceChat':
                        connection.sendAnonymousAudienceChat();
                        break;
                    case 'OnymousAudienceChat':
                        connection.sendOnymousAudienceChat();
                        break;
                    case 'PostMortem':
                        connection.sendPostMortem();
                        break;
                    case 'Result':
                        connection.sendResult();
                        break;
                    case 'MyMessageOnChat':
                        connection.sendMyMessageOnChat();
                        break;
                    case 'TheirMessageOnChat':
                        connection.sendTheirMessageOnChat();
                        break;
                    default:
                        break;
                }
            });
            ws.on('chat message', (message) => {
                wss.emit('chat message', message);
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