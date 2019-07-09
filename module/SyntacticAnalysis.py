import sys
import CaboCha

testSentence = "太郎はこの本を二郎を見た女性に渡した。"

cabocha = CaboCha.Parser("-u /mnt/c/Users/machibito2/Dropbox/school/4-grade/zemi/MultipleLengthFloatingPointCalc/3-han/user.dic -d /usr/lib/x86_64-linux-gnu/mecab/dic/mecab-ipadic-neologd")
# -u (ユーザー辞書の絶対パス) -d (ipadicとかのあるディレクトリの絶対パス(いるのであれば)(あると強そう))

def syntacsAnalysis(inputSentence):
    tree =  cabocha.parse(inputSentence)
    chunkId = 0
    for i in range(0, tree.size()):
        token = tree.token(i)
        if token.chunk != None:
            print(chunkId, token.chunk.link, token.chunk.head_pos,token.chunk.func_pos, token.chunk.score)
            chunkId += 1

        print(token.surface, token.feature, token.ne)

syntacsAnalysis(testSentence);