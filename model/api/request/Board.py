# coding: utf8
import json

class NoonVote:
	json_data = None 
	my_character_name = ""
	my_character_id = 0
	my_character_role_name = ""
	character_name = ""
	character_id = 0
	token = ""
	day = 0
	prediction = ""

	def __init__(
		self,
		my_character_name,
		my_character_id
		my_character_role_name,
		character_name,
		character_id,
		token,
		day,
		prediction
	):
		json_file = open('model/api/request/jsonld/board.jsonld', encoding="utf_8")
		self.json_data = json.load(json_file)
		self.my_character_name = my_character_name
		self.my_character_id = my_character_id
		self.my_character_role_name = my_character_role_name
		self.character_name = character_name
		self.character_id = character_id
		self.token = token
		self.day = day
		self.prediction = prediction
		self.json_data["myCharacter"]["name"]["ja"] = self.my_character_name
		self.json_data["myCharacter"]["name"]["en"] = self.my_character_name
		self.json_data["myCharacter"]["id"] = self.my_character_id
		self.json_data["myCharacter"]["role"]["name"]["ja"] = self.my_character_role_name
		self.json_data["myCharacter"]["role"]["name"]["en"] = self.my_character_role_name
		self.json_data["character"]["name"]["ja"] = self.character_name
		self.json_data["character"]["name"]["en"] = self.character_name
		self.json_data["day"] = self.day
		self.json_data["token"] = self.token
		self.json_data["prediction"] = self.prediction

	def get(self, prediction, character_name, role_name):
		return str(self.json_data)
