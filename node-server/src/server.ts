import {NextFunction, Request, Response} from 'express'

class Server {
	PORT = process.env.PORT || 8000

	express = require('express')
	http = require('http')
	io = require('socket.io')
	fs = require('fs')
	path = require('path')
	
	constructor() { }

	start() {
		const app = this.express()
		const server = this.http.Server(app)
		app.use(this.express.static(this.path.join(__dirname, '/../public')))

		app.get('/', (req: Request, res: Response, next: NextFunction) => {
			var data = this.fs.readFileSync(this.path.join(__dirname, '/../public/index.htm'))
			res.end(data)
		})
		
		server.listen(this.PORT, () => {
			console.log(`server started. PORT:${this.PORT}`)
			console.log(`http://localhost:${this.PORT}`)
		})
	}
}

const server = new Server()
server.start()