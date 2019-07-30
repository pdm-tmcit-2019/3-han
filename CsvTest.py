from module import Input
from module import MorphologicalAnalysis
from module import Normalization
from module import SyntacticAnalysis
from module import Output
import io,sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

if len(sys.argv) != 2:
    print("Error: input filePath arg")
    sys.exit(1)

argFilePath = sys.argv[1]
input = Input.Input()
input.setCsvFile(argFilePath)

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
    # まだ正規化が使えないので飛ばす(とりあえず元の文章)
    tmpSentence = ""
    for nowWord in aftereMorphologicalAnalysisSentence:
        tmpSentence += nowWord.word

    # 構文解析
    syntacsAnalysis = SyntacticAnalysis.SyntacsAnalysis(tmpSentence)
    afterSyntacsAnalysis = syntacsAnalysis.syntacsAnalysis()

    for now in afterSyntacsAnalysis:
        print(now)

    # 意味抽出


    # 状態の更新




    # 次のログへ
    break
    input.next()

# 出力
output = Output.Output()
output.csvOutput(argFilePath, 'Hello')