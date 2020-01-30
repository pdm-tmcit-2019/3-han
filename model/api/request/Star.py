# coding: utf8
import json

class Star:
	my_character_name = None
	my_character_role = None

	def __init__(self):
		self.my_character_name = "Adil"
		self.my_character_role = "Villager"

	def get(self, is_marked):
		f = open('model/api/request/jsonld/star.jsonld', encoding="utf_8")
		json_data = json.load(f)
		json_data["myCharacter"]["name"]["en"] = self.my_character_name
		json_data["myCharacter"]["name"]["ja"] = self.my_character_name
		json_data["myCharacter"]["role"]["name"]["en"] = self.my_character_role
		json_data["myCharacter"]["role"]["name"]["ja"] = self.my_character_role
		json_data["star"]["isMarked"] = is_marked
		return str(json_data)
