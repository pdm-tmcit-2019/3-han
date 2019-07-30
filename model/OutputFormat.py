# coding: utf8

class OutputFormat:
	NAME = "hello world"
	
# ex1

	@staticmethod
	def COMMING_OUT_VILLAGER():
		return "はい、私は村人です"

	@staticmethod
	def COMMING_OUT_SEER(player_name="", player_job=""):
		return "いいえ、私は占い師です。{}さんは{}でした".format(player_name, player_job)

	@staticmethod
	def COMMING_OUT_WEREWOLF():
		return "はい、私は村人です"
	
# ex3

	@staticmethod
	def DAUPT_PLAYER_TO_ME_WEREWOLF():
		return "いいえ"

	@staticmethod
	def DAUPT_PLAYER_TO_ME_SEER(player_name):
		return "はい、{}が占い師ではなく人狼だと思います".format(player_name)

	@staticmethod
	def DAUPT_PLAYER_TO_ME_HUNTER():
		return "いいえ、騎士の人はカミングアウトしないほうがいいと思います"

# ex4

	@staticmethod
	def	QUESTION_PLAYER_TO_ME_VOTHING_WHO(player_name):
		return "{}に投票します。".format(player_name)

	@staticmethod
	def QUESTION_PLAYER_TO_ME_WOLF():
		return "私は人狼ではありません"

	
	# TELLは日本語で占う
	@staticmethod
	def QUESTION_PLAYER_TO_ME_WHO_TELL(player_name, player_job):
		return "{}を占って、{}でした".format(player_name, player_job)

	@staticmethod
	def QUESTION_PLAYER_TO_ME_WHO_WOLF(player_name):
		return "{}が人狼っぽいと思います".format(player_name)

	@staticmethod
	def QUESTION_PLAYER_TO_ME_VILLAGER():
		return "はい"

	@staticmethod
	def QUESTION_PLAYER_TO_ME_COUPLE(player_name):
		return "はい、{}と私はカップルです".format(player_name)

# ex5
# 今のところ発言なし