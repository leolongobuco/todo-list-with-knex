import { Errors } from "../errors/app-errors";
import { Is } from "./is";
import { Erase, Optional } from "./utility-types";

type ErrorEither<E> = { error: E; success?: never};

type SuccessEither<S> = { error?: never; success?: S };

export type Either<S, E = EitherError> = NonNullable<ErrorEither<E> | SuccessEither<S>>;

export type EitherError = Error | Optional<Erase<Errors.Response, "errors">, "code"> | Errors.Issue;

export class EitherNoValueError extends Error {
  public constructor() {
    super();
    this.message = "Either require error or success, undefined for both is not accepted";
  }
}

export const Either = <S, E>({error, success}: Either<S, E>) => {
  if(!Is.Undefined(error)) return { error }
  if(!Is.Undefined(success)) return { success }

  throw new EitherNoValueError()
}

Either.isError = <S, E>(e: Either<S, E>): e is ErrorEither<E> => e.error !== undefined;

Either.isSuccess = <S, E>(e: Either<S, E>): e is SuccessEither<S> => e.success !== undefined;

Either.error = <E extends EitherError>(error: E): ErrorEither<E> => ({error})

Either.success = <S>(success: S): SuccessEither<S> => ({success});