# coding: utf8

import os,sys
sys.path.append(os.path.join(os.path.dirname(__file__), 'model/api'))
from request import OnymousAudienceBoard


onymousAudienceBoard = OnymousAudienceBoard.OnymousAudienceBoard()
data = onymousAudienceBoard.get("O", "Borya", "Madman")
print(data)
# websocket.send(data)
