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
class Error {
    constructor(content) {
        var village = new General.Village();
        this.data = {
            "@context": [
                "https://werewolf.world/village/context/0.3/base.jsonld",
                "https://werewolf.world/village/context/0.3/error.jsonld"
            ],
            "@id": "https://licos.online/state/0.3/village#3/errorMessage",
            "village": village,
            "token": "3F2504E0-4F89-11D3-9A0C-0305E82C3301",
            "phase": "morning",
            "day": 2,
            "phaseTimeLimit": 600,
            "phaseStartTime": "2006-10-07T12:06:56.568+09:00",
            "serverTimestamp": "2006-10-07T12:06:56.568+09:00",
            "clientTimestamp": "2006-10-07T12:06:56.568+09:00",
            "directionality": "server to client",
            "intensionalDisclosureRange": "private",
            "extensionalDisclosureRange": [],
            "content": {
                "en": "Timeout: ignored",
                "ja": "タイムアウト：　無視されました"
            },
            "severity": "error",
            "source": "{\"token\": \"eFVr3O93oLhmnE8OqTMl5VSVGIV\"}",
            "isFromServer": true
        };
        this.data["content"]["ja"] = content;
    }
    get() {
        // var json = JSON.stringify(this.data);
        var fileGet = new General.FileGet();
        var json = fileGet.get("error.jsonld");
        return json;
    }
}
exports.Error = Error;
//# sourceMappingURL=Error.js.map