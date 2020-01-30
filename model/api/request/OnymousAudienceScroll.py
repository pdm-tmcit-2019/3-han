# coding: utf8
import json

class OnymousAudienceScroll:
	avatar_name = None

	def __init__(self):
		self.avatar_name = "villager1"

	def get(self):
		f = open('model/api/request/jsonld/onymousAudienceScroll.jsonld', encoding="utf_8")
		json_data = json.load(f)
		json_data["avatar"]["name"] = self.avatar_name
		return str(json_data)
