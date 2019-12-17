# coding: utf8

class Chat:
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
	character = None
	isMine = 0
	text = None
	maxLengthOfUnicodeCodePoints = 0
	isFromServer = 0

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
		character,
		isMine,
		text,
		maxLengthOfUnicodeCodePoints,
		isFromServer):
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
		self.character = character
		self.isMine = isMine
		self.text = text
		self.maxLengthOfUnicodeCodePoints = maxLengthOfUnicodeCodePoints
		self.isFromServer = isFromServer