import sys
import pandas as pd

class Input:
    def getByCmdline(self):
        print("input:", end="")
        str = input()
        return str
    def setCsvFile(self, filePath):
        self.df = pd.read_csv(filePath, sep=',', names=('何日目', 'プレイヤー名', '役職', '発言'))
        self.index = 0
    def getCsv(self):
        if(len(self.df) < self.index+1):
            return None
        res = self.df[self.index:self.index+1]
        return res

    # 列を指定して値を取得
    def getDay(self):
        if(len(self.df) < self.index+1):
            return None
        return self.df.iat[self.index, 0]
    def getPlayerName(self):
        if(len(self.df) < self.index+1):
            return None
        return self.df.iat[self.index, 1]
    def getRole(self):
        if(len(self.df) < self.index+1):
            return None
        return self.df.iat[self.index, 1]
    def getTalk(self):
        if(len(self.df) < self.index+1):
            return None
        return self.df.iat[self.index, 3]

    # 次の行へ
    def next(self):
        self.index += 1