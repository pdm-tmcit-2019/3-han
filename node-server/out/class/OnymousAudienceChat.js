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
                "https://werewolf.world/village/context/0.3/base.jsonld",
                "https://werewolf.world/village/context/0.3/chat.jsonld"
            ],
            "@id": "https://licos.online/state/0.3/village#3/chatMessage",
            "village": village,
            "token": "3F2504E0-4F89-11D3-9A0C-0305E82C3301",
            "phase": "morning",
            "day": 1,
            "phaseTimeLimit": 600,
            "phaseStartTime": "2006-10-07T12:06:56.568+09:00",
            "serverTimestamp": "2006-10-07T12:06:56.568+09:00",
            "clientTimestamp": "2006-10-07T12:06:56.568+09:00",
            "directionality": "server to client",
            "intensionalDisclosureRange": "onymousAudience",
            "extensionalDisclosureRange": [],
            "avatar": {
                "@context": "https://werewolf.world/village/context/0.3/avatar.jsonld",
                "@id": "https://licos.online/state/0.3/village#3/avatar",
                "token": "3F2504E0-4F89-11D3-9A0C-0305E82C3301",
                "name": "Katoh",
                "image": "https://werewolf.world/image/0.3/character_icons/50x50/c_50x50.png"
            },
            "isMine": true,
            "text": {
                "@value": ">>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。",
                "@language": "ja"
            },
            "maxLengthOfUnicodeCodePoints": 140,
            "isFromServer": true
        };
        this.data["text"]["@value"] = text;
    }
    get() {
        // var json = JSON.stringify(this.data);
        var fileGet = new General.FileGet();
        var json = fileGet.get("onymousAudienceChat.jsonld");
        return json;
    }
}
exports.OnymousAudienceChat = OnymousAudienceChat;
//# sourceMappingURL=OnymousAudienceChat.js.map