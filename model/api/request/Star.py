# coding: utf8
import json

class Star:
	json_data = None

	def __init__(self, token, phase, day, is_marked):
		f = open('model/api/request/jsonld/star.jsonld', encoding="utf_8")
		self.json_data = json.load(f)
		self.json_data["token"] = token
		self.json_data["phase"] = phase
		self.json_data["day"] = day
		self.json_data["myCharacter"]["name"]["en"] = "Adil"
		self.json_data["myCharacter"]["name"]["ja"] = "Adil"
		self.json_data["myCharacter"]["role"]["name"]["en"] = "Villager"
		self.json_data["myCharacter"]["role"]["name"]["ja"] = "Villager"
		self.json_data["star"]["isMarked"] = is_marked

	def get(self):
		return str(self.json_data)
