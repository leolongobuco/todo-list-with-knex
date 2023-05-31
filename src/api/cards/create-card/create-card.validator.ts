import { z } from "zod"
import { Schemas } from "../../../lib/schemas"

export namespace CreateCardValidator {
	export const requestBody = z
		.object({
			isDone: z.boolean(),
			description: z.string().optional(),
			name: z.string(),
			userId: z.string(),
			owner: z.string().optional(),
		})
		.strict()

	export const responseSuccess = z
		.object({
			id: Schemas.uuid,
		})
		.strict()
}
