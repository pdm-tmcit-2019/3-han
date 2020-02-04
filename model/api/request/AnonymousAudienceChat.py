# coding: utf8
import json

class AnonymousAudienceChat:
	json_data = None 
	text = ""
	token = ""
	day = 0

	def __init__(self):
		json_file = open('model/api/request/jsonld/anonymousAudienceChat.jsonld', encoding="utf_8")
		self.json_data = json.load(json_file)
		self.text = text
		json_file["text"]["@value"] = self.text

	def get(self, prediction, character_name, role_name):
		return str(self.json_data)

