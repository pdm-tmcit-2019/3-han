import {Player} from "../model/Player"
const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('example.sqlite', (err: Error) => {
	if (err) {
		return console.error(err.message);
	}
	console.log('Connected to the example.sqlite SQlite database.');
});
/*
db.close((err: Error) => {
	if (err) {
		return console.error(err.message);
	}
	console.log('Close the database connection.');
});*/

export class PlayerSQL {
	constructor() {
		db.run('CREATE TABLE IF NOT EXISTS players(\
			id INT,\
			player_name VARCHAR,\
			job INT,\
			alive INT\
			)', (err: Error) => {
				if (err) {
					console.error(err.message)
				}
				console.log("PlayerSQL: create table")
			})
	}
	addPlayer(player:Player) {
		db.run(`INSERT INTO players (id, player_name, job, alive) VALUES(${player.id}, "${player.player_name}", ${player.job}, ${player.alive})`)
		console.log("PlayerSQL: insert table")
	}
}
