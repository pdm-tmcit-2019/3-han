# coding: utf-8
# あと残り、jsonからデータをうまいこと引っ張ってサブスクライブするだけ
# 今欲しいデータは[avatar][name], [text][@value]

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
	def execute_this_method(self):
		self.stream = Subject()
		url = URL

		websocket.enableTrace(True)
		ws = websocket.WebSocketApp(url,
			on_message = self.on_message,
			on_error = self.on_error,
		)
		ws.run_forever()

		react = self.stream.pipe(NewThreadScheduler())
		return react.subscribe()

	def on_message(self, message):
		data = []
		json_data = json.loads(message)
		if json_data["phase"] != "flavor text":
			if json_data["phase"] == "morning":
				data = json_data["text"]["@value"]
			elif json_data["phase"] == "result":
				data = json_data["avatar"]["name"]
		self.stream.on_next(data)

	def on_error(self, error):
		print(error)