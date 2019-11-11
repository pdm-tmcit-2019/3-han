# coding: utf8

class VotingResultsSummary():
	characterToLynch = None
	numberOfVotes = 0
	rankOfVotes = 0

	def __init__(
		self,
		characterToLynch,
		numberOfVotes,
		rankOfVotes):
		self.characterToLynch = characterToLynch
		self.numberOfVotes = numberOfVotes
		self.rankOfVotes = rankOfVotes
