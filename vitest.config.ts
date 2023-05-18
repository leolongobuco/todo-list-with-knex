import { defineConfig } from "vitest/config"
import { config } from "dotenv"

const globalSetup = {
	name: "setup-global-config",
	config: () => ({
		test: {
			setupFiles: ["./tests/integration/test-setup.ts"],
		},
	}),
}

config()

process.env = {
	...process.env,
	DATABASE_PASSWORD: process.env.DATABASE_PASSWORD ?? "postgres",
	DATABASE_USER: process.env.DATABASE_USER ?? "postgres",
	DATABASE_NAME: process.env.DATABASE_NAME ?? "todolist",
	DATABASE_SSL: process.env.DATABASE_SSL ?? "true",
	DATABASE_PORT: process.env.DATABASE_PORT ?? "5432",
}

export default defineConfig({
	plugins: process.env.TEST_TYPE === "UNIT" ? [] : [globalSetup],
	test: {
		logHeapUsage: true,
		silent: false,
		isolate: true,
		globals: true,
		clearMocks: true,
		root: "./tests",
		testTimeout: 10_000,
		exclude:
			process.env.TEST_TYPE === "E2E"
				? ["**/performance/**"]
				: ["**/performance/**", "**/e2e/**"],
		reporters: ["verbose"],
	},
})
