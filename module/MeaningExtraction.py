# coding: utf8


class MeaningExtraction:
    ROLE_LIST = ["村人", "占い師", "霊媒師", "狩人", "双子", "狂人", "人狼", "妖狐"]
    FIRST_PERSON_LIST = ["私", "わたし", "僕", "ぼく"]
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
