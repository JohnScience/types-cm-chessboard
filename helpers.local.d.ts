export type UnionToIntersection<U> =
    (U extends any ? (x: U) => void : never) extends ((x: infer I) => void) ? I : never;

export type ConcatTuples<T extends any[], U extends any[]> = [...T, ...U];

export class SomeUnknownClass {
    _brand: "SomeUnknownClass";
    [key: string]: any;
}
