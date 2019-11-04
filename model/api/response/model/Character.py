# coding: utf8

class Character:
	isMine = ""
	name = None
	image = ""
	id = 0
	status = ""
	update = None
	isAChoice = False

	def __init_ (
		self,
		isMine,
		name,
		image,
		id,
		status,
		update,
		isAChoice ):
			self.isMine = isMine
			self.name = name
			self.image = image
			self.id = id
			self.status = status
			self.update = update
			self.isAChoice = isAChoice
