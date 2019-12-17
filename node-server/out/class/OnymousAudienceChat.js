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
class OnymousAudienceChat {
    constructor(text) {
        var village = new General.Village();
        this.data = {
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
            "directionality": "client to server",
            "intensionalDisclosureRange": "onymousAudience",
            "extensionalDisclosureRange": [],
            "avatar": {
                "@context": "https://werewolf.world/context/0.2/avatar.jsonld",
                "@id": "https://licos.online/state/0.2/village#3/avatar",
                "token": "eFVr3O93oLhmnE8OqTMl5VSVGIV",
                "name": "Katoh",
                "image": "https://werewolf.world/image/0.2/Regina.jpg"
            },
            "isMine": true,
            "text": {
                "@value": ">>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。",
                "@language": "ja"
            },
            "characterLimit": 140,
            "isOver": false
        };
        this.data["text"]["@value"] = text;
    }
    get() {
        var json = JSON.stringify(this.data);
        return json;
    }
}
exports.OnymousAudienceChat = OnymousAudienceChat;
//# sourceMappingURL=OnymousAudienceChat.js.map