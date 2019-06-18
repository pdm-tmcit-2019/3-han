import re
import MeCab
import unicodedata
#import MorphologicalAnalysis.py

def lower_text(text):
	result = []
	while len(text):
		result += text.lower()
	return result

def NormalizationFormCompatibilityComposition(text):
	result = []
	for i in len(text):
		result += unicodedata.normalize("NFKC", text[i])
	return result

def ReplacingSlang(text, dictionary):
	sentence = []
	sentence = text
	result = []
	for i in len(text):
		result += sentence.replace(dictionary[i], dictionary[-1])
	return result

path = '/Users/Poti/Documents/GitHub/3-han/user_dic.csv'
dictionary = []
with open(path) as f:
	dictionary = f.read()

AnalysisTarget = []
output1 = lower_text(AnalysisTarget)
output2 = NormalizationFormCompatibilityComposition(output1)
output3 = ReplacingSlang(output2, dictionary)
#print(output3)