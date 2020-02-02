# coding: utf8
import json

class OnymousAudienceBoard:
	json_data = None

	def __init__(self):
		f = open('model/api/request/jsonld/onymousAudienceBoard.jsonld', encoding="utf_8")
		self.json_data = json.load(f)
		self.json_data["avatar"]["name"] = "villager1"

	def get(self, prediction, character_name, role_name):
		self.json_data["prediction"] = prediction
		self.json_data["character"]["name"]["en"] = character_name
		self.json_data["character"]["name"]["ja"] = character_name
		self.json_data["role"]["name"]["en"] = role_name
		self.json_data["role"]["name"]["ja"] = role_name
		return str(self.json_data)
