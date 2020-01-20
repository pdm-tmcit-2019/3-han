# coding: utf-8

import rx
import os
import sys
import urllib
import json
import string
from rx import operators as ops
from rx.subject import Subject
from rx.scheduler import NewThreadScheduler
import websocket
import threading
import json
# scheduler = IOLoopScheduler(ioloop.IOLoop.current())

URL = "ws://localhost:8000"

class Socket:
	def __init__(self):
		self.stream = Subject()
		url = URL
		react = self.stream.pipe(
			ops.observe_on(NewThreadScheduler()),
			ops.map(lambda x: json.dump(x)),
			ops.buffer_with_count(10),
		)

		react.subscribe()

		websocket.enableTrace(True)
		ws = websocket.WebSocketApp(url,
			on_open = self.on_open,
			on_message = self.on_message,
			on_error = self.on_error,
			on_close = self.on_close,
		)

		ws.run_forever()

	def on_open(ws):
		print("connected.")

	def on_close(ws):
		print("disconnected.")

	def on_message(ws, message):
		print(message)

	def on_error(ws, error):
		print(error)