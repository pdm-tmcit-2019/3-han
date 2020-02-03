# coding: utf-8
# あと残り、jsonからデータをうまいこと引っ張ってサブスクライブするだけ

import os
import json
import string
import websocket
import threading
import OutPut.py

URL = "ws://localhost:8000"

class SendSocket:
	def __init__(self):
		self.stream = Subject()
		url = URL
		message = Output.csvOutput()

		websocket.enableTrace(True)
		ws = websocket.WebSocketApp(url,)
		ws.send(message)

		ws.on_close()

if __name__ == '__main__':
	ws_exection = Socket()