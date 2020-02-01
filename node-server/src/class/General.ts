import * as express from 'express'

export class FileGet {
	express = require('express')
	fs = require('fs')
	path = require('path')
	constructor() {}
	get(filename: string) {
		const app = this.express()
		app.use(this.express.static(this.path.join(__dirname, '/../../public')))
		var str = '/../../public/server2client/' + filename
		var data = this.fs.readFileSync(this.path.join(__dirname, str))
		return data.toString()
	}
}

export class Village {
	"village": {
		"@context": string,
		"@id": string,
		"id": number,
		"name": string,
		"totalNumberOfPlayers": number,
		"language": string,
		"chatSettings": {
			"@context": string,
			"@id": string,
			"maxNumberOfChatMessages": number,
			"maxLengthOfUnicodeCodePoints": number
		}
	}
	constructor() {
		this.village = {
			"@context": "https://werewolf.world/village/context/0.3/village.jsonld",
			"@id": "https://licos.online/state/0.3/village",
			"id": 3,
			"name": "Fearwick",
			"totalNumberOfPlayers": 15,
			"language": "ja",
			"chatSettings": {
				"@context": "https://werewolf.world/village/context/0.3/chatSettings.jsonld",
				"@id": "https://licos.online/state/0.3/village#3/chatSettings",
				"maxNumberOfChatMessages": 10,
				"maxLengthOfUnicodeCodePoints": 140
			}
		}
	}
}

export class FlavorTextData {
	"@context": [string, string]
	"@id": string
	"village": Village
	"token": string
	"phase": string
	"day": number
	"phaseTimeLimit": number
	"phaseStartTime": string
	"serverTimestamp": string
	"clientTimestamp": string
	"directionality": string
	"intensionalDisclosureRange": string
	"extensionalDisclosureRange": []
	"character": {
		"@context": string,
		"@id": string,
		"id": number,
		"name": {
			"en": string,
			"ja": string
		},
		"image": string
	}
	"isMine": boolean
	"id": number
	"counter": number
	"maxNumberOfChatMessages": number
	"interval": string
	"text": {
		"@value": string,
		"@language": string
	}
	"maxLengthOfUnicodeCodePoints": number
	"isOver": boolean
	
	constructor(text: string) {
		var village = new Village()
		this["@context"] = [
			"https://werewolf.world/village/context/0.3/base.jsonld",
			"https://werewolf.world/village/context/0.3/chat.jsonld"
		]
		this["@id"] = "https://licos.online/state/0.3/village#3/chatMessage"
		this["village"] = village
		this["token"] = "3F2504E0-4F89-11D3-9A0C-0305E82C3301"
		this["phase"] = "morning"
		this["day"] = 1
		this["phaseTimeLimit"] = 600
		this["phaseStartTime"] = "2006-10-07T12:06:56.568+09:00"
		this["serverTimestamp"] = "2006-10-07T12:06:56.568+09:00"
		this["clientTimestamp"] = "2006-10-07T12:06:56.568+09:00"
		this["directionality"] = "server to client"
		this["intensionalDisclosureRange"] = "public"
		this["extensionalDisclosureRange"] = []
		this["character"] = {
			"@context": "https://werewolf.world/village/context/0.3/character.jsonld",
			"@id": "https://licos.online/state/0.3/village#3/character",
			"id": 1,
			"name": {
				"en": "Valeria",
				"ja": "ヴァレリア"
			},
			"image": "https://werewolf.world/image/0.3/character_icons/50x50/v_50x50.png"
		}
		this["isMine"] = false
		this["id"] = 1
		this["counter"] = 0
		this["maxNumberOfChatMessages"] = 10
		this["interval"] = "5s"
		this["text"] = {
			"@value": text,
			"@language": "ja"
		},
		this["maxLengthOfUnicodeCodePoints"] = 140
		this["isOver"] = false
	}
}

