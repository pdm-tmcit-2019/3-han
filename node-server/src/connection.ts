import * as WebSocket from 'ws'
import {Error} from './class/Error'
import {FirstMorning} from './class/FirstMorning'
import {FlavorText} from './class/FlavorText'
import {Morning} from './class/Morning'
import {Night} from './class/Night'
import {Noon} from './class/Noon'
import {AnonymousAudienceChat} from './class/AnonymousAudienceChat'
import {OnymousAudienceChat} from './class/OnymousAudienceChat'
import {PostMortem} from './class/PostMortem'
import {Result} from './class/Result'
import {MyMessageOnChat} from './class/MyMessageOnChat'
import {TheirMessageOnChat} from './class/TheirMessageOnChat'


export class Connection {
	ws = require('ws')
	webSocket: WebSocket
	constructor(ws:WebSocket) {
		this.webSocket = ws
	}
	sendError() {
		var error = new Error("abc")
		var json = error.get()
		this.webSocket.send(json)
	}
	sendFirstMorning() {
		var firstMorning = new FirstMorning()
		var json = firstMorning.get()
		this.webSocket.send(json)
	}
	sendFlavorText() {
		var flavorText = new FlavorText("最初のフレーバーテキスト")
		var json = flavorText.get()
		this.webSocket.send(json)
	}
	sendMorning() {
		var morning = new Morning()
		var json = morning.get()
		this.webSocket.send(json)
	}
	sendNight() {
		var night = new Night()
		var json = night.get()
		this.webSocket.send(json)
	}
	sendNoon() {
		var day = new Noon("abc")
		var json = day.get()
		this.webSocket.send(json)
	}
	sendAnonymousAudienceChat() {
		var anonymousAudienceChat = new AnonymousAudienceChat("abc")
		var json = anonymousAudienceChat.get()
		this.webSocket.send(json)
	}
	sendOnymousAudienceChat() {
		var onymousAudienceChat = new OnymousAudienceChat("abc")
		var json = onymousAudienceChat.get()
		this.webSocket.send(json)
	}
	sendPostMortem() {
		var postMortem = new PostMortem()
		var json = postMortem.get()
		this.webSocket.send(json)
	}
	sendResult() {
		var result = new Result()
		var json = result.get()
		this.webSocket.send(json)
	}
	sendMyMessageOnChat() {
		var myMessageOnChat = new MyMessageOnChat("abcdefg")
		var json = myMessageOnChat.get()
		this.webSocket.send(json)
	}
	sendTheirMessageOnChat() {
		var theirMessageOnChat = new TheirMessageOnChat("abcdefg")
		var json = theirMessageOnChat.get()
		this.webSocket.send(json)
	}
}
