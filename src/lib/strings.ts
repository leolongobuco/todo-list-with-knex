import { randomUUID } from "node:crypto"

export namespace Strings {
	export const uuid = () => randomUUID()
}
