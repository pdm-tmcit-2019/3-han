import * as WebSocket from 'ws'
import {MyMessageOnChat} from './class/MyMessageOnChat'

export class Connection {
	fs = require('fs')
	path = require('path')
	ws = require('ws')
	webSocket: WebSocket
	constructor(ws:WebSocket) {
		this.webSocket = ws
	}
	sendMyMessageOnChat() {
		var myMessageOnChat = new MyMessageOnChat("abcdefg")
		var json = myMessageOnChat.get()
		this.webSocket.send(json)
	}
}
