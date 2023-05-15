export type Undefined<T> = T | undefined

export type Nullable<T> = T | null

export type Erase<T, K extends keyof T> = Omit<T, K>

export type Optional<T, K extends keyof T> = { [key in K]?: T[K] } & Required<
	Erase<T, K>
>
