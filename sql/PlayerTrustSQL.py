import sqlite3
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from model import PlayerTrust

class PlayerTrustSQL:
	def __init__(self):
		self.conn = sqlite3.connect('status.sqlite3')
		self.conn.row_factory = sqlite3.Row
		self.c = self.conn.cursor()
		self.c.execute('''CREATE TABLE IF NOT EXISTS player_trust(
			id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			player_id INTEGER NOT NULL,
			trust_potential INTEGER NOT NULL
			)''')

	def __del__(self):
		self.conn.commit()
		self.conn.close()

	def insert(self, player_id, trust_potential):
		insert_sql = 'INSERT INTO player_trust(player_id, trust_potential) VALUES({}, {});'.format(player_id, trust_potential)
		self.c.execute(insert_sql)
	
	def update(self, player_id, trust_potential):
		update_sql = 'UPDATE player_trust SET trust_potential = {} WHERE player_id = {};'.format(trust_potential, player_id)
		self.c.execute(update_sql)

	def find_all(self):
		find_sql = 'SELECT * FROM player_trust'
		res = []
		for row in self.c.execute(find_sql):
			res.append(PlayerTrust.PlayerTrust(row["player_id"], row["trust_potential"]))
		return res
	
	def find_by_player_id(self, player_id):
		find_sql = 'SELECT * FROM player_trust WHERE player_id = {}'.format(player_id)
		self.c.execute(find_sql)
		res = None
		row = self.c.fetchone()
		if row is not None:
			res = PlayerTrust.PlayerTrust(row["player_id"], row["trust_potential"])
		return res

	def find_by_id(self, id):
		find_sql = 'SELECT * FROM player_trust WHERE id = {}'.format(id)
		self.c.execute(find_sql)
		res = self.c.fetchone()
		return PlayerTrust.PlayerTrust(res["player_id"], res["trust_potential"])