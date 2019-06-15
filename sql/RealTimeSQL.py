import sqlite3
import sys
sys.path.append('..\model')
import RealTime

class RealTimeSQL:
	def __init__(self):
		self.conn = sqlite3.connect('status.sqlite3')
		self.conn.row_factory = sqlite3.Row
		self.c = self.conn.cursor()
		self.c.execute('''CREATE TABLE IF NOT EXISTS realtime(
			id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			talk_status_id INTEGER NOT NULL
			)''')

	def __del__(self):
		self.conn.commit()
		self.conn.close()

	def insert(self, talk_status_id):
		insert_sql = 'INSERT INTO realtime(talk_status_id) VALUES({});'.format(talk_status_id)
		self.c.execute(insert_sql)

	def find_all(self):
		find_sql = 'SELECT * FROM realtime'
		res = []
		for row in self.c.execute(find_sql):
			res.append(RealTime.RealTime(row["talk_status_id"]))
		return res

	def find_by_id(self, id):
		find_sql = 'SELECT * FROM realtime WHERE id = {}'.format(id)
		self.c.execute(find_sql)
		res = self.c.fetchone()
		return RealTime.RealTime(res["talk_status_id"])