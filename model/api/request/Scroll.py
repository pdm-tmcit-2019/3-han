# coding: utf8
import json

class Scroll:
	json_data = None

	def __init__(self):
		f = open('model/api/request/jsonld/scroll.jsonld', encoding="utf_8")
		self.json_data = json.load(f)
		self.json_data["myCharacter"]["name"]["en"] = "Adil"
		self.json_data["myCharacter"]["name"]["ja"] = "Adil"
		self.json_data["myCharacter"]["role"]["name"]["en"] = "Villager"
		self.json_data["myCharacter"]["role"]["name"]["ja"] = "Villager"

	def get(self):
		return str(self.json_data)
