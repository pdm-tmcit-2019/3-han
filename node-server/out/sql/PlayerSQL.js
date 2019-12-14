"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('example.sqlite', (err) => {
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
class PlayerSQL {
    constructor() {
        db.run('CREATE TABLE IF NOT EXISTS players(\
			id INT,\
			player_name VARCHAR,\
			job INT,\
			alive INT\
			)', (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log("PlayerSQL: create table");
        });
    }
    addPlayer(player) {
        db.run(`INSERT INTO players (id, player_name, job, alive) VALUES(${player.id}, "${player.player_name}", ${player.job}, ${player.alive})`);
        console.log("PlayerSQL: insert table");
    }
}
exports.PlayerSQL = PlayerSQL;
//# sourceMappingURL=PlayerSQL.js.map