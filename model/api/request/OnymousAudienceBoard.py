# coding: utf8
import json

class OnymousAudienceBoard:
	avatar_name = None
	character_name = None
	role_name = None

	def __init__(self):
		self.avatar_name = "villager1"

	def get(self, prediction, character_name, role_name):
		f = open('model/api/request/jsonld/onymousAudienceBoard.jsonld', encoding="utf_8")
		json_data = json.load(f)
		json_data["prediction"] = prediction
		json_data["avatar"]["name"] = self.avatar_name
		json_data["character"]["name"]["en"] = character_name
		json_data["role"]["name"]["en"] = role_name
		return str(json_data)
