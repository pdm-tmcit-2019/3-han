import {NextFunction, Request, Response} from 'express'
import * as express from 'express'
import * as http from 'http'
import * as WebSocket from 'ws'
import {PlayerSQL} from './sql/PlayerSQL'
import {Player} from './model/Player'
import {Connection} from './connection'

class Game {
	day: number
	maxDay: number
	constructor(maxDay: number) {
		this.day = 1
		this.maxDay = maxDay
	}
}

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
			const connection = new Connection(ws)
			console.log('Connect WebSocket client.')
			processStart(connection)
			ws.on('message', (message: string) => {
				console.log(message)
			})
			ws.on('chat message', (message: string) => {
				wss.emit('chat message', message)
			})
		})
		
		server.listen(this.PORT, () => {
			console.log(`server started. PORT:${this.PORT}`)
			console.log(`http://localhost:${this.PORT}`)
		})
	}
}


function processStart(con: Connection) {
	con.sendFlavorText()
	con.sendFirstMorning()
	console.log("Day1")
	setTimeout(noonPhase, 20000, con)
	setTimeout(sendMyMessageOnChat, 5000, con)
	setTimeout(sendTheirMessageOnChat, 10000, con)
}

function morningPhase(con: Connection) {
	con.sendFlavorText()
	con.sendMorning()
	var str = "Day" + game.day.toString()
	console.log(str)
	setTimeout(noonPhase, 20000, con)
	setTimeout(sendMyMessageOnChat, 5000, con)
	setTimeout(sendTheirMessageOnChat, 10000, con)
}

function noonPhase(con: Connection) {
	con.sendNoon()
	setTimeout(nightPhase, 10000, con)
}

function nightPhase(con: Connection) {
	con.sendNight()
	if (game.day >= game.maxDay) {
		setTimeout(resultPhase, 10000, con)
	} else {
		game.day++
		setTimeout(morningPhase, 10000, con)
	}
}

function resultPhase(con: Connection) {
	con.sendResult()
	setTimeout(postMortemPhase, 10000, con)
}

function postMortemPhase(con: Connection) {
	con.sendPostMortem()
}

function sendMyMessageOnChat(con: Connection) {
	con.sendMyMessageOnChat()
}

function sendTheirMessageOnChat(con: Connection) {
	con.sendTheirMessageOnChat()
}

const game = new Game(3)
const server = new Server()
server.start()
