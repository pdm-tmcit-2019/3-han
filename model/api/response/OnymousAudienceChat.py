# coding: utf8

class OnymousAudienceChat:
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
	avator = None
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
		avator,
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
		self.avator = avator
		self.isMine = isMine
		self.text = text
		self.maxLengthOfUnicodeCodePoints = maxLengthOfUnicodeCodePoints
		self.isFromServer = isFromServer