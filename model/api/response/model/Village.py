# coding: utf8

class Village:
	id = 0
	name = ""
	totalNumberOfCharacters = ""
	lang = ""
	chatSettings = ""

	def __init__(self, id, name, totalNumberOfCharacters, lang, charSettings):
		self.id = id
		self.name = name
		self.totalNumberOfCharacters = totalNumberOfCharacters
		self.lang = lang
		self.chatSettings = charSettings
