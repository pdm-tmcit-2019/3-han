# coding: utf8

import re
import unicodedata
import nltk
from model import Morpheme

pattern = 'co'
replace = 'カミングアウト'

class Normalization:
	sentence = ''
	morpheme_list
	def __init__(self, morpheme_list):
		super(Normalization, self).__init__()
		self.morpheme_list = morpheme_list

		for morpheme in morpheme_list:
        	self.sentence += morpheme.word
        return self.sentence

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
