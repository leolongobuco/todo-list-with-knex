import { Schemas } from "../../lib/schemas"
import { Models } from "./models"
import { z } from "zod"

export namespace Validators {
	export const user: z.ZodType<Models.User> = z.object({
		id: Schemas.uuid,
		name: Schemas.notEmptyString,
		email: Schemas.email,
		role: Schemas.notEmptyString,
		avatarUrl: z.string().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
	})
}
