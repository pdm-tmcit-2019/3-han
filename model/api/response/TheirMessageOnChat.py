# coding: utf8

class TheirMessageOnChat:
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
	character = None
	isMine = 0
	id = 0
	counter = 0
	maxNumberOfChatMessages = 0
	interval = 0
	text = None
	maxLengthOfUnicodeCodePoints = 0
	isOver = 0

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
		flavorText,
		):
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
		self.character = character
		self.isMine = isMine
		self.id = id
		self.counter = counter
		self.maxNumberOfChatMessages = maxNumberOfChatMessages
		self.interval = interval
		self.text = text
		self.maxLengthOfUnicodeCodePoints = maxLengthOfUnicodeCodePoints
		self.isOver = isOver