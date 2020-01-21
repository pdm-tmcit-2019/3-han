# coding: utf8

import MeaningExtraction
import MorphologicalAnalysis
import Normalization
import SyntacticAnalysis

class Ai:
    # myClass: 人狼, 占い師, or else
    def __init__(self, playerNameList, myName, myClass):
        self.playerNameList = playerNameList
        self.playerN = len(playerNameList)
        # 占ったリスト
        self.divulgedList = []
        for i in range(self.playerN):
            self.divulgedList.append(0)

        # COしたリスト
        self.coList = []
        for i in range(self.playerN):
            self.coList.append(0)

        myIndex = getPlayerIndex(myName)
        self.divulgedList[myIndex] = 1
        self.coList[myIndex] = 1

    # プレイヤー名からindexを返す
    def getPlayerIndex(self, playerName):
        for i in range(self.playerN):
            if self.playerNameList[i] == playerName:
                return i
        return -1

    def input(self, talkSentence, talkPlayerName):
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

        # 意味抽出
        meaningExtraction = MeaningExtraction.MeaningExtraction()

        # COかチェック
        coCheckResult = meaningExtraction.checkCo(afterSyntacsAnalysis)
        if coCheckResult != -1:
            coPlayerIndex = getPlayerIndex(playerName)
            self.coList[coPlayerIndex] = 1
    
    def output(self):
        outputStrList = []

        # coしてない人を催促する
        coFlag = False
        coStr = ""
        for i in range(self.playerN):
            if self.coList[i] != 1:
                if coFlag == False:
                    coStr += self.playerNameList[i]
                else:
                    coStr += ", " + self.playerNameList[i]
                coFlag = True
        coStr += "はCOしてください"
        if coFlag:
            outputStrList += coStr
