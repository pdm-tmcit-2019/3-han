# coding: utf8

class Board:
	character = None
	polarity =""
	phase = ""
	day = 0
	
	def __init__(self, character, polarity, phase, day):
		self.character = character
		self.polarity = polarity
		self.phase = phase
		self.day = day
