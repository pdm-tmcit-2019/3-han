import * as General from './General'

export class PostMortem {
	fs = require('fs')
	data: {
		"@context": [string, string],
		"@id": string,
		"village": General.Village,
		"token": string,
		"phase": string,
		"day": number,
		"phaseTimeLimit": number,
		"phaseStartTime": string,
		"serverTimestamp": string,
		"clientTimestamp": string,
		"directionality": string,
		"intensionalDisclosureRange": string,
		"extensionalDisclosureRange": [],

		"votingResultsSummary": [],
		"votingResultsDetails": [],
	
		"character": [General.Character],
		"role": [General.Role]
	}

	constructor() {
		var village = new General.Village()
		var character = new General.Character()
		var role = new General.Role()
		this.data = {
			"@context": [
				"https://werewolf.world/village/context/0.3/base.jsonld",
				"https://werewolf.world/village/context/0.3/votingResult.jsonld"
			],
			"@id": "https://licos.online/state/0.3/village#3/systemMessage",
			"village": village,
			"token": "3F2504E0-4F89-11D3-9A0C-0305E82C3301",
			"phase": "post-mortem discussion",
			"day": 0,
			"phaseTimeLimit": 86400,
			"phaseStartTime": "2006-10-07T12:06:56.568+09:00",
			"serverTimestamp": "2006-10-07T12:06:56.568+09:00",
			"clientTimestamp": "2006-10-07T12:06:56.568+09:00",
			"directionality": "server to client",
			"intensionalDisclosureRange": "public",
			"extensionalDisclosureRange": [],
			"votingResultsSummary": [],
			"votingResultsDetails": [],
		
			"character": [character],
			"role": [role]
		}
		this.data["character"].push(character)
	}
	get() {
		// var json = JSON.stringify(this.data);
		var fileGet = new General.FileGet()
		var json = fileGet.get("postMortemDiscussion.jsonld")
		return json
	}
}