export class Character {
	"@context": string
	"@id": string
	isMine: boolean
	name: {
		en: string
		ja: string
	}
	image: string
	id: number
	status: string
	update: {
		"@id": string
		phase: string
		day: number
	}
	isAChoice: boolean
	constructor() {
		this["@context"] = "https://werewolf.world/village/context/0.3/character.jsonld"
		this["@id"] = "https://licos.online/state/0.3/village#3/character#1"
		this.isMine = true
		this.name = {
			"en": "Adil",
			"ja": "アーディル"
		}
		this.image = "https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png"
		this.id = 1
		this.status = "alive"
		this.update = {
			"@id": "https://licos.online/state/0.3/village#3/character#1/update",
			phase: "morning",
			day: 1
		}
		this.isAChoice = false
	}
}

export class Role {
	"@context": string
	"@id": string
	"isMine": boolean
	"name": {
		"en": string,
		"ja": string
	}
	"image": string
	"numberOfPlayers": number
	"board": [Board]
	constructor() {
		this["@context"] = "https://werewolf.world/village/context/0.3/role.jsonld"
		this["@id"] = "https://licos.online/state/0.3/village#3/role#villager"
		this.isMine = false
		this.name = {
			"en": "Villager",
			"ja": "村人"
		}
		this.image = "https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png"
		this.numberOfPlayers = 6
		var board = new Board()
		this.board = [board]
	}
}

class Board {
	"@context": string
	"@id": string
	"character": {
		"@context": string,
		"@id": string,
		"id": number,
		"name": {
			"en": string,
			"ja": string
		},
		"image": string
	}
	"polarity": string
	"phase": string
	"day": number
	constructor() {
		this["@context"] = "https://werewolf.world/village/context/0.3/boardResult.jsonld"
		this["@id"] = "https://licos.online/state/0.3/village#3/role#villager/board#1"
		this.character = {
			"@context": "https://werewolf.world/village/context/0.3/character.jsonld",
			"@id": "https://licos.online/state/0.3/village#3/role#villager/board#1/character#1",
			"id": 1,
			"name": {
				"en": "Adil",
				"ja": "アーディル"
			},
			"image": "https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png"
		}
		this.polarity = "negative"
		this.phase = "morning"
		this.day = 1
	}
}

export class VotingResultsSummary {
	"@id": string
	"characterToPutToDeath": {
		"@context": string,
		"@id": string,
		"id": number,
		"name": {
			"en": string,
			"ja": string
		},
		"image": string
	}
	"numberOfVotes": number
	"rankOfVotes": number
	constructor(id: number, numberOfVotes: number, rankOfVotes: number) {
		this["@id"] = "https://licos.online/state/0.3/village#3/votingResultsSummary#1"
		this["characterToPutToDeath"] = {
			"@context": "https://werewolf.world/village/context/0.3/character.jsonld",
			"@id": "https://licos.online/state/0.3/village#3/votingResultsSummary#1/character#1",
			"id": 1,
			"name": {
				"en": "Walter",
				"ja": "ヴァルター"
			},
			"image": "https://werewolf.world/image/0.3/character_icons/50x50/c_50x50.png"
		}
		this["numberOfVotes"] = 3
		this["rankOfVotes"] = 1
	}
}

export class VotingResultsDetails {
	"@id": string
	"sourcePlayer": {
		"@context": string,
		"@id": string,
		"id": number,
		"name": {
			"en": string,
			"ja": string
		},
		"image": string
	}
	"targetPlayer": {
		"@context": string,
		"@id": string,
		"id": number,
		"name": {
			"en": string,
			"ja": string
		},
		"image": string
	}
	constructor(source_id: number, target_id: number) {
		this["@id"] = "https://licos.online/state/0.3/village#3/votingResultsSummary#1"
		this["sourcePlayer"] = {
			"@context": "https://werewolf.world/village/context/0.3/character.jsonld",
			"@id": "https://licos.online/state/0.3/village#3/votingResultsSummary#1/character#1",
			"id": 1,
			"name": {
				"en": "Walter",
				"ja": "ヴァルター"
			},
			"image": "https://werewolf.world/image/0.3/Walter.jpg"
		}
		this["targetPlayer"] = {
			"@context": "https://werewolf.world/village/context/0.3/character.jsonld",
			"@id": "https://licos.online/state/0.3/village#3/votingResultsDetails#1-2/character#2",
			"id": 2,
			"name": {
				"en": "Moritz",
				"ja": "モーリッツ"
			},
			"image": "https://werewolf.world/image/0.3/Moritz.jpg"
		}
	}
}
