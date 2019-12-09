# coding: utf8

class Star:
	village = None
	token = ""
	phase = ""
	day = 0
	phaseTimeLimit = 0
	phaseStartTime = ""
	serverTimestamp = ""
	clientTimestamp = ""
	directionality = ""
	intensionalDisclosureRange = ""
	extensionalDisclosureRange = []
	myCharacter = None
	star = None

	def __init__(
		self,
		village,
		token,
		phase,
		day,
		phaseTimeLimit,
		phaseStartTime,
		serverTimestamp,
		clientTimestamp,
		directionality,
		intensionalDisclosureRange,
		extensionalDisclosureRange,
		myCharacter,
		star):
		self.village = village
		self.token = token
		self.phase = phase
		self.day = day
		self.phaseTimeLimit = phaseTimeLimit
		self.phaseStartTime = phaseStartTime
		self.serverTimestamp = serverTimestamp
		self.clientTimestamp = clientTimestamp
		self.directionality = directionality
		self.intensionalDisclosureRange = intensionalDisclosureRange
		self.extensionalDisclosureRange = extensionalDisclosureRange
		self.myCharacter = myCharacter
		self.star = star