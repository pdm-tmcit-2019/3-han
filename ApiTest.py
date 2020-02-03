# coding: utf8

import os,sys
sys.path.append(os.path.join(os.path.dirname(__file__), 'model/api'))
from request import OnymousAudienceBoard
from request import OnymousAudienceChat
from request import OnymousAudienceScroll
from request import Scroll
from request import Star


onymousAudienceBoard = OnymousAudienceBoard.OnymousAudienceBoard("3F2504E0-4F89-11D3-9A0C-0305E82C3301", "morning", 2, "O", "Borya", "Madman")
onymousAudienceChat = OnymousAudienceChat.OnymousAudienceChat("3F2504E0-4F89-11D3-9A0C-0305E82C3301", "morning", 2, "こんにちは")
onymousAudienceScroll = OnymousAudienceScroll.OnymousAudienceScroll("3F2504E0-4F89-11D3-9A0C-0305E82C3301", "morning", 2)
scroll = Scroll.Scroll("3F2504E0-4F89-11D3-9A0C-0305E82C3301", "morning", 2)
star = Star.Star("3F2504E0-4F89-11D3-9A0C-0305E82C3301", "morning", 2, True)
data = onymousAudienceBoard.get()
print(data)
data = onymousAudienceChat.get()
print(data)
data = onymousAudienceScroll.get()
print(data)
data = scroll.get()
print(data)
data = star.get()
print(data)
# websocket.send(data)
