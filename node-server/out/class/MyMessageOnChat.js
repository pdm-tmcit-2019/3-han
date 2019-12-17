"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const General = __importStar(require("./General"));
class MyMessageOnChat {
    constructor(text) {
        var village = new General.Village();
        this.chat = {
            "@context": [
                "https://werewolf.world/context/0.2/base.jsonld",
                "https://werewolf.world/context/0.2/chat.jsonld"
            ],
            "@id": "https://licos.online/state/0.2/village#3/playerMessage",
            "village": village,
            "token": "eFVr3O93oLhmnE8OqTMl5VSVGIV",
            "phase": "morning",
            "date": 1,
            "phaseTimeLimit": 600,
            "phaseStartTime": "2006-10-07T12:06:56.568+09:00",
            "serverTimestamp": "2006-10-07T12:06:56.568+09:00",
            "clientTimestamp": "2006-10-07T12:06:56.568+09:00",
            "directionality": "server to client",
            "intensionalDisclosureRange": "public",
            "extensionalDisclosureRange": [],
            "agent": {
                "@context": "https://werewolf.world/context/0.2/agent.jsonld",
                "@id": "https://licos.online/state/0.2/village#3/agent",
                "id": 1,
                "name": {
                    "en": "Walter",
                    "ja": "ヴァルター"
                },
                "image": "https://werewolf.world/image/0.2/Walter.jpg"
            },
            "isMine": true,
            "id": 12,
            "counter": 7,
            "limit": 10,
            "interval": "5s",
            "text": {
                "@value": "",
                "@language": "ja"
            },
            "characterLimit": 140,
            "isOver": false
        };
        this.chat["text"]["@value"] = text;
    }
    get() {
        var json = JSON.stringify(this.chat);
        return json;
    }
}
exports.MyMessageOnChat = MyMessageOnChat;
//# sourceMappingURL=MyMessageOnChat.js.map