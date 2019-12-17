# coding: utf8

class ChatSettings:
	maxNumberOfChatMessages = 0
	maxLengthOfUnicodeCodePoints = 0

	def __init__(
		self,
		maxNumberOfChatMessages,
		maxLengthOfUnicodeCodePoints):
		self.maxNumberOfChatMessages = maxNumberOfChatMessages
		self.maxLengthOfUnicodeCodePoints = maxLengthOfUnicodeCodePoints