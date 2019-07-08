import sqlite3
import sys
sys.path.append('..\model')
import User

class UserSQL:
    def __init__(self):
        self.conn = sqlite3.connect('status.sqlite3')
        self.conn.row_factory = sqlite3.Row
        self.c = self.conn.cursor()
        self.c.execute('''CREATE TABLE IF NOT EXISTS users(
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            player_name VARCHAR(30) NOT NULL,
            job_id INTEGER NOT NULL
            )''')
    
    def __del__(self):
        self.conn.commit()
        self.conn.close()
    
    def insert(self, player_name, job_id):
        insert_sql = 'INSERT INTO users(player_name, job_id) SELECT * FROM (SELECT "{0}", {1}) AS TMP WHERE NOT EXISTS(SELECT * FROM users WHERE player_name = "{0}");'.format(player_name, job_id)
        self.c.execute(insert_sql)

    def find_all(self):
        find_sql = 'SELECT * FROM users'
        res = []
        for row in self.c.execute(find_sql):
            res.append(User.User(row["player_name"], row["job_id"]))
        return res

    def find_by_id(self, id):
        find_sql = 'SELECT * FROM users WHERE id = {}'.format(id)
        self.c.execute(find_sql)
        res = self.c.fetchone()
        return User.User(res["player_name"], res["job_id"])

    def find_by_player_name(self, player_name):
        find_sql = 'SELECT * FROM users WHERE player_name = "{}"'.format(player_name)
        res = []
        for row in self.c.execute(find_sql):
            res.append(User.User(row["player_name"], row["job_id"]))
        return res

    def find_by_job_id(self, job_id):
        find_sql = 'SELECT * FROM users WHERE job_id = {}'.format(job_id)
        res = []
        for row in self.c.execute(find_sql):
            res.append(User.User(row["player_name"], row["job_id"]))
        return res