# coding: utf8

import MeaningExtraction
import MorphologicalAnalysis
import Normalization
import SyntacticAnalysis

import nltk
nltk.download('punkt')

class Ai:
    # myClass: 人狼, 占い師, or else
    def __init__(self, playerNameList, myName, myClass):
        self.playerNameList = playerNameList
        self.playerN = len(playerNameList)

        # 死んでいる人リスト
        self.deathList = []
        for i in range(self.playerN):
            self.deathList.append(0)

        # 占ったリスト
        self.divulgedList = []
        for i in range(self.playerN):
            self.divulgedList.append(0)

        # COしたリスト
        self.coList = []
        for i in range(self.playerN):
            self.coList.append(0)

        myIndex = self.getPlayerIndex(myName)
        self.divulgedList[myIndex] = 1
        self.coList[myIndex] = 1

    # 死んだ人を反映
    def reflectDeathPlayer(self, deathPlayerName):
        deathIndex = self.getPlayerIndex(deathPlayerName)
        self.deathList[deathIndex] = 1

    # プレイヤー名からindexを返す
    def getPlayerIndex(self, playerName):
        for i in range(self.playerN):
            if self.playerNameList[i] == playerName:
                return i
        return -1


    def input(self, talkSentence, talkPlayerName):
        # 形態素解析
        # if type(talkSentence) is float and np.isnan(talkSentence):
        #     return
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
            coPlayerIndex = self.getPlayerIndex(talkPlayerName)
            self.coList[coPlayerIndex] = 1
    
    def output(self):
        meaningExtraction = MeaningExtraction.MeaningExtraction()
        outputStrList = []

        # coしてない人を催促する
        coStr = ""
        noCoList = meaningExtraction.promptCo(self.coList, self.deathList)
        for i in range(len(noCoList)):
            if i == 0:
                coStr += self.playerNameList[noCoList[i]]
            else:
                coStr += ", " + self.playerNameList[noCoList[i]]
        coStr += "はCOしてください"

        if len(noCoList) != 0:
            outputStrList.append(coStr)

        return outputStrList


playerNameList0 = ["あ", "い", "う", "え", "お"]
myName0 = "あ"
myClass0 = "人狼"

ai = Ai(playerNameList0, myName0, myClass0)
ai.reflectDeathPlayer("い")
# ai.reflectDeathPlayer("お")
# ai.reflectDeathPlayer("え")

ai.input("私は村人です", "う")

print(ai.output())