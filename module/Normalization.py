# coding: utf8

import re
import unicodedata
import nltk
from model import Morpheme

pattern = 'co'
replace = 'カミングアウト'

class Normalization:
	sentence = ''
	morpheme_list = None
	def __init__(self, morpheme_list):
		super(Normalization, self).__init__()
		self.morpheme_list = morpheme_list

		for morpheme in morpheme_list:
			self.sentence += morpheme.word

	def NormalizationFormCompatibilityComposition(self):
		token = []
		s = self.sentence.lower()
		s = unicodedata.normalize("NFKC", s)
		token = nltk.word_tokenize(s)

		result = ""
		for i in range(len(token)):
			if token[i] == 'co':
				result += token.replace(pattern, replace)
			else:
				result += token[i]
		return result
