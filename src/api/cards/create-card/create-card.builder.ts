import { randomUUID } from "node:crypto"
import { Models } from "../../common/models"
import { CreateCardTypes } from "./create-card.types"
import { Strings } from "../../../lib/strings"

export namespace CreateCardBuilder {
	export const response = (request: CreateCardTypes.Request): Models.Card => ({
		id: Strings.uuid(),
		isDone: request.isDone,
		description: request.description,
		createdAt: new Date(),
		updatedAt: request.updatedAt,
		name: request.name,
		userId: request.userId,
		owner: request.owner,
	})
}
