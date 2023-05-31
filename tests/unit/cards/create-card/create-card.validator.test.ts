import { faker } from "@faker-js/faker"
import { describe, expect, it } from "vitest"
import { CreateCardValidator } from "../../../../src/api/cards/create-card/create-card.validator"
import { SafeParseError } from "zod"

describe("CreateCardValidator", () => {
	describe("requestBody", () => {
		const validator = CreateCardValidator.requestBody

		const validPayload = {
			name: faker.helpers.fake.name,
			description: faker.word.words(),
			isDone: true,
			owner: faker.string.uuid(),
			userId: faker.string.uuid(),
		}

		it("should return success given a valid payload", async () => {
			const payload = validPayload

			const result = validator.safeParse(payload)

			expect(result.success).toBeTruthy()
		})

		it("should return errror given a invalid name", async () => {
			const payload = { ...validPayload, name: 123 }

			const result = validator.safeParse(payload)
			expect(result.success).toBeFalsy()

			const validationError = (result as SafeParseError<any>).error
			expect(validationError.issues.length).toBe(1)

			const [error] = validationError.issues
			expect(error.path).toStrictEqual(["name"])
			expect(error.code).toBe("invalid_type")
			expect(error.message).toBe("Expected string, received number")
		})

		it("should return errror given a invalid description", async () => {
			const payload = { ...validPayload, description: 123 }

			const result = validator.safeParse(payload)
			expect(result.success).toBeFalsy()

			const validationError = (result as SafeParseError<any>).error
			expect(validationError.issues.length).toBe(1)

			const [error] = validationError.issues
			expect(error.path).toStrictEqual(["description"])
			expect(error.code).toBe("invalid_type")
			expect(error.message).toBe("Expected string, received number")
		})

		it("should return errror given a invalid isDone", async () => {
			const payload = { ...validPayload, isDone: "true" }

			const result = validator.safeParse(payload)
			expect(result.success).toBeFalsy()

			const validationError = (result as SafeParseError<any>).error
			expect(validationError.issues.length).toBe(1)

			const [error] = validationError.issues
			expect(error.path).toStrictEqual(["isDone"])
			expect(error.code).toBe("invalid_type")
			expect(error.message).toBe("Expected boolean, received string")
		})

		it("should return errror given a invalid owner", async () => {
			const payload = { ...validPayload, owner: 1234 }

			const result = validator.safeParse(payload)
			expect(result.success).toBeFalsy()

			const validationError = (result as SafeParseError<any>).error
			expect(validationError.issues.length).toBe(1)

			const [error] = validationError.issues
			expect(error.path).toStrictEqual(["owner"])
			expect(error.code).toBe("invalid_type")
			expect(error.message).toBe("Expected string, received number")
		})

		it("should return errror given a invalid userId", async () => {
			const payload = { ...validPayload, userId: 1234 }

			const result = validator.safeParse(payload)
			expect(result.success).toBeFalsy()

			const validationError = (result as SafeParseError<any>).error
			expect(validationError.issues.length).toBe(1)

			const [error] = validationError.issues
			expect(error.path).toStrictEqual(["userId"])
			expect(error.code).toBe("invalid_type")
			expect(error.message).toBe("Expected string, received number")
		})

		it.todo("should return errror given a invalid payload", async () => {
			const payload = {}

			const result = validator.safeParse(payload)
			expect(result.success).toBeFalsy()

			const validationError = (result as SafeParseError<any>).error
			expect(validationError.issues.length).toBe(1)

			const [error] = validationError.issues
			expect(error.path).toStrictEqual(["updatedAt"])
			expect(error.code).toBe("invalid_type")
			expect(error.message).toBe("Expected date, received string")
		})
	})
})
