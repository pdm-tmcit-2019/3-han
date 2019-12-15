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
class ResultAgent {
    constructor() {
        this["@context"] = "https://werewolf.world/context/0.2/agent.jsonld";
        this["@id"] = "https://licos.online/state/0.2/village#3/agent#0";
        this.isMine = false;
        this.name = {
            "en": "Gert",
            "ja": "ゲルト"
        };
        this.image = "https://licos.online/image/0.2/Gert.jpg";
        this.id = 0;
        this.role = {
            "@context": "https://werewolf.world/context/0.2/role.jsonld",
            "@id": "https://licos.online/state/0.2/village#3/agent#0/role",
            "name": {
                "en": "Villager",
                "ja": "村人"
            },
            "image": "https://werewolf.world/image/0.2/villager.jpg"
        };
        this.status = "alive";
        this.result = "win";
        this.avatar = {
            "@context": "https://werewolf.world/context/0.2/avatar.jsonld",
            "@id": "https://licos.online/state/0.2/village#3/agent#0/avatar",
            "token": "eFVr3O93oLhmnE8OqTMl5VSVGIV",
            "name": "Sato",
            "image": "https://werewolf.world/image/0.2/Nicholas.jpg"
        };
    }
}
class ResultRole {
    constructor() {
        this["@context"] = "https://werewolf.world/context/0.2/role.jsonld";
        this["@id"] = "https://licos.online/state/0.2/village#3/role#villager";
        this.isMine = false;
        this.name = {
            "en": "Villager",
            "ja": "村人"
        };
        this.image = "https://werewolf.world/image/0.2/villager.jpg";
        this.numberOfAgents = 6;
        var resultRoleAgent = new ResultRoleAgent();
        this.agent = [resultRoleAgent];
    }
}
class ResultRoleAgent {
    constructor() {
        this["@context"] = "https://werewolf.world/context/0.2/agent.jsonld";
        this["@id"] = "https://licos.online/state/0.2/village#3/role#villager/agent#0";
        this["id"] = 0;
        this["name"] = {
            "en": "Gert",
            "ja": "ゲルト"
        };
        this["image"] = "https://werewolf.world/image/0.2/Gert.jpg";
    }
}
class Result {
    constructor() {
        var village = new General.Village();
        var agent = new ResultAgent();
        var role = new ResultRole();
        this.data = {
            "@context": [
                "https://werewolf.world/context/0.2/base.jsonld",
                "https://werewolf.world/context/0.2/votingResult.jsonld"
            ],
            "@id": "https://licos.online/state/0.2/village#3/systemMessage",
            "village": village,
            "token": "eFVr3O93oLhmnE8OqTMl5VSVGIV",
            "phase": "result",
            "date": -1,
            "phaseTimeLimit": -1,
            "phaseStartTime": "2006-10-07T12:06:56.568+09:00",
            "serverTimestamp": "2006-10-07T12:06:56.568+09:00",
            "clientTimestamp": "2006-10-07T12:06:56.568+09:00",
            "directionality": "server to client",
            "intensionalDisclosureRange": "private",
            "extensionalDisclosureRange": [],
            "votingResultsSummary": [],
            "votingResultsDetails": [],
            "agent": [agent],
            "role": [role]
        };
        this.data["agent"].push(agent);
    }
    get() {
        var json = JSON.stringify(this.data);
        return json;
    }
}
exports.Result = Result;
//# sourceMappingURL=Result.js.map