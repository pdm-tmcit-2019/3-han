import * as General from './General'

export class OnymousAudienceChat {
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
		"avatar": {
			"@context": string,
			"@id": string,
			"token": string,
			"name": string,
			"image": string
		},
		"isMine": boolean,
		"text": {
			"@value": string,
			"@language": string
		},
		"maxLengthOfUnicodeCodePoints": number,
		"isFromServer": boolean
	}
	constructor(text: string) {
		var village = new General.Village()
		this.data = {
			"@context": [
				"https://werewolf.world/village/context/0.3/base.jsonld",
				"https://werewolf.world/village/context/0.3/chat.jsonld"
			],
			"@id": "https://licos.online/state/0.3/village#3/chatMessage",
			"village": village,
			"token": "3F2504E0-4F89-11D3-9A0C-0305E82C3301",
			"phase": "morning",
			"day": 1,
			"phaseTimeLimit": 600,
			"phaseStartTime": "2006-10-07T12:06:56.568+09:00",
			"serverTimestamp": "2006-10-07T12:06:56.568+09:00",
			"clientTimestamp": "2006-10-07T12:06:56.568+09:00",
			"directionality": "server to client",
			"intensionalDisclosureRange": "onymousAudience",
			"extensionalDisclosureRange": [],
			"avatar": {
				"@context": "https://werewolf.world/village/context/0.3/avatar.jsonld",
				"@id": "https://licos.online/state/0.3/village#3/avatar",
				"token": "3F2504E0-4F89-11D3-9A0C-0305E82C3301",
				"name": "Katoh",
				"image": "https://werewolf.world/image/0.3/character_icons/50x50/c_50x50.png"
			},
			"isMine": true,
			"text": {
				"@value": ">>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。",
				"@language": "ja"
			},
			"maxLengthOfUnicodeCodePoints": 140,
			"isFromServer": true
		}
		this.data["text"]["@value"] = text
	}
	get() {
		// var json = JSON.stringify(this.data);
		var fileGet = new General.FileGet()
		var json = fileGet.get("onymousAudienceChat.jsonld")
		return json
	}
}
