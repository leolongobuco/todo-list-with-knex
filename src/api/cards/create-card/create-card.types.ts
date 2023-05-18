import { Erase } from "../../../lib/utility-types"
import { Models } from "../../common/models"

export namespace CreateCardTypes {
	export type Request = Erase<Models.Card, "id" | "createdAt">

	export type Response = Pick<Models.Card, "id">
}
