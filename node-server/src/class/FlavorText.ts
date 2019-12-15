import * as General from './General'

export class FlavorText {
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
	
		"flavorText": [General.FlavorTextData]
	}
	constructor(text: string) {
		var village = new General.Village()
		var flavorTextData = new General.FlavorTextData(text)
		this.data = {
			"@context": [
				"https://werewolf.world/context/0.2/base.jsonld",
				"https://werewolf.world/context/0.2/flavorText.jsonld"
			],
			"@id": "https://licos.online/state/0.2/village#3/flavorTextMessage",
		
			"village": village,
			"token": "eFVr3O93oLhmnE8OqTMl5VSVGIV",
			"phase": "flavor text",
			"date": 1,
			"phaseTimeLimit": 600,
			"phaseStartTime": "2006-10-07T12:06:56.568+09:00",
			"serverTimestamp": "2006-10-07T12:06:56.568+09:00",
			"clientTimestamp": "2006-10-07T12:06:56.568+09:00",
			"directionality": "server to client",
			"intensionalDisclosureRange": "public",
			"extensionalDisclosureRange": [],
		
			"flavorText": [flavorTextData]
		}
		this.data["flavorText"].push(flavorTextData)
	}
	get() {
		var json = JSON.stringify(this.data);
		return json
	}
}
