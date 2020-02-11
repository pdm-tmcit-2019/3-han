# coding: utf8
import json

class Error:
	json_data = None
	my_character_name = ""
	my_character_id = 0
	my_character_role_name = ""
	content = ""
	token = ""
	day = 0


	def __init__(
		self,
		my_character_name,
		my_character_id
		my_character_role_name,
		content, 
		token,
		day
	):
		json_file = open('model/api/request/jsonld/error.jsonld', encoding="utf_8")
		self.json_data = json.load(json_file)
		self.my_character_name = my_character_name
		self.my_character_id = my_character_id
		self.my_character_role_name = my_character_role_name
		self.content = content
		self.token = token
		self.day = day
		self.json_data["myCharacter"]["name"]["ja"] = self.my_character_name
		self.json_data["myCharacter"]["name"]["en"] = self.my_character_name
		self.json_data["myCharacter"]["id"] = self.my_character_id
		self.json_data["myCharacter"]["role"]["name"]["ja"] = self.my_character_role_name
		self.json_data["myCharacter"]["role"]["name"]["en"] = self.my_character_role_name
		self.json_data["content"]["ja"] = content
		self.json_data["content"]["en"] = content
		self.json_data["day"] = self.day
		self.json_data["token"] = self.token

	def get(self, prediction, character_name, role_name):
		return str(self.json_data)
