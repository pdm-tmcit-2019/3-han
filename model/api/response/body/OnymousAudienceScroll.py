# coding: utf8

class OnymousAudienceScroll:
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
	avatar = None
	nodeId = ""
	scrollTop = 0
	scrollHeight = 0
	offsetHeight = 0

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
		avatar,
		nodeId,
		scrollTop,
		scrollHeight,
		offsetHeight):
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
		self.avatar = avatar
		self.nodeId = nodeId
		self.scrollTop = scrollTop
		self.scrollHeight = scrollHeight
		self.offsetHeight = offsetHeight