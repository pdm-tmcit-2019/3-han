"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Village {
    constructor() {
        this.village = {
            "@context": "https://werewolf.world/context/0.2/village.jsonld",
            "@id": "https://licos.online/state/0.2/village",
            "id": 3,
            "name": "横国の森の奥にある時代に取り残された小さな村",
            "totalNumberOfAgents": 15,
            "lang": "ja",
            "chatSettings": {
                "@context": "https://werewolf.world/context/0.2/chatSettings.jsonld",
                "@id": "https://licos.online/state/0.2/village#3/chatSettings",
                "limit": 10,
                "characterLimit": 140
            }
        };
    }
}
exports.Village = Village;
class FlavorTextData {
    constructor(text) {
        var village = new Village();
        this["@context"] = [
            "https://werewolf.world/context/0.2/base.jsonld",
            "https://werewolf.world/context/0.2/chat.jsonld"
        ];
        this["@id"] = "https://licos.online/state/0.2/village#3/flavorText#1/playerMessage";
        this["village"] = village;
        this["token"] = "eFVr3O93oLhmnE8OqTMl5VSVGIV";
        this["phase"] = "morning";
        this["date"] = 1;
        this["phaseTimeLimit"] = 600;
        this["phaseStartTime"] = "2006-10-07T12:06:56.568+09:00";
        this["serverTimestamp"] = "2006-10-07T12:06:56.568+09:00";
        this["clientTimestamp"] = "2006-10-07T12:06:56.568+09:00";
        this["directionality"] = "server to client";
        this["intensionalDisclosureRange"] = "public";
        this["extensionalDisclosureRange"] = [];
        this["agent"] = {
            "@context": "https://werewolf.world/context/0.2/agent.jsonld",
            "@id": "https://licos.online/state/0.2/village#3/agent",
            "id": 1,
            "name": {
                "en": "Catalina",
                "ja": "カタリナ"
            },
            "image": "https://werewolf.world/image/0.2/Catalina.jpg"
        };
        this["isMine"] = false;
        this["id"] = 1;
        this["counter"] = 0;
        this["limit"] = 10;
        this["interval"] = "5s";
        this["text"] = {
            "@value": text,
            "@language": "ja"
        },
            this["characterLimit"] = 140;
        this["isOver"] = false;
    }
}
exports.FlavorTextData = FlavorTextData;
class Agent {
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
        this.status = "alive";
        this.update = {
            "@id": "https://licos.online/state/0.2/village#3/agent#0/update",
            phase: "day",
            date: 1
        };
        this.isAChoice = false;
    }
}
exports.Agent = Agent;
class Role {
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
        var board = new Board();
        this.board = [board];
    }
}
exports.Role = Role;
class Board {
    constructor() {
        this["@context"] = "https://werewolf.world/context/0.2/boardResult.jsonld";
        this["@id"] = "https://licos.online/state/0.2/village#3/role#villager/board#1";
        this.agent = {
            "@context": "https://werewolf.world/context/0.2/agent.jsonld",
            "@id": "https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1",
            "id": 1,
            "name": {
                "en": "Walter",
                "ja": "ヴァルター"
            },
            "image": "https://werewolf.world/image/0.2/Walter.jpg"
        };
        this.polarity = "negative";
        this.phase = "morning";
        this.date = 1;
    }
}
class VotingResultsSummary {
    constructor(id, numberOfVotes, rankOfVotes) {
        this["@id"] = "https://licos.online/state/0.2/village#3/votingResultsSummary#1";
        this["agentToLynch"] = {
            "@context": "https://werewolf.world/context/0.2/agent.jsonld",
            "@id": "https://licos.online/state/0.2/village#3/votingResultsSummary#1/agent#1",
            "id": 1,
            "name": {
                "en": "Walter",
                "ja": "ヴァルター"
            },
            "image": "https://werewolf.world/image/0.2/Walter.jpg"
        };
        this["numberOfVotes"] = 3;
        this["rankOfVotes"] = 1;
    }
}
exports.VotingResultsSummary = VotingResultsSummary;
class VotingResultsDetails {
    constructor(source_id, target_id) {
        this["@id"] = "https://licos.online/state/0.2/village#3/votingResultsSummary#1";
        this["sourceAgent"] = {
            "@context": "https://werewolf.world/context/0.2/agent.jsonld",
            "@id": "https://licos.online/state/0.2/village#3/votingResultsSummary#1/agent#1",
            "id": 1,
            "name": {
                "en": "Walter",
                "ja": "ヴァルター"
            },
            "image": "https://werewolf.world/image/0.2/Walter.jpg"
        };
        this["targetAgent"] = {
            "@context": "https://werewolf.world/context/0.2/agent.jsonld",
            "@id": "https://licos.online/state/0.2/village#3/votingResultsDetails#1-2/agent#2",
            "id": 2,
            "name": {
                "en": "Moritz",
                "ja": "モーリッツ"
            },
            "image": "https://werewolf.world/image/0.2/Moritz.jpg"
        };
    }
}
exports.VotingResultsDetails = VotingResultsDetails;
//# sourceMappingURL=General.js.map