# coding: utf8

import os,sys
sys.path.append(os.path.join(os.path.dirname(__file__), 'model/api'))
from request import OnymousAudienceBoard
from request import OnymousAudienceChat
from request import OnymousAudienceScroll
from request import Scroll


onymousAudienceBoard = OnymousAudienceBoard.OnymousAudienceBoard()
onymousAudienceChat = OnymousAudienceChat.OnymousAudienceChat()
onymousAudienceScroll = OnymousAudienceScroll.OnymousAudienceScroll()
scroll = Scroll.Scroll()
data = onymousAudienceBoard.get("O", "Borya", "Madman")
print(data)
data = onymousAudienceChat.get("こんにちは")
print(data)
data = onymousAudienceScroll.get()
print(data)
data = scroll.get()
print(data)
# websocket.send(data)
