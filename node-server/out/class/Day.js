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
class Day {
    constructor(text) {
        var village = new General.Village();
        var character = new General.Character();
        var role = new General.Role();
        this.data = {
            "@context": [
                "https://werewolf.world/context/0.2/base.jsonld",
                "https://werewolf.world/context/0.2/votingResult.jsonld"
            ],
            "@id": "https://licos.online/state/0.2/village#3/systemMessage",
            "village": village,
            "token": "eFVr3O93oLhmnE8OqTMl5VSVGIV",
            "phase": "day",
            "date": 1,
            "phaseTimeLimit": 180,
            "phaseStartTime": "2006-10-07T12:06:56.568+09:00",
            "serverTimestamp": "2006-10-07T12:06:56.568+09:00",
            "clientTimestamp": "2006-10-07T12:06:56.568+09:00",
            "directionality": "server to client",
            "intensionalDisclosureRange": "private",
            "extensionalDisclosureRange": [],
            "votingResultsSummary": [],
            "votingResultsDetails": [],
            "character": [character],
            "role": [role]
        };
        this.data["character"].push(character);
    }
    get() {
        // var json = JSON.stringify(this.data);
        var fileGet = new General.FileGet();
        var json = fileGet.get("noon.jsonld");
        return json;
    }
}
exports.Day = Day;
//# sourceMappingURL=Day.js.map