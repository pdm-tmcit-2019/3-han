# coding: utf8

class ReceivedSystemMessage:
	type = ""
	token = ""
	villageId = 0
	phase = ""
	day = 0

	def __init__(
		self,
		type,
		token,
		villageId,
		phase,
		day):
		self.type = type
		self.token = token
		self.villageId = villageId
		self.phase = phase
		self.day = day