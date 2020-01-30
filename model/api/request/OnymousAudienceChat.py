# coding: utf8
import json

class OnymousAudienceChat:
	avatar_name = None

	def __init__(self):
		self.avatar_name = "villager1"

	def get(self, text):
		f = open('model/api/request/jsonld/onymousAudienceChat.jsonld', encoding="utf_8")
		json_data = json.load(f)
		json_data["text"]["@value"] = text
		json_data["avatar"]["name"] = self.avatar_name
		return str(json_data)
