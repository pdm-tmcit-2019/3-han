# coding: utf8
import json

class OnymousAudienceChat:
	json_data = None

	def __init__(self):
		f = open('model/api/request/jsonld/onymousAudienceChat.jsonld', encoding="utf_8")
		self.json_data = json.load(f)
		self.json_data["avatar"]["name"] = "villager1"

	def get(self, text):
		self.json_data["text"]["@value"] = text
		return str(self.json_data)
