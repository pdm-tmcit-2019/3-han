class Morpheme:
	# 元の単語
	word = ""
	# 品詞
	part_of_speech = ""
	# 品詞の詳細1
	part_of_speech_detail1 = ""
	# 品詞の詳細2
	part_of_speech_detail2 = ""
	# 品詞の詳細3
	part_of_speech_detail3 = ""
	# 活用形
	conjugation_type = ""
	# 活用型
	conjugation_model = ""
	# 単語の原型
	origin_word = ""
	# 読み
	reading = ""
	# 発音
	pronunciation = ""

	def __init__(
		self, 
		word, 
		part_of_speech, 
		part_of_speech_detail1, 
		part_of_speech_detail2, 
		part_of_speech_detail3, 
		conjugation_type,
		conjugation_model,
		origin_word,
		reading,
		pronunciation ):
		self.word = word
		self.part_of_speech = part_of_speech
		self.part_of_speech_detail1 = part_of_speech_detail1
		self.part_of_speech_detail2 = part_of_speech_detail2
		self.part_of_speech_detail3 = part_of_speech_detail3
		self.conjugation_type = conjugation_type
		self.conjugation_model = conjugation_model
		self.origin_word = origin_word
		self.reading = reading
		self.pronunciation = pronunciation
	 