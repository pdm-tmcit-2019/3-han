# coding: utf8

class ResultCharacter:
	isMine = ""
	name = None
	image = ""
	id = 0
	status = ""
	result = None
	avatar = None

	def __init_ (
		self,
		isMine,
		name,
		image,
		id,
		status,
		result,
		avatar ):
			self.isMine = isMine
			self.name = name
			self.image = image
			self.id = id
			self.status = status
			self.result = result
			self.avatar = avatar
