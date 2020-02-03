# coding: utf8
import json

class OnymousAudienceScroll:
	json_data = None

	def __init__(self, token, phase, day):
		f = open('model/api/request/jsonld/onymousAudienceScroll.jsonld', encoding="utf_8")
		self.json_data = json.load(f)
		self.json_data["avatar"]["name"] = "villager1"
		self.json_data["token"] = token
		self.json_data["phase"] = phase
		self.json_data["day"] = day

	def get(self):
		return str(self.json_data)
