export namespace Is {
  export const Undefined = (x: any): x is undefined => x === undefined;

  export const Null = (x: any): x is null => x === null;

  export const Empty = (list: any): list is [] => !Undefined(list) && !Null(list) && list.length === 0;

  export const Filled = (x: any) => !Null(x) && !Undefined(x)
}