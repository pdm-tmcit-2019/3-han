import sys
import CaboCha
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from model import Clauses

testSentence = "真～っ直ぐな～字っ♪　　　　曲が～った字～♪ちっ、歌ってたら突っ込むの遅れちゃったわ。残念ね。カタリナ、あなたは誰なの！？って言おうと思ってたのに。どうでもいいことだけど、さっきの非COはペーターの占い師CO見て「と思ってたけど」ってことね。オットー、確白の人がいるならまとめ役困らないわよね。でも、続けて貰って指定した先の占いや霊判定で黒が出ると真偽判断材料は増えると思ってたわ。"


class SyntacsAnalysis:
    sentence = ""
    cabocha = CaboCha.Parser("-u ../user.dic -d /usr/lib/x86_64-linux-gnu/mecab/dic/mecab-ipadic-neologd")
    # -u (ユーザー辞書の相対パス) -d (ipadicとかのあるディレクトリの絶対パス(いるのであれば)(あると強そう))

    def __init__(self, sentence):
        self.sentence = sentence

    def syntacsAnalysis(self):
        result = []
        tmpStr = ""
        tmpChunkID = ""
        tmpChunkLink = ""
        tmpChunkScore = ""
        tree = self.cabocha.parse(self.sentence)
        chunkId = 0
        for i in range(0, tree.size()):
            token = tree.token(i)
            if token.chunk != None:
                if tmpStr != "":
                    # print(tmpStr)
                    clauses = Clauses.Clauses(tmpStr, tmpChunkID, tmpChunkLink, tmpChunkScore)
                    # result.append([chunkId, token.chunk.link, token.chunk.head_pos,token.chunk.func_pos, token.chunk.score])
                    result.append(clauses)
                    tmpStr = ""
                # print(chunkId, token.chunk.link, token.chunk.score)
                tmpChunkID = chunkId
                tmpChunkLink = token.chunk.link
                tmpChunkScore = token.chunk.score
                chunkId += 1
            print(token.surface, token.feature)
            tmpStr += token.surface
            # print(token.surface)
        clauses = Clauses.Clauses(tmpStr, tmpChunkID, tmpChunkLink, tmpChunkScore)
        result.append(clauses)
        # print(tmpStr)
        return result

hello = SyntacsAnalysis(testSentence)
# print(hello.syntacsAnalysis())
res = hello.syntacsAnalysis()
for resu in res:
    print(resu.clause, resu.myID, resu.toID, resu.score)