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
        self.myClass = myClass
        self.myName = myName

        # 占った結果を保持するよう
        self.fortunedIndex = -1
        self.fortunedResult = -1

        # 前回守ったプレイヤー(狩人)
        self.beforeProtectedIndex = -1

        # プレイヤーの役職リスト(わからない場合は空白)
        self.playerRollList = []
        for i in range(self.playerN):
            self.playerRollList.append("")

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
        self.playerRollList[myIndex] = myClass

    # deathListから反転したaliveListを取得
    def getAliveList(self):
        alive = []
        for i in range(self.playerN):
            if self.deathList[i] == 1:
                alive.append(0)
            else:
                alive.append(1)
        return alive

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

        # 占い師の場合結果を発言する
        if self.myClass == "占い師":
            fortuneStr = self.playerNameList[self.fortunedIndex] + "は、"
            if self.fortunedResult == 0:
                fortuneStr += "村人でした。"
            elif self.fortunedResult == 1:
                fortuneStr += "人狼でした。"
            outputStrList.append(fortuneStr)


        return outputStrList

    # 占い師の場合のみ呼ぶ
    def fortune(self):
        meaningExtraction = MeaningExtraction.MeaningExtraction()
        targetIndex = meaningExtraction.decisionFortune(self.divulgedList, self.deathList)
        self.divulgedList[targetIndex] = 1

        # サーバーに問い合わせるモデルを呼ぶ
        targetResult = 1    # 0:村人, 1:人狼

        self.fortunedIndex = targetIndex
        self.fortunedResult = targetResult

    # 人狼の場合の噛み先
    def decideBiteTo(self):
        meaningExtraction = MeaningExtraction.MeaningExtraction()
        biteIndex = meaningExtraction.decideBiteTo(self.playerRollList, self.getAliveList(), self.getPlayerIndex(self.myName))

        # サーバーに送信
    
    # 狩人の場合の守る先を決定
    def decideProtectTo(self):
        meaningExtraction = MeaningExtraction.MeaningExtraction()
        protectIndex = meaningExtraction.decideProtectTo(self.getAliveList(), self.beforeProtectedIndex, self.getPlayerIndex(self.myName))

        # サーバに送信

        self.beforeProtectedIndex = protectIndex

playerNameList0 = ["あ", "い", "田中", "佐藤", "鈴木"]
myName0 = "あ"
myClass0 = "占い師"

ai = Ai(playerNameList0, myName0, myClass0)
ai.reflectDeathPlayer("い")
ai.fortune()
# ai.reflectDeathPlayer("お")
# ai.reflectDeathPlayer("え")

ai.input("私は村人です", "う")

print(ai.output())