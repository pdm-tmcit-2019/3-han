import sys
import MeCab
import model.Morpheme

class MorphologicalAnalysis:
	sentence = "hello"
	def __init__(self, sentence):
		self.sentence = sentence
	
	def analysis():
		morpheme_list = []
		mecab = MeCab.Tagger('')
		result = mecab.parse(sentence)
		result_list = result.split("\n")
		for a_result in result_list:
			splited_result = a_result.replace("\t", ",").split(",")
			morpheme = Morpheme (
				splited_result[0],
				splited_result[1],
				splited_result[2],
				splited_result[3],
				splited_result[4],
				splited_result[5],
				splited_result[6],
				splited_result[7],
			)
			morpheme_list.append(morpheme)
		return morpheme_list

test = MorphologicalAnalysis("hello world")
print(test.analysis())