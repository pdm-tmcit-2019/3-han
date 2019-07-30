# coding: utf8

class IntStatusUpdate:
	id = None
	player_name = None
	job_id = None
	talk_status_id = None
	trust_potential = None

	def __init__(self, id, player_name, job_id, talk_status_id, trust_potential):
		self.id = id
		self.player_name = player_name
		self.job_id = job_id
		self.talk_status_id = talk_status_id
		self.trust_potential = trust_potential
