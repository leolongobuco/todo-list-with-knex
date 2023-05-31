import { z } from "zod"
import { CardValidator } from "./card.validator"

export namespace CardTypes {
	export type Card = z.infer<typeof CardValidator.card>
}
