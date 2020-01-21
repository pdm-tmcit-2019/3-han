# coding: utf8
import random
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from module import SyntacticAnalysis

class MeaningExtraction:
    ROLE_LIST = ["村人", "占い師", "霊媒師", "狩人", "双子", "狂人", "人狼", "妖狐"]
    FIRST_PERSON_LIST = ["私", "わたし", "僕", "ぼく"]
    HUMAN_ROLE_LIST = ["村人", "占い師", "霊媒師", "狩人", "双子"]
    ENEMY_ROLE_LIST = ["狂人", "人狼", "妖狐"]
    
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

    # 霊媒対象決定
    def decideMediumTo(self, beforeDeadPeople):
        # 霊媒対象は毎ターン1人しか出ないから吊った人
        return beforeDeadPeople;

    # 自分が狩人で守る対象決定
    def decideProtectTo(self, alivePeople, beforeProtected):
        protectTarget = []
        for index in range(len(alivePeople)):
            # 前に守ってない人の中で生きてる人からランダム
            if index != beforeProtected and alivePeople[index] == 1:
                protectTarget.append(index)
        return protectTarget[random.randint(0, len(protectTarget)-1)]

    # 吊り先決定
    def decideKillTo(self, nowRoleList, nowAliveList):
        alive = []
        for index in range(len(nowRoleList)):
            if(nowAliveList[index]):
                alive.append(index)
        killTarget = [alive[i] for i in range(len(alive)) if (nowRoleList[alive[i]] == "狂人" or nowRoleList[alive[i]] == "人狼" or nowRoleList[alive[i]] == "妖狐")]
        if(len(killTarget) == 0):
            killTarget.append(alive[random.randint(0, len(alive)-1)])
        return killTarget[random.randint(0, len(killTarget)-1)]

    # 噛み先決定
    def decideBiteTo(self, nowRoleList, nowAliveList):
        alive = []
        for index in range(len(nowRoleList)):
            if(nowAliveList[index]):
                alive.append(index)
        biteTarget = [alive[i] for i in range(len(alive)) if (nowRoleList[alive[i]] != "狂人" and nowRoleList[alive[i]] != "人狼")]
        if(len(biteTarget) == 0):
            biteTarget.append(alive[random.randint(0, len(alive)-1)])
        return biteTarget[random.randint(0, len(biteTarget)-1)]

#テスト

# testSentence = "私は人狼です"
# res = SyntacticAnalysis.SyntacsAnalysis(testSentence).syntacsAnalysis()

# alivePeople = [1, 1, 0, 1, 1, 1, 1, 1]
# nowRoleList = ["村人", "占い師", "霊媒師", "狩人", "双子", "人狼", "妖狐", "狂人"]

# print(len(nowRoleList))

# test = MeaningExtraction()
# print(test.checkCo(res))
# print(test.decideMediumTo(5))
# print(test.decideProtectTo(alivePeople, 1))
# print(nowRoleList[test.decideKillTo(nowRoleList, alivePeople)])
# print(nowRoleList[test.decideBiteTo(nowRoleList, alivePeople)])