import * as General from './General'

export class Morning {
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

		"votingResultsSummary": [General.VotingResultsSummary],
		"votingResultsDetails": [General.VotingResultsDetails],
	
		"agent": [General.Agent],
		"role": [General.Role]
	}

	constructor() {
		var village = new General.Village()
		var votingResultsSummary = new General.VotingResultsSummary(1, 2, 2)
		var votingResultsDetails = new General.VotingResultsDetails(1, 2)
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
			"phase": "morning",
			"date": 1,
			"phaseTimeLimit": 600,
			"phaseStartTime": "2006-10-07T12:06:56.568+09:00",
			"serverTimestamp": "2006-10-07T12:06:56.568+09:00",
			"clientTimestamp": "2006-10-07T12:06:56.568+09:00",
			"directionality": "server to client",
			"intensionalDisclosureRange": "private",
			"extensionalDisclosureRange": [],
		
			"votingResultsSummary": [votingResultsSummary],
			"votingResultsDetails": [votingResultsDetails],
		
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
