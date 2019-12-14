import {Player} from "../model/Player"
const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('example.sqlite')

export const playerTest=(player:Player)=>{
	console.log(`PlayerSQL: player_name=${player.player_name}`)
}

export const initPlayers=()=>{
	db.run('CREATE TABLE IF NOT EXISTS players(\
		id INT,\
		player_name VARCHAR,\
		job INT,\
		alive INT\
		)')
}

export const addPlayer=(player:Player)=>{
	db.run(`INSERT INTO players VALUES(${player.id}, ${player.player_name}, ${player.job}, ${player.alive})`)
}
