import Signal from "@rbxts/signal";
import ServerChickynoid from "./ServerChickynoid";

interface PlayerRecord {
	userId: number;
	player: Player;

	chickynoid: ServerChickynoid;

	OnBeforePlayerSpawn: Signal<() => void>;

	Despawn(): void;
	Spawn(): void;
}

interface PlayerRecordConstructor {
	/**
	 * Constructed internally. Do not use directly.
	 * @private
	 */
	new (): PlayerRecord;
}

declare const PlayerRecord: PlayerRecordConstructor;
export = PlayerRecord;