import sqlite3
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from model import RealTime

class RealTimeSQL:
	def __init__(self):
		self.conn = sqlite3.connect('status.sqlite3')
		self.conn.row_factory = sqlite3.Row
		self.c = self.conn.cursor()
		self.c.execute('''CREATE TABLE IF NOT EXISTS realtime(
			id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			talk_status_id INTEGER NOT NULL
			)''')
		self.c.execute('''INSERT INTO realtime(talk_status_id) 
			SELECT * FROM (SELECT 0) AS TMP 
			WHERE NOT EXISTS (SELECT * FROM realtime);''')

	def __del__(self):
		self.conn.commit()
		self.conn.close()

	def update(self, talk_status_id):
		update_sql = 'UPDATE realtime SET talk_status_id = {};'.format(talk_status_id)
		self.c.execute(update_sql)

	def find(self):
		find_sql = 'SELECT * FROM realtime'
		self.c.execute(find_sql)
		res = self.c.fetchone()
		return RealTime.RealTime(res["talk_status_id"])

	def find_all(self):
		find_sql = 'SELECT * FROM realtime'
		res = []
		for row in self.c.execute(find_sql):
			res.append(RealTime.RealTime(row["talk_status_id"]))
		return res