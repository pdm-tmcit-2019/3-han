# coding: utf8

import os,sys
sys.path.append(os.path.join(os.path.dirname(__file__), 'model/api'))
from request import OnymousAudienceBoard
from request import OnymousAudienceChat


onymousAudienceBoard = OnymousAudienceBoard.OnymousAudienceBoard()
onymousAudienceChat = OnymousAudienceChat.OnymousAudienceChat()
data = onymousAudienceBoard.get("O", "Borya", "Madman")
print(data)
data = onymousAudienceChat.get("こんにちは")
print(data)
# websocket.send(data)
