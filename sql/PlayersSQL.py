# coding: utf8

import sqlite3
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from model import Players

class PlayersSQL:
    def __init__(self):
        self.conn = sqlite3.connect('status.sqlite3')
        self.conn.row_factory = sqlite3.Row
        self.c = self.conn.cursor()
        self.c.execute('''CREATE TABLE IF NOT EXISTS players(
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(30) NOT NULL
            )''')
    
    def __del__(self):
        self.conn.commit()
        self.conn.close()
    
    def insert(self, name):
        insert_sql = '''INSERT INTO players(name)
            SELECT * FROM (SELECT "{0}") AS TMP
            WHERE NOT EXISTS(SELECT * FROM players WHERE name = "{0}");'''.format(name)
        self.c.execute(insert_sql)

    def find_all(self):
        find_sql = 'SELECT * FROM players'
        res = []
        for row in self.c.execute(find_sql):
            res.append(Players.Players(row["id"], row["name"]))
        return res

    def find_by_id(self, id):
        find_sql = 'SELECT * FROM players WHERE id = {}'.format(id)
        self.c.execute(find_sql)
        res = self.c.fetchone()
        return Players.Players(res["name"])

    def find_by_name(self, name):
        find_sql = 'SELECT * FROM players WHERE name = "{}"'.format(name)
        self.c.execute(find_sql)
        res = None
        row = self.c.fetchone()
        if row is not None:
            res = Players.Players(row["id"], row["name"])
        return res
