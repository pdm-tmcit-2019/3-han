import sys
import pandas as pd

class Input:
    def getByCmdline(self):
        print("input:", end="")
        str = input()
        return str
    def getByCsvFile(self, filePath):
        self.df = pd.read_csv(filePath, sep=',', names=('何日目', 'プレイヤー名', '役職', '発言'))
        self.index = 0
    def getNextCsv(self):
        if(len(self.df) < self.index+1):
            return None
        res = self.df[self.index:self.index+1]
        self.index += 1
        return res