# coding: utf8

class ReceivedChatMessage:
	type = ""
	token = ""
	villageId = 0
	serverTimestamp = ""
	clientTimestamp = ""

	def __init__(
		self,
		type,
		token,
		villageId,
		serverTimestamp,
		clientTimestamp):
		self.type = type
		self.token = token
		self.villageId = villageId
		self.serverTimestamp = serverTimestamp
		self.clientTimestamp = clientTimestamp