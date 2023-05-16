import { z } from "zod"
import { Errors } from "../errors/app-errors"

export namespace Schemas {
	export const notEmptyString = z.string().min(1)

	export const uuid = z.string().uuid()

	export const error: z.ZodType<Errors.Response> = z.object({
		code: z.nativeEnum(Errors.Codes.API),
		errors: z.array(z.any()),
		message: z.string(),
	})

	export const email = notEmptyString.email()

	export const list = <T>(entity: z.ZodType<T>) =>
		z.object({
			items: z.array(entity),
		})
}
