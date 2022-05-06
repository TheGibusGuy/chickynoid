/** @server */
export namespace ChickynoidServer {
	export interface ServerConfig {
		/** Theoretical max, use a byte for player id */
		maxPlayers: number;
		fpsMode: FpsMode;
		serverHz: number;
	}

	export const enum FpsMode {
		Uncapped,
		Hybrid,
		Fixed60,
	}

	export let config: ServerConfig;

	/** Creates connections so that Chickynoid can run on the server. */
	export function Setup(this: typeof ChickynoidServer): void;

	export function RecreateCollisions(this: typeof ChickynoidServer, root: Instance): void;
}
