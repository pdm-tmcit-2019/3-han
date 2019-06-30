import sqlite3
import sys
import csv
sys.path.append('..\\sql')
sys.path.append('..\\model')
import UserSQL
import RealTimeSQL
import TalkStatusSQL


def AddUser(name, job_id):
	usersql = UserSQL.UserSQL()
	usersql.insert(name, job_id)

def GetUserByJobId(job_id):
	usersql = UserSQL.UserSQL()
	return usersql.find_by_job_id(job_id)

def GetUserByPlayerName(player_name):
	usersql = UserSQL.UserSQL()
	return usersql.find_by_player_name(player_name)


def UpdateRealTime(talk_status_id):
	realtimesql = RealTimeSQL.RealTimeSQL()
	realtimesql.update(talk_status_id)

def GetRealTimeTalkStatusId():
	realtimesql = RealTimeSQL.RealTimeSQL()
	return vars(realtimesql.find())


def AddTalkStatus(talk_status):
	talkstatussql = TalkStatusSQL.TalkStatusSQL()
	talkstatussql.insert(talk_status)

def GetTalkStatusBy(talk_status):# ???
	talkstatussql = TalkStatusSQL.TalkStatusSQL()
	return talkstatussql.find_all(talk_status)


def Debug():
	realtimesql = RealTimeSQL.RealTimeSQL()
	return realtimesql.find_all()

def TestUser():
	AddUser("aijo", 2)
	AddUser("kagura", 4)
	AddUser("tsuyuzaki", 5)
	AddUser("hoshimi", 4)
	res = []
	res = GetUserByPlayerName("tsuyuzaki")
	for row in res:
		print(vars(row))
	res = GetUserByJobId(4)
	for row in res:
		print(vars(row))

def TestRealTime():
	UpdateRealTime(2)
	res = GetRealTimeTalkStatusId()
	print(res)

def TestTalkStatus():
	AddTalkStatus(2)
	res = GetTalkStatusBy()
	for row in res:
		print(vars(row))

def main(file):
	fp = open(file, "r")
	data = csv.reader(fp, delimiter=",", lineterminator="\r\n")
	for row in data:
		print(row)
	TestUser()

main("../imi.csv")