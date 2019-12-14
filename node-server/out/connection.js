"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MyMessageOnChat_1 = require("./class/MyMessageOnChat");
class Connection {
    constructor(ws) {
        this.fs = require('fs');
        this.path = require('path');
        this.ws = require('ws');
        this.webSocket = ws;
    }
    sendMyMessageOnChat() {
        var myMessageOnChat = new MyMessageOnChat_1.MyMessageOnChat("abcdefg");
        var json = myMessageOnChat.get();
        this.webSocket.send(json);
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map