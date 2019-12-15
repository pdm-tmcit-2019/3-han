import * as General from './General'

class ResultAgent {
	"@context": string
	"@id": string
	isMine: boolean
	name: {
		en: string,
		ja: string
	}
	image: string
	id: number
	role: {
		"@context": string,
		"@id": string,
		name: {
			en: string,
			ja: string
		},
		image: string
	}
	status: string
	result: string
	avatar: {
		"@context": string,
		"@id": string,
		token: string,
		name: string,
		image: string
	}
	constructor() {
		this["@context"] = "https://werewolf.world/context/0.2/agent.jsonld"
		this["@id"] = "https://licos.online/state/0.2/village#3/agent#0"
		this.isMine = false
		this.name = {
			"en": "Gert",
			"ja": "ゲルト"
		}
		this.image = "https://licos.online/image/0.2/Gert.jpg"
		this.id = 0
		this.role = {
			"@context": "https://werewolf.world/context/0.2/role.jsonld",
			"@id": "https://licos.online/state/0.2/village#3/agent#0/role",
			"name": {
				"en": "Villager",
				"ja": "村人"
			},
			"image": "https://werewolf.world/image/0.2/villager.jpg"
		}
		this.status = "alive"
		this.result = "win"
		this.avatar = {
			"@context": "https://werewolf.world/context/0.2/avatar.jsonld",
			"@id": "https://licos.online/state/0.2/village#3/agent#0/avatar",
			"token": "eFVr3O93oLhmnE8OqTMl5VSVGIV",
			"name": "Sato",
			"image": "https://werewolf.world/image/0.2/Nicholas.jpg"
		}
	}
}

class ResultRole {
	"@context": string
	"@id": string
	"isMine": boolean
	"name": {
		"en": string,
		"ja": string
	}
	"image": string
	"numberOfAgents": number
	"agent": [ResultRoleAgent]
	constructor() {
		this["@context"] = "https://werewolf.world/context/0.2/role.jsonld"
		this["@id"] = "https://licos.online/state/0.2/village#3/role#villager"
		this.isMine = false
		this.name = {
			"en": "Villager",
			"ja": "村人"
		}
		this.image = "https://werewolf.world/image/0.2/villager.jpg"
		this.numberOfAgents = 6
		var resultRoleAgent = new ResultRoleAgent()
		this.agent = [resultRoleAgent]
	}
}

class ResultRoleAgent {
	"@context": string
	"@id": string
	id: number
	name: {
		en: string,
		ja: string
	}
	image: string
	constructor() {
		this["@context"] = "https://werewolf.world/context/0.2/agent.jsonld"
		this["@id"] = "https://licos.online/state/0.2/village#3/role#villager/agent#0"
		this["id"] = 0
		this["name"] = {
			"en": "Gert",
			"ja": "ゲルト"
		}
		this["image"] = "https://werewolf.world/image/0.2/Gert.jpg"
	}
}

export class Result {
	data: {
		"@context": [string, string],
		"@id": string,
		"village": General.Village,
		"token": string,
		"phase": string,
		"date": number,
		"phaseTimeLimit": number,
		"phaseStartTime": string,
		"serverTimestamp": string,
		"clientTimestamp": string,
		"directionality": string,
		"intensionalDisclosureRange": string,
		"extensionalDisclosureRange": [],

		"votingResultsSummary": [],
		"votingResultsDetails": [],
	
		"agent": [ResultAgent],
		"role": [ResultRole]
	}

	constructor() {
		var village = new General.Village()
		var agent = new ResultAgent()
		var role = new ResultRole()
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
		}
		this.data["agent"].push(agent)
	}
	get() {
		var json = JSON.stringify(this.data);
		return json
	}
}
