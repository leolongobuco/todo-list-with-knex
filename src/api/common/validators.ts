import { Schemas } from "../../lib/schemas"
import { z } from "zod"

export namespace Validators {
	export const user = z.object({
		id: Schemas.uuid,
		name: Schemas.notEmptyString,
		email: Schemas.email,
		role: Schemas.notEmptyString,
		avatarUrl: z.string().optional().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
	})

	export const card = z.object({
		id: Schemas.uuid,
		name: Schemas.notEmptyString,
		description: z.string().optional().nullable(),
		isDone: z.boolean(),
		owner: z.string().optional().nullable(),
		userId: Schemas.notEmptyString,
		createdAt: z.date(),
		updatedAt: z.date().optional().nullable(),
	})
}
