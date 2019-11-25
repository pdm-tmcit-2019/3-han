# coding: utf8

class Result:
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
	votingResultsSummary = []
	votingResultsDetails = []
	character = []
	role = []
	
	def __init_ (
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
		votingResultsSummary,
		votingResultsDetails,
		character,
		role ):
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
			self.votingResultsDetails = votingResultsSummary
			self.votingResultsDetails = votingResultsDetails
			self.character = character
			self.role = role
	