import { z } from "zod"
import { CreateCardValidator } from "./create-card.validator"

export namespace CreateCardTypes {
	export type Request = z.infer<typeof CreateCardValidator.requestBody>
}
