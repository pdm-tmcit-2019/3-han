import sys
import time
sys.path.append('..\\sql')
sys.path.append('..\\model')
import IntStatusUpdateSQL
import UserSQL
import RealTimeSQL
import TalkStatusSQL


def GetIntStatusUpdate():
	intstatusupdatesql = IntStatusUpdateSQL.IntStatusUpdateSQL()
	head = intstatusupdatesql.find_head()
	res = intstatusupdatesql.find(head)
	if res is not None:
		intstatusupdatesql.update_head()
	return res


def AddUser(name, job_id):
	usersql = UserSQL.UserSQL()
	usersql.insert(name, job_id)


def UpdateRealTime(talk_status_id):
	realtimesql = RealTimeSQL.RealTimeSQL()
	realtimesql.update(talk_status_id)


def AddTalkStatus(talk_status):
	talkstatussql = TalkStatusSQL.TalkStatusSQL()
	talkstatussql.insert(talk_status)


def main():
	res = []
	while(True):
		res = GetIntStatusUpdate()
		if res is not None:
#			print(vars(res))
			AddUser(res.player_name, res.job_id)
			AddTalkStatus(res.talk_status)
			UpdateRealTime(res.realtime_id)
		else:
			time.sleep(1)

main()