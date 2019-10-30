# coding: utf8

class FirstMorning:
	context = None
	id = None
	village = None
	token = None
	phase = None
	day = None
	phaseTimeLimit = None
	phaseStartTime = None
	serverTimestamp = None
	clientTimestamp = None
	directionality = None
	intensionalDisclosureRange = None
	extensionalDisclosureRange = None
	votingResultsSummary = None
	votingResultsDetails = None
	character = None
	role = None

	def __init__(
		self,
		context,
		id,
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
		votingResultsSummary,
		votingResultsDetails,
		character,
		role):
		self.context = context
		self.id = id
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
		self.votingResultsSummary = votingResultsSummary
		self.votingResultsDetails = votingResultsSummary
		self.character = character
		self.role = role