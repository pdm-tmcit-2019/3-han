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
class ResultCharacter {
    constructor() {
        this["@context"] = "https://werewolf.world/village/context/0.3/character.jsonld";
        this["@id"] = "https://licos.online/state/0.3/village#3/character#1";
        this.isMine = true;
        this.name = {
            "en": "Adil",
            "ja": "アーディル"
        };
        this.image = "https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png";
        this.id = 1;
        this.role = {
            "@context": "https://werewolf.world/village/context/0.3/role.jsonld",
            "@id": "https://licos.online/state/0.3/village#3/character#1/role",
            "name": {
                "en": "Seer",
                "ja": "占い師"
            },
            "image": "https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png"
        };
        this.status = "alive";
        this.result = "win";
        this.avatar = {
            "@context": "https://werewolf.world/village/context/0.3/avatar.jsonld",
            "@id": "https://licos.online/state/0.3/village#3/character#1/avatar",
            "token": "3F2504E0-4F89-11D3-9A0C-0305E82C3302",
            "name": "Suzuki",
            "image": "https://werewolf.world/image/0.3/character_icons/50x50/c_50x50.png"
        };
    }
}
class ResultRole {
    constructor() {
        this["@context"] = "https://werewolf.world/village/context/0.3/role.jsonld";
        this["@id"] = "https://licos.online/state/0.3/village#3/role#villager";
        this.isMine = false;
        this.name = {
            "en": "Villager",
            "ja": "村人"
        };
        this.image = "https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png";
        this.numberOfPlayers = 6;
        var resultRoleCharacter = new ResultRoleCharacter();
        this.character = [resultRoleCharacter];
    }
}
class ResultRoleCharacter {
    constructor() {
        this["@context"] = "https://werewolf.world/village/context/0.3/character.jsonld";
        this["@id"] = "https://licos.online/state/0.3/village#3/role#villager/character#15";
        this["id"] = 15;
        this["name"] = {
            "en": "Ryan",
            "ja": "ライアン"
        };
        this["image"] = "https://werewolf.world/image/0.3/character_icons/50x50/r_50x50.png";
    }
}
class Result {
    constructor() {
        var village = new General.Village();
        var character = new ResultCharacter();
        var role = new ResultRole();
        this.data = {
            "@context": [
                "https://werewolf.world/village/context/0.3/base.jsonld",
                "https://werewolf.world/village/context/0.3/votingResult.jsonld"
            ],
            "@id": "https://licos.online/state/0.3/village#3/systemMessage",
            "village": village,
            "token": "3F2504E0-4F89-11D3-9A0C-0305E82C3301",
            "phase": "result",
            "day": -1,
            "phaseTimeLimit": -1,
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
        var json = fileGet.get("result.jsonld");
        return json;
    }
}
exports.Result = Result;
//# sourceMappingURL=Result.js.map