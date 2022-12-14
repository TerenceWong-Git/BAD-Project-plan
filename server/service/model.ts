export interface Player {
	id: number;
	name?: string;
	email: string;
	password: string;
	image?: string;
	age?: number;
	gender?: number;
}

export interface Room {
	id: number;
	name: string;
	password: string;
	game_mode_id: number;
}

export interface MatchesLive {
	id: number;
	rooms_id: number;
	players_id: number;
	is_spectator: boolean;
}

export interface RoomMatch {
	rooms_id: number;
	matches_live_id: number;
}
