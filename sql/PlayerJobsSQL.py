# coding: utf8

import sqlite3
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from model import PlayerJobs

class PlayerJobsSQL:
	def __init__(self):
		self.conn = sqlite3.connect('status.sqlite3')
		self.conn.row_factory = sqlite3.Row
		self.c = self.conn.cursor()
		self.c.execute('''CREATE TABLE IF NOT EXISTS player_jobs(
			id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			player_id INTEGER,
			job_id INTEGER
			)''')

	def __del__(self):
		self.conn.commit()
		self.conn.close()

	def insert(self, player_id, job_id):
		insert_sql = '''INSERT INTO player_jobs(player_id, job_id)
		SELECT * FROM (SELECT "{0}", {1}) AS TMP
		WHERE NOT EXISTS(SELECT * FROM player_jobs WHERE player_id = "{0}");'''.format(player_id, job_id)
		self.c.execute(insert_sql)

	def update(self, player_id, job_id):
		update_sql = 'UPDATE player_jobs SET job_id = {} WHERE player_id = {};'.format(job_id, player_id)
		self.c.execute(update_sql)

	def find_all(self):
		find_sql = 'SELECT * FROM player_jobs'
		res = []
		for row in self.c.execute(find_sql):
			res.append(PlayerJobs.PlayerJobs(row["player_id"], row["job_id"]))
		return res

	def find_by_player_id(self, player_id):
		find_sql = 'SELECT * FROM player_jobs WHERE player_id = {}'.format(player_id)
		self.c.execute(find_sql)
		res = None
		row = self.c.fetchone()
		if row is not None:
			res = PlayerJobs.PlayerJobs(row["player_id"], row["job_id"])
		return res

	def find_by_job_id(self, job_id):
		find_sql = 'SELECT * FROM player_jobs WHERE job_id = {}'.format(job_id)
		res = []
		for row in self.c.execute(find_sql):
			res.append(PlayerJobs.PlayerJobs(row["player_id"], row["job_id"]))
		return res
