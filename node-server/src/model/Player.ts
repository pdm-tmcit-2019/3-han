
export class Player {
	id: number;
	player_name: string;
	job: number;
	alive: number;

	constructor(id: number, player_name: string, job: number, alive: number) {
		this.id = id;
		this.player_name = player_name;
		this.job = job;
		this.alive = alive;
	}
}
