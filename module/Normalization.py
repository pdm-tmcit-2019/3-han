import re
import unicodedata
import nltk

sentence = ''
pattern = 'co'
replace = 'カミングアウト'

def lower_text(text):
	return text.lower()

def NormalizationFormCompatibilityComposition(text):
	return unicodedata.normalize("NFKC", text)

def ReplacingSlang(text):
	token = []
	token = nltk.word_tokenize(text)

	for i in len(token):
		if token[i] == 'co':
			result += token.replace(pattern, replace)
		else:
			result += token[i]
	return result

def almost_main(text):
	lower_text(text)
	NormalizationFormCompatibilityComposition(text)
	ReplacingSlang(text)

almost_main(sentence)