export type ClassOf<T extends new (...args: any) => any> =
    new (...args: ConstructorParameters<T>) => InstanceType<T>;

export type UnionToIntersection<U> =
    (U extends any ? (x: U) => void : never) extends ((x: infer I) => void) ? I : never;