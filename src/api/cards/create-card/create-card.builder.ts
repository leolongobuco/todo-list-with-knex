import { CreateCardTypes } from "./create-card.types"
import { CardTypes } from "../card.types"

export namespace CreateCardBuilder {
	export const response = (card: CardTypes.Card): CreateCardTypes.Response => {
		return { id: card.id }
	}
}
