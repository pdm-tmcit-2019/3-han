import {NextFunction, Request, Response} from 'express'
import * as express from 'express'
import * as http from 'http'
import * as WebSocket from 'ws'
import {PlayerSQL} from './sql/PlayerSQL'
import {Player} from './model/Player'
import {Connection} from './connection'

class Server {
	PORT = process.env.PORT || 8000

	express = require('express')
	http = require('http')
	io = require('socket.io')
	fs = require('fs')
	path = require('path')
	ws = require('ws')
	
	constructor() { }

	start() {
		const app = this.express()
		const server = this.http.createServer(app)
		const wss = new this.ws.Server({server})
		const playerSQL = new PlayerSQL()

		app.use(this.express.static(this.path.join(__dirname, '/../public')))

		app.get('/', (req: Request, res: Response, next: NextFunction) => {
			var data = this.fs.readFileSync(this.path.join(__dirname, '/../public/index.htm'))
			res.end(data)
		})

		app.get('/test', (req: Request, res: Response, next: NextFunction) => {
			var data = this.fs.readFileSync(this.path.join(__dirname, '/../public/index.htm'))
			res.end(data)
		})

		wss.on('connection', (ws: WebSocket) => {
			const connection = new Connection(ws)
			ws.on('message', (message: string) => {
				// var obj = JSON.parse(message)
				// console.log(`Day:${obj.day},Phase:${obj.phase},MyJob:${obj.myCharacter.role.name.en},Text:${obj.text["@value"]}`)
				// connection.sendMyMessageOnChat()
				// connection.sendDay()
				switch(message) {
					case 'Noon':
						connection.sendNoon()
						break;
					case 'Error':
						connection.sendError()
						break;
					case 'FirstMorning':
						connection.sendFirstMorning()
						break;
					case 'FlavorText':
						connection.sendFlavorText()
						break;
					case 'Morning':
						connection.sendMorning()
						break;
					case 'Night':
						connection.sendNight()
						break;
					case 'AnonymousAudienceChat':
						connection.sendAnonymousAudienceChat()
						break;
					case 'OnymousAudienceChat':
						connection.sendOnymousAudienceChat()
						break;
					case 'PostMortem':
						connection.sendPostMortem()
						break;
					case 'Result':
						connection.sendResult()
						break;
					case 'MyMessageOnChat':
						connection.sendMyMessageOnChat()
						break;
					case 'TheirMessageOnChat':
						connection.sendTheirMessageOnChat()
						break;
					default:
						break;
				}
			})
			ws.on('chat message', (message: string) => {
				wss.emit('chat message', message)
			})
			console.log('Connect WebSocket client.')
		})
		
		server.listen(this.PORT, () => {
			console.log(`server started. PORT:${this.PORT}`)
			console.log(`http://localhost:${this.PORT}`)
		})
	}
}

const server = new Server()
server.start()
