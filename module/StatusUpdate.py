# coding: utf8

import sys
import os
import time
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from sql import IntStatusUpdateSQL
from sql import PlayersSQL
from sql import PlayerJobsSQL
from sql import RealTimeSQL
from sql import PlayerTrustSQL


def GetIntStatusUpdate():
	intstatusupdatesql = IntStatusUpdateSQL.IntStatusUpdateSQL()
	head = intstatusupdatesql.find_head()
	res = intstatusupdatesql.find(head)
	if res is not None:
		intstatusupdatesql.update_head()
	return res

def SetPlayers(name):
	playerssql = PlayersSQL.PlayersSQL()
	playerssql.insert(name)

def SetPlayerJobs(player_name, job_id):
	playerssql = PlayersSQL.PlayersSQL()
	player = playerssql.find_by_name(player_name)
	playerjobs = PlayerJobsSQL.PlayerJobsSQL()
	res = playerjobs.find_by_player_id(player.id)
	if res is None:
		playerjobs.insert(player.id, job_id)
	else:
		playerjobs.update(player.id, job_id)

def UpdateRealTime(talk_status_id):
	realtimesql = RealTimeSQL.RealTimeSQL()
	realtimesql.update(talk_status_id)

def SetPlayerTrust(player_name, trust_potential):
	playerssql = PlayersSQL.PlayersSQL()
	player = playerssql.find_by_name(player_name)
	playertrustsql = PlayerTrustSQL.PlayerTrustSQL()
	res = playertrustsql.find_by_player_id(player.id)
	if res is None:
		playertrustsql.insert(player.id, trust_potential)
	else:
		playertrustsql.update(player.id, trust_potential)


def main():
	res = []
	while(True):
		res = GetIntStatusUpdate()
		if res is not None:
			print(vars(res))
			SetPlayers(res.player_name)
			SetPlayerJobs(res.player_name, res.job_id)
			SetPlayerTrust(res.player_name, res.trust_potential)
			UpdateRealTime(res.talk_status_id)
		else:
			time.sleep(1)

main()
