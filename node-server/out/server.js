"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlayerSQL_1 = require("./sql/PlayerSQL");
const Player_1 = require("./model/Player");
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
            ws.on('message', (message) => {
                // var data = this.fs.readFileSync(this.path.join(__dirname, '/../public/server2client/flavorText.jsonld'))
                // ws.send(data.toString())
                var obj = JSON.parse(message);
                var tmp = obj.phase;
                console.log(`Day:${obj.day},Phase:${obj.phase},MyJob:${obj.myCharacter.role.name.en},Text:${obj.text["@value"]}`);
            });
            ws.on('chat message', (message) => {
                wss.emit('chat message', message);
            });
            var player = new Player_1.Player(0, "tsuyuzaki", 2, 1);
            playerSQL.addPlayer(player);
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