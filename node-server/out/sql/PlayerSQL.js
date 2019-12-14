"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('example.sqlite');
exports.playerTest = (player) => {
    console.log(`PlayerSQL: player_name=${player.player_name}`);
};
exports.initPlayers = () => {
    db.run('CREATE TABLE IF NOT EXISTS players(\
		id INT,\
		player_name VARCHAR,\
		job INT,\
		alive INT\
		)');
};
exports.addPlayer = (player) => {
    db.run(`INSERT INTO players VALUES(${player.id}, ${player.player_name}, ${player.job}, ${player.alive})`);
};
//# sourceMappingURL=PlayerSQL.js.map