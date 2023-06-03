import "dotenv/config"
import { z } from "zod"

export namespace Env {
	const envSchema = z.object({
		ENVIRONMENT: z.enum(["development", "test", "production"]).default("development"),
		HTTP_PORT: z.coerce.number().default(3050),
		JWT_SECRET_KEY: z.string(),
		DATABASE_USER: z.string().default("postgres"),
		DATABASE_PASSWORD: z.string().default("postgres"),
		DATABASE_PORT: z.coerce.number().default(5432),
		DATABASE_HOST: z.string().default("localhost"),
		DATABASE_NAME: z.string().default("todolist"),
	})

	const _env = envSchema.safeParse(process.env)

	if (_env.success === false) {
		console.error("🚨 Invalid environment variables", _env.error.format())

		throw new Error("🚨 Invalid environment variables")
	}

	export const envData = _env.data
}
