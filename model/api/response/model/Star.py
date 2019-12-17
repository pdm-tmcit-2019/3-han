# coding: utf8

class Star:
	token = ""
	serverTimestamp = ""
	clientTimestamp = ""
	isMarked = 0

	def __init__(
		self,
		token,
		serverTimestamp,
		clientTimestamp,
		isMarked):
		self.token = token
		self.serverTimestamp = serverTimestamp
		self.clientTimestamp = clientTimestamp
		self.isMarked = isMarked