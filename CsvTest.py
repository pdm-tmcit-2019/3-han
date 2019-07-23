from module import Input
from module import MorphologicalAnalysis
from module import Normalization
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

    # 文字列の正規化
    # normalization = Normalization.Normalization()
    # まだ正規化が使えないので飛ばす
    tmpSentence = ""
    for nowWord in aftereMorphologicalAnalysisSentence:
        tmpSentence += nowWord.word

    # 構文解析
    print(tmpSentence)



    # print(nowDay, talkPlayerName, aftereMorphologicalAnalysisSentence)

    # 次のログへ
    break
    input.next()
