import sys
import CaboCha

testSentence = "COします"

class SyntacsAnalysis:
    sentence = ""
    cabocha = CaboCha.Parser("-u /mnt/c/Users/machibito2/Dropbox/school/5-grade/jinrou/3-han/user.dic -d /usr/lib/x86_64-linux-gnu/mecab/dic/mecab-ipadic-neologd")
    # -u (ユーザー辞書の絶対パス) -d (ipadicとかのあるディレクトリの絶対パス(いるのであれば)(あると強そう))

    def __init__(self, sentence):
        self.sentence = sentence

    def syntacsAnalysis(self):
        tree =  self.cabocha.parse(self.sentence)
        chunkId = 0
        for i in range(0, tree.size()):
            token = tree.token(i)
            if token.chunk != None:
                print(chunkId, token.chunk.link, token.chunk.head_pos,token.chunk.func_pos, token.chunk.score)
                chunkId += 1

            print(token.surface, token.feature, token.ne)

hello = SyntacsAnalysis(testSentence)
hello.syntacsAnalysis()