import { Schemas } from "../../../lib/schemas"
import { Validators } from "../../common/validators"
import { CreateCardTypes } from "./create-card.types"

export namespace CreateCardValidator {
	export const body: Schemas.Object<CreateCardTypes.Request> = Validators.card.omit({
		id: true,
		createdAt: true,
		updatedAt: true,
	})

	export const response: Schemas.Object<CreateCardTypes.Response> = Validators.card.pick({
		id: true,
	})
}
