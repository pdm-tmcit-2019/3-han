import * as General from './General'

export class PostMortem {
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
	
		"agent": [General.Agent],
		"role": [General.Role]
	}

	constructor() {
		var village = new General.Village()
		var agent = new General.Agent()
		var role = new General.Role()
		this.data = {
			"@context": [
				"https://werewolf.world/context/0.2/base.jsonld",
				"https://werewolf.world/context/0.2/votingResult.jsonld"
			],
			"@id": "https://licos.online/state/0.2/village#3/systemMessage",
		
			"village": village,
			"token": "eFVr3O93oLhmnE8OqTMl5VSVGIV",
			"phase": "post mortem",
			"date": 0,
			"phaseTimeLimit": 86400,
			"phaseStartTime": "2006-10-07T12:06:56.568+09:00",
			"serverTimestamp": "2006-10-07T12:06:56.568+09:00",
			"clientTimestamp": "2006-10-07T12:06:56.568+09:00",
			"directionality": "server to client",
			"intensionalDisclosureRange": "public",
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
