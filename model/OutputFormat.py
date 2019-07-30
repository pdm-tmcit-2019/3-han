# coding: utf8

class OutputFormat:
	NAME = "hello world"
	
	@staticmethod
	def COMMING_OUT_VILLAGER():
		return "はい、私は村人です"

	@staticmethod
	def COMMING_OUT_SEER(player_name="", player_job=""):
		return "いいえ、私は占い師です＋{}さんは{}}でした".format(player_name, player_job)

	@staticmethod
	def COMMING_OUT_WEREWOLF():
		return "はい、私は村人で"
	
	@staticmethod
	def DAUPT_PLAYER_TO_ME_WEREWOLF():
		return "いいえ"

	@staticmethod
	def DAUPT_PLAYER_TO_ME_SEER():
		return "はい、〇〇が占い師ではなく人狼だと思います"

	@staticmethod
	def DAUPT_PLAYER_TO_ME_HUNTER():
		return "いいえ、騎士の人はカミングアウトしないほうがいいと思います"

	@staticmethod
	def	QUESTION_PLAYER_TO_ME_VOTHING_WHO():
		return "OOに投票します。"
