# coding: utf8

import re
import unicodedata
import nltk

pattern = 'co'
replace = 'カミングアウト'

class Normalization:
	sentence = ''

	def __init__(self, sentence):
		super(Normalization, self).__init__()
		self.sentence = sentence

	def lower_text(self):
		return self.sentence.lower()

	def NormalizationFormCompatibilityComposition(self):
		return unicodedata.normalize("NFKC", self.sentence)

	def ReplacingSlang(self):
		token = []
		token = nltk.word_tokenize(self.sentence)

		for i in len(token):
			if token[i] == 'co':
				result += token.replace(pattern, replace)
			else:
				result += token[i]
		return result
