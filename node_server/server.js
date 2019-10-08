const express = require('express')
const http = require('http')
const io = require('socket.io')

const PORT = process.env.PORT || 8000

const app = express()
const server = http.Server(app)

app.get('/', (req, res) => {
	res.send('hello world')
})

server.listen(PORT, () => {
	console.log(`server staerted. PORT:${PORT}`)
	console.log(`http://localhost:${PORT}`)
})