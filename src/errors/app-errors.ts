import { StatusCode } from "../api/http/status-code";

export namespace Errors {
    export type Issue = {
        code: string;
        message: string;
        field: Array<number | string>;
        extra?: any;
    };

    export class App {
        constructor(
            public status: StatusCode,
            public message: string,
            public errorCode: Codes.API = Codes.API.Unexpected,
            public issues: Issue[] = [],
        ) {}
    }

    export class Internal extends App {
        constructor(public message: string) {
            super(StatusCode.INTERNAL_SERVER_ERROR, message, Codes.API.Unexpected, []);
        }
    }

    export class Validation extends App {
        constructor(public issues: Issue[]) {
            super(StatusCode.BAD_REQUEST, "Schema validation error", Codes.API.Schema, issues);
        }
    }

    export class Duplicated extends App {
        constructor(field: string) {
            const issue: Issue = {
                code: Codes.API.AlreadyExists,
                field: [field],
                message: `A record with this ${field} already exists.`,
            };

            super(
                StatusCode.CONFLICT,
                "The information sent already belongs to some records.",
                Codes.API.AlreadyExists,
                [issue],
            );
        }
    }

    export class NotFound extends App {
        constructor(entity: string, issues: Issue[] = []) {
            super(StatusCode.NOT_FOUND, `The requested ${entity} was not found.`, Codes.API.NotFound, issues);
        }
    }

    export type Response = {
        code: Codes.API;
        errors: Issue[];
        message: string;
    };

    export namespace Codes {
        export enum API {
            Unexpected = "UNEXPECTED_ERROR",
            Schema = "SCHEMA_ERROR",
            Validation = "VALIDATION_ERROR",
            NotFound = "NOT_FOUND",
            AlreadyExists = "ALREADY_EXISTS",
            Internal = "INTERNAL_SERVER_ERROR",
            Unprocessable = "UNPROCESSABLE_ENTITY",
            Conflict = "CONFLICT",
            BadRequest = "BAD_REQUEST",
        }
      }
    }