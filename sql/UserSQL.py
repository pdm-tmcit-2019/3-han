import sqlite3

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
        insert_sql = 'INSERT INTO users(player_name, job_id) VALUES("{}", {});'.format(player_name, job_id)
        self.c.execute(insert_sql)

    def find_add(self):
        find_sql = 'SELECT * FROM users'
        self.c.execute(find_sql)
        res = self.c.fetchall()
        return res

    def finf_by_id(self, id):
        find_sql = 'SELECT * FROM users WHERE id = {}'.format(id)
        self.c.execute(find_sql)
        res = self.c.fetchone()
        return res

    def find_by_player_name(self, player_name):
        find_sql = 'SELECT * FROM users WHERE player_name = {}'.format(player_name)
        self.c.execute(find_sql)
        res = self.c.fetchall()
        return res

    def find_by_job_id(self, job_id):
        find_sql = 'SELECT * FROM users WHERE job_id = {}'.format(job_id)
        self.c.execute(find_sql)
        res = self.c.fetchall()
        return res