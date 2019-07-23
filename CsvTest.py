from module import Input
from module import MorphologicalAnalysis
import io,sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

input = Input.Input()
input.setCsvFile('./village_g10.csv')

while True:
    # CSV読み込み
    nowDay = input.getDay()
    talkPlayerName = input.getPlayerName()
    talkSentence = input.getTalk()

    # 読み込めなかったら終了
    if nowDay is None:
        break

    # 形態素解析
    morphologicalAnalysis = MorphologicalAnalysis.MorphologicalAnalysis(talkSentence)
    aftereMorphologicalAnalysisSentence = morphologicalAnalysis.analysis()

    # print(nowDay, talkPlayerName, aftereMorphologicalAnalysisSentence)
    for now in aftereMorphologicalAnalysisSentence:
        print(now.word)
    # 次のログへ
    # break
    input.next()
