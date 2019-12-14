
export class DayVotes {
	player_id: number;
	doubt_player_id: number;

	constructor(player_id: number, doubt_player_id: number) {
		this.player_id = player_id;
		this.doubt_player_id = doubt_player_id;
	}
}
