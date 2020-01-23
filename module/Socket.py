# coding: utf-8
# あと残り、jsonからデータをうまいこと引っ張ってサブスクライブするだけ

import os
import rx
import json
import string
from rx import operators as ops
from rx.subject import Subject
from rx.scheduler import NewThreadScheduler
import websocket
import threading

URL = "ws://localhost:8000"

class Socket:
	def __init__(self):
		self.stream = Subject()
		url = URL

		websocket.enableTrace(True)
		ws = websocket.WebSocketApp(url,
			on_message = self.on_message,
			on_error = self.on_error,
		)
		react = self.stream.pipe(
			ops.observe_on(NewThreadScheduler()),
			ops.map(lambda x: x["day"]),
			#ops.map(lambda obj: obj["character"]["name"]),
			#ops.map(lambda x: x["role"]["name"]),
			#ops.map(lambda x: x["text"]),
		)

		react.subscribe(print)

		try :
			ws.run_forever()
		except KeyboardInterrupt:
			self.stream.dispose()
			ws.on_close()

	def on_message(self, message):
		obj = json.loads(message)
		self.stream.on_next(obj)

	def on_error(self, error):
		print(error)

if __name__ == '__main__':
	ws_exection = Socket()