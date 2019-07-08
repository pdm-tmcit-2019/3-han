import sqlite3
import sys
sys.path.append('..\model')
import IntStatusUpdate

class IntStatusUpdateSQL:
	def __init__(self):
		self.conn = sqlite3.connect('status.sqlite3')
		self.conn.row_factory = sqlite3.Row
		self.c = self.conn.cursor()
		self.c.execute('''CREATE TABLE IF NOT EXISTS int_status_update(
			id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			player_name VARCHAR(30) NOT NULL,
			job_id INTEGER NOT NULL,
			talk_status INTEGER NOT NULL,
			realtime_id INTEGER NOT NULL
			)''')
		self.c.execute('''CREATE TABLE IF NOT EXISTS int_status_update_head(
			head INTEGER NOT NULL DEFAULT 1
			)''')
		self.c.execute('''INSERT INTO int_status_update_head(head) SELECT * FROM (SELECT 1) AS TMP WHERE NOT EXISTS (SELECT * FROM int_status_update_head);''')

	def __del__(self):
		self.conn.commit()
		self.conn.close()

	def update_head(self):
		find_sql = 'SELECT * FROM int_status_update_head'
		self.c.execute(find_sql)
		res = self.c.fetchone()
		head = res["head"]
		head += 1
		update_sql = 'UPDATE int_status_update_head SET head = {};'.format(head)
		self.c.execute(update_sql)

	def find_head(self):
		find_sql = 'SELECT * FROM int_status_update_head'
		self.c.execute(find_sql)
		res = self.c.fetchone()
		return res["head"]

	def insert(self, player_name, job_id, talk_status, realtime_id):
		insert_sql = 'INSERT INTO int_status_update(player_name, job_id, talk_status, realtime_id) VALUES("{}", {}, {}, {});'.format(player_name, job_id, talk_status, realtime_id)
		self.c.execute(insert_sql)

	def find(self, head):
		find_sql = 'SELECT * FROM int_status_update WHERE id = {}'.format(head)
		self.c.execute(find_sql)
		row = self.c.fetchone()
		res = None
		if row is not None:
			res = IntStatusUpdate.IntStatusUpdate(row["id"], row["player_name"], row["job_id"], row["talk_status"], row["realtime_id"])
		return res