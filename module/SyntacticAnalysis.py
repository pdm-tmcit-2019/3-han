import sys
import CaboCha

testSentence = ""

def syntacsAnalysis(inputSentence):
    c = CaboCha.Parser()
    sentence = inputSentence
    tree =  c.parse(sentence)
    chunkId = 0
    for i in range(0, tree.size()):
        token = tree.token(i)
        if token.chunk != None:
            print(chunkId, token.chunk.link, token.chunk.head_pos,token.chunk.func_pos, token.chunk.score)
            chunkId += 1
        print(token.surface, token.feature, token.ne)

