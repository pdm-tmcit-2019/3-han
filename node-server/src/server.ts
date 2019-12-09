import {NextFunction, Request, Response} from 'express'
import * as express from 'express'
import * as http from 'http'
import * as WebSocket from 'ws'
import * as PlayerSQL from './sql/PlayerSQL'
import {Player} from './model/Player'

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
			ws.on('message', (message: string) => {
				// var data = this.fs.readFileSync(this.path.join(__dirname, '/../public/server2client/flavorText.jsonld'))
				// ws.send(data.toString())
				var obj = JSON.parse(message)
				var tmp = obj.phase
				console.log(`Day:${obj.day},Phase:${obj.phase},MyJob:${obj.myCharacter.role.name.en},Text:${obj.text["@value"]}`)
			})
			ws.on('chat message', (message: string) => {
				wss.emit('chat message', message)
			})
			var player = new Player(0, "tsuyuzaki", 2, 1)
			PlayerSQL.initPlayers()
			PlayerSQL.addPlayer(player)
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
