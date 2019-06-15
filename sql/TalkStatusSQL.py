import sqlite3
import sys
sys.path.append('..\model')
import TalkStatus

class TalkStatusSQL:
	def __init__(self):
		self.conn = sqlite3.connect('status.sqlite3')
		self.conn.row_factory = sqlite3.Row
		self.c = self.conn.cursor()
		self.c.execute('''CREATE TABLE IF NOT EXISTS talk_status(
			id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			talk_status INTEGER NOT NULL
			)''')

	def __del__(self):
		self.conn.commit()
		self.conn.close()

	def insert(self, talk_status):
		insert_sql = 'INSERT INTO talk_status(talk_status) VALUES({});'.format(talk_status)
		self.c.execute(insert_sql)

	def find_all(self):
		find_sql = 'SELECT * FROM talk_status'
		res = []
		for row in self.c.execute(find_sql):
			res.append(TalkStatus.TalkStatus(row["talk_status"]))
		return res

	def find_by_id(self, id):
		find_sql = 'SELECT * FROM talk_status WHERE id = {}'.format(id)
		self.c.execute(find_sql)
		res = self.c.fetchone()
		return TalkStatus.TalkStatus(res["talk_status"])