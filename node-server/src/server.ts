import {NextFunction, Request, Response} from 'express'
import * as express from 'express'
import * as http from 'http'
import * as WebSocket from 'ws'

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
				ws.send(message)
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
