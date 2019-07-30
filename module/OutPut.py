# coding: utf8

import pandas as pd

class Output:
    # 最後の行にtextを追加してCSVで出力
    def csvOutput(self, filePath, text):
        df = pd.read_csv(filePath, sep=',', names=('何日目', 'プレイヤー名', '役職', '発言'))
        df.iat[len(df)-1, len(df.columns)-1] = text
        df.to_csv("./output.csv", header=False, index=False)
