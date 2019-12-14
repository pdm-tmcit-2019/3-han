
export class NightVotes {
	player_id: number;
	aim_player_id: number;

	constructor(player_id: number, aim_player_id: number) {
		this.player_id = player_id;
		this.aim_player_id = aim_player_id;
	}
}
