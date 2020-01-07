# coding: utf8
import random

class MeaningExtraction:
    ROLE_LIST = ["村人", "占い師", "霊媒師", "狩人", "双子", "狂人", "人狼", "妖狐"]    # 役職一覧
    FIRST_PERSON_LIST = ["私", "わたし", "僕", "ぼく"]  # 一人称一覧
    def checkCo(self, afterSyntacsAnalysis):
        sentence = u""
        for nowAnal in afterSyntacsAnalysis:
            sentence += nowAnal.clause
        # 役職名が含まれる
        for index in range(len(self.ROLE_LIST)):
            if sentence.find(self.ROLE_LIST[index]) != -1:
                # 一人称が含まれる
                for indexFirst in range(len(self.FIRST_PERSON_LIST)):
                    if sentence.find(self.FIRST_PERSON_LIST[indexFirst]) != -1:
                        return index
        return -1

    def checkQuestionToMe(self, afterSyntacsAnalysis, myNameList):
        sentence = u""
        for nowAnal in afterSyntacsAnalysis:
            sentence += nowAnal.clause

        # はてな記号が入っているかチェック
        hatenaFlag = False
        if sentence.find("?") != -1:
            hatenaFlag = True
        if sentence.find("？") != -1:
            hatenaFlag = True
        if hatenaFlag == False:
            return -1

        # 自分の名前が含まれる
        for indexMyName in range(len(myNameList)):
            if sentence.find(myNameList[indexMyName]) != -1:
                # 役職名が含まれる
                for roleIndex in range(len(self.ROLE_LIST)):
                    if sentence.find(self.ROLE_LIST[roleIndex]) != -1:
                        return roleIndex
        return -1

    # 占い先を決定
    # fortunedList 0:占ってない, 1:占った
    def decisionFortune(self, fortunedList):
        randomList = []
        for i in range(len(fortunedList)):
            if(fortunedList[i] == 0):
                randomList.append(i)
        return random.choice(randomList)