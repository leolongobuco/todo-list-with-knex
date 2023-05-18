import { Nullable } from "../../lib/utility-types"

export namespace Models {
	export type Card = {
		id: string
		name: string
		description?: Nullable<string>
		isDone: boolean
		owner?: Nullable<string>
		userId: string
		createdAt: Date
		updatedAt?: Nullable<Date>
	}

	export type User = {
		id: string
		name: string
		email: string
		role: string
		avatarUrl?: Nullable<string>
		createdAt: Date
		updatedAt: Date
	}
}
