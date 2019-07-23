class Clauses:
	# 自分の文節ID
	myID = ""
	# 自分がかかっている先の文節ID
	toID = ""
	# かかりの強さスコア
	score = ""
	# 自分の文節
	clause = ""

	def __init__(self, clause, myID, toID, score):
		self.myID = myID
		self.toID = toID
		self.score = score
		self.clause = clause