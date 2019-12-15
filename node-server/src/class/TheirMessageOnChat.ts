import * as General from './General'

export class TheirMessageOnChat {
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
	
		"agent": {
			"@context": string,
			"@id": string,
			"id": number,
			"name": {
				"en": string,
				"ja": string
			},
			"image": string
		},
		"isMine": boolean,
		"id": number,
		"counter": number,
		"limit": number,
		"interval": string,
		"text": {
			"@value": string,
			"@language": string
		},
		"characterLimit": number,
		"isOver": boolean
	}
	constructor(text: string) {
		var village = new General.Village()
		this.data = {
			"@context": [
				"https://werewolf.world/context/0.2/base.jsonld",
				"https://werewolf.world/context/0.2/chat.jsonld"
			],
			"@id": "https://licos.online/state/0.2/village#3/playerMessage",
		
			"village": village,
			"token": "eFVr3O93oLhmnE8OqTMl5VSVGIV",
			"phase": "morning",
			"date": 1,
			"phaseTimeLimit": 600,
			"phaseStartTime": "2006-10-07T12:06:56.568+09:00",
			"serverTimestamp": "2006-10-07T12:06:56.568+09:00",
			"clientTimestamp": "2006-10-07T12:06:56.568+09:00",
			"directionality": "server to client",
			"intensionalDisclosureRange": "public",
			"extensionalDisclosureRange": [],
		
			"agent": {
				"@context": "https://werewolf.world/context/0.2/agent.jsonld",
				"@id": "https://licos.online/state/0.2/village#3/agent",
				"id": 1,
				"name": {
					"en": "Walter",
					"ja": "ヴァルター"
				},
				"image": "https://werewolf.world/image/0.2/Walter.jpg"
			},
			"isMine": false,
			"id": 12,
			"counter": 7,
			"limit": 10,
			"interval": "5s",
			"text": {
				"@value": ">>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。",
				"@language": "ja"
			},
			"characterLimit": 140,
			"isOver": false
		}
		this.data["text"]["@value"] = text
	}
	get() {
		var json = JSON.stringify(this.data);
		return json
	}
}
