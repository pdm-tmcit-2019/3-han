# coding: utf8

from module import Input
from module import MorphologicalAnalysis
from module import Normalization
from module import SyntacticAnalysis
from module import OutPut
from module import MeaningExtraction
from model import OutputFormat
import numpy as np
import io,sys,nltk

nltk.download('punkt')

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
    if type(talkSentence) is float and np.isnan(talkSentence):
        break

    morphologicalAnalysis = MorphologicalAnalysis.MorphologicalAnalysis(talkSentence)
    aftereMorphologicalAnalysis = morphologicalAnalysis.analysis()

    # 文字列の正規化
    normalization = Normalization.Normalization(aftereMorphologicalAnalysis)
    afterNormalization = normalization.NormalizationFormCompatibilityComposition()

    # 構文解析
    syntacsAnalysis = SyntacticAnalysis.SyntacsAnalysis(afterNormalization)
    afterSyntacsAnalysis = syntacsAnalysis.syntacsAnalysis()
    # print(afterSyntacsAnalysis[0].clause)

    # 意味抽出
    meaningExtraction = MeaningExtraction.MeaningExtraction()
    checkCoResult = meaningExtraction.checkCo(afterSyntacsAnalysis)
    print(checkCoResult)

    # 状態の更新




    # 次のログへ
    input.next()

# 出力(「はい、私は村人です」固定)
output = Output.Output()
output.csvOutput(argFilePath, OutputFormat.OutputFormat.COMMING_OUT_VILLAGER())