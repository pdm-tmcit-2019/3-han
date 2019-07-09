from module import Input
import io,sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

input = Input.Input()
input.setCsvFile('./village_g10.csv')

while True:
    # CSV読み込み
    nowDay = input.getDay()
    talkPlayerName = input.getPlayerName()
    talkWord = input.getTalk()

    # 読み込めなかったら終了
    if nowDay is None:
        break


    print(nowDay, talkPlayerName, talkWord)
    # 次のログへ
    input.next()
