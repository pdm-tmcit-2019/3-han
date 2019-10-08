import {NextFunction, Request, Response} from 'express'

class Server {
	PORT = process.env.PORT || 8000

	express = require('express')
	http = require('http')
	io = require('socket.io')
	
	constructor() { }

	start() {
		const app = this.express()
		const server = this.http.Server(app)

		app.get('/', (req: Request, res: Response, next: NextFunction) => {
			res.send('hello world')
		})
		
		server.listen(this.PORT, () => {
			console.log(`server staerted. PORT:${this.PORT}`)
			console.log(`http://localhost:${this.PORT}`)
		})
	}
}

const server = new Server()
server.start()