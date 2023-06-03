import knex from "knex"
import { Env } from "../../env"
import pg from "pg"

const pgPool = new pg.Pool({
	user: Env.envData.DATABASE_USER,
	password: Env.envData.DATABASE_PASSWORD,
	host: Env.envData.DATABASE_HOST,
	port: Env.envData.DATABASE_PORT,
	database: Env.envData.DATABASE_NAME,
})

export namespace Database {
	export const builder = knex({ client: "pg" })
}
