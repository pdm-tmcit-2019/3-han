"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
class Game {
    constructor(maxDay) {
        this.day = 1;
        this.maxDay = maxDay;
    }
}
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
            const connection = new connection_1.Connection(ws);
            console.log('Connect WebSocket client.');
            processStart(connection);
            ws.on('message', (message) => {
                console.log(message);
            });
            ws.on('chat message', (message) => {
                wss.emit('chat message', message);
            });
        });
        server.listen(this.PORT, () => {
            console.log(`server started. PORT:${this.PORT}`);
            console.log(`http://localhost:${this.PORT}`);
        });
    }
}
function processStart(con) {
    con.sendFlavorText();
    con.sendFirstMorning();
    console.log("Day1");
    setTimeout(noonPhase, 20000, con);
    setTimeout(sendMyMessageOnChat, 5000, con);
    setTimeout(sendTheirMessageOnChat, 10000, con);
}
function morningPhase(con) {
    con.sendFlavorText();
    con.sendMorning();
    var str = "Day" + game.day.toString();
    console.log(str);
    setTimeout(noonPhase, 20000, con);
    setTimeout(sendMyMessageOnChat, 5000, con);
    setTimeout(sendTheirMessageOnChat, 10000, con);
}
function noonPhase(con) {
    con.sendNoon();
    setTimeout(nightPhase, 10000, con);
}
function nightPhase(con) {
    con.sendNight();
    if (game.day >= game.maxDay) {
        setTimeout(resultPhase, 10000, con);
    }
    else {
        game.day++;
        setTimeout(morningPhase, 10000, con);
    }
}
function resultPhase(con) {
    con.sendResult();
    setTimeout(postMortemPhase, 10000, con);
}
function postMortemPhase(con) {
    con.sendPostMortem();
}
function sendMyMessageOnChat(con) {
    con.sendMyMessageOnChat();
}
function sendTheirMessageOnChat(con) {
    con.sendTheirMessageOnChat();
}
const game = new Game(3);
const server = new Server();
server.start();
//# sourceMappingURL=server.js.map