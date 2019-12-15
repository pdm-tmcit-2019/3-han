
export class Error {
	data: {
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

		"content": {
			"en": string,
			"ja": string
		},
		"severity": string,
		"source": string
	}
	constructor(content: string) {
		this.data = {
			"@context": [
				"https://werewolf.world/context/0.2/base.jsonld",
				"https://werewolf.world/context/0.2/error.jsonld"
			],
			"@id": "https://licos.online/state/0.2/village#3/errorMessage",
		
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
			"date": 2,
			"phaseTimeLimit": 600,
			"phaseStartTime": "2006-10-07T12:06:56.568+09:00",
			"serverTimestamp": "2006-10-07T12:06:56.568+09:00",
			"clientTimestamp": "2006-10-07T12:06:56.568+09:00",
			"directionality": "server to client",
			"intensionalDisclosureRange": "private",
			"extensionalDisclosureRange": [],
			
			"content": {
				"en": "Timeout: ignored",
				"ja": "タイムアウト：　無視されました"
			},
			"severity": "error",
			"source": "{\"token\": \"eFVr3O93oLhmnE8OqTMl5VSVGIV\"}"
		}
		this.data["content"]["ja"] = content
	}
	get() {
		var json = JSON.stringify(this.data);
		return json
	}
}
