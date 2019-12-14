
export class MyMessageOnChat {
	chat: {
		"@context": [string, string],
		"@id": string,
		"village": {
			"@context": string,
			"@id": string,
			"id": number,
			"name": string,
			"totalNumberOfAgents": number,
			"lang": string,
			"chatSettings": {
				"@context": string,
				"@id": string,
				"limit": number,
				"characterLimit": number
			}
		},
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
		this.chat = {
			"@context": [
				"https://werewolf.world/context/0.2/base.jsonld",
				"https://werewolf.world/context/0.2/chat.jsonld"
			],
			"@id": "https://licos.online/state/0.2/village#3/playerMessage",
		
			"village": {
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
			},
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
			"isMine": true,
			"id": 12,
			"counter": 7,
			"limit": 10,
			"interval": "5s",
			"text": {
				"@value": "",
				"@language": "ja"
			},
			"characterLimit": 140,
			"isOver": false
		}
		this.chat["text"]["@value"] = text
	}
	get() {
		var json = JSON.stringify(this.chat);
		return json
	}
}
