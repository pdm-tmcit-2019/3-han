# coding: utf8
import json

class Scroll:
	my_character_name = None
	my_character_role = None

	def __init__(self):
		self.my_character_name = "Adil"
		self.my_character_role = "Villager"

	def get(self):
		f = open('model/api/request/jsonld/scroll.jsonld', encoding="utf_8")
		json_data = json.load(f)
		json_data["myCharacter"]["name"]["en"] = self.my_character_name
		json_data["myCharacter"]["name"]["ja"] = self.my_character_name
		json_data["myCharacter"]["role"]["name"]["en"] = self.my_character_role
		json_data["myCharacter"]["role"]["name"]["ja"] = self.my_character_role
		return str(json_data)
