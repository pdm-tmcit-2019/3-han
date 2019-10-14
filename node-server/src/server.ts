import {NextFunction, Request, Response} from 'express'

class Server {
	PORT = process.env.PORT || 8000

	express = require('express')
	http = require('http')
	io = require('socket.io')
	fs = require('fs')
	
	constructor() { }

	start() {
		const app = this.express()
		const server = this.http.Server(app)
		app.use(this.express.static('public'))

		app.get('/', (req: Request, res: Response, next: NextFunction) => {
			console.log(`get`)
			var data = this.fs.readFileSync("public/index.htm")
			res.writeHead(200, {
				'Content-Type': 'charset=utf-8',
				'Cache-Control': 'no-cache'
			});
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