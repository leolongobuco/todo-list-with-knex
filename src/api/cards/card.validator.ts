import { z } from "zod"
import { Strings } from "../../lib/strings"
import { Schemas } from "../../lib/schemas"

export namespace CardValidator {
	export const card = z
		.object({
			id: Schemas.uuid,
			isDone: z.boolean(),
			description: z.string().optional(),
			name: z.string(),
			userId: Schemas.uuid,
			owner: Schemas.uuid.optional(),
			createdAt: z.date(),
			updatedAt: z.date(),
		})
		.strict()
}
