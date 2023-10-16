import { Schema, z } from "zod"
import { Schemas } from "../../../lib/schemas"

export namespace CreateCardValidator {
	export const requestBody = z
		.object({
			description: z.string().optional(),
			name: z.string(),
			userId: Schemas.uuid,
			owner: Schemas.uuid.optional(),
		})
		.strict()
}
