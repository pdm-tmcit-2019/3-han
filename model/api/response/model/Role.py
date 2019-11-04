# coding: utf8

class Role:
	isMine = False
	name = None
	image = ""
	numberOfCharacters = 0

	def __init__(self, isMine, name, image, numberOfCharacters):
		self.isMine = isMine
		self.name = name
		self.image = image
		self.numberOfCharacters = numberOfCharacters
