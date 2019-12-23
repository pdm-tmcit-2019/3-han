import * as General from './General'

export class Noon {
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
	
		"character": [General.Character],
		"role": [General.Role]
	}

	constructor(text: string) {
		var village = new General.Village()
		var character = new General.Character()
		var role = new General.Role()
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
		}
		this.data["character"].push(character)
	}
	get() {
		// var json = JSON.stringify(this.data);
		var fileGet = new General.FileGet()
		var json = fileGet.get("noon.jsonld")
		return json
	}
}
