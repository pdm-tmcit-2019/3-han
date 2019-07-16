class IntStatusUpdate:
	id = None
	player_name = None
	job_id = None
	talk_status = None
	realtime_id = None

	def __init__(self, id, player_name, job_id, talk_status, realtime_id):
		self.id = id
		self.player_name = player_name
		self.job_id = job_id
		self.talk_status = talk_status
		self.realtime_id = realtime_id