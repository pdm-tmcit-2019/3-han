"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Day_1 = require("./class/Day");
const Error_1 = require("./class/Error");
const FirstMorning_1 = require("./class/FirstMorning");
const FlavorText_1 = require("./class/FlavorText");
const Morning_1 = require("./class/Morning");
const Night_1 = require("./class/Night");
const AnonymousAudienceChat_1 = require("./class/AnonymousAudienceChat");
const OnymousAudienceChat_1 = require("./class/OnymousAudienceChat");
const PostMortem_1 = require("./class/PostMortem");
const Result_1 = require("./class/Result");
const MyMessageOnChat_1 = require("./class/MyMessageOnChat");
const TheirMessageOnChat_1 = require("./class/TheirMessageOnChat");
class Connection {
    constructor(ws) {
        this.fs = require('fs');
        this.path = require('path');
        this.ws = require('ws');
        this.webSocket = ws;
    }
    sendDay() {
        var day = new Day_1.Day("abc");
        var json = day.get();
        this.webSocket.send(json);
    }
    sendError() {
        var error = new Error_1.Error("abc");
        var json = error.get();
        this.webSocket.send(json);
    }
    sendFirstMorning() {
        var firstMorning = new FirstMorning_1.FirstMorning();
        var json = firstMorning.get();
        this.webSocket.send(json);
    }
    sendFlavorText() {
        var flavorText = new FlavorText_1.FlavorText("最初のフレーバーテキスト");
        var json = flavorText.get();
        this.webSocket.send(json);
    }
    sendMorning() {
        var morning = new Morning_1.Morning();
        var json = morning.get();
        this.webSocket.send(json);
    }
    sendNight() {
        var night = new Night_1.Night();
        var json = night.get();
        this.webSocket.send(json);
    }
    sendAnonymousAudienceChat() {
        var anonymousAudienceChat = new AnonymousAudienceChat_1.AnonymousAudienceChat("abc");
        var json = anonymousAudienceChat.get();
        this.webSocket.send(json);
    }
    sendOnymousAudienceChat() {
        var onymousAudienceChat = new OnymousAudienceChat_1.OnymousAudienceChat("abc");
        var json = onymousAudienceChat.get();
        this.webSocket.send(json);
    }
    sendPostMortem() {
        var postMortem = new PostMortem_1.PostMortem();
        var json = postMortem.get();
        this.webSocket.send(json);
    }
    sendResult() {
        var result = new Result_1.Result();
        var json = result.get();
        this.webSocket.send(json);
    }
    sendMyMessageOnChat() {
        var myMessageOnChat = new MyMessageOnChat_1.MyMessageOnChat("abcdefg");
        var json = myMessageOnChat.get();
        this.webSocket.send(json);
    }
    sendTheirMessageOnChat() {
        var theirMessageOnChat = new TheirMessageOnChat_1.TheirMessageOnChat("abcdefg");
        var json = theirMessageOnChat.get();
        this.webSocket.send(json);
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map