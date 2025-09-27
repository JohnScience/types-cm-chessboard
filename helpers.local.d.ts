export type UnionToIntersection<U> =
    (U extends any ? (x: U) => void : never) extends ((x: infer I) => void) ? I : never;

export type RefinedReturnType<C extends abstract new (...args: any) => any, Refined, TArgs extends any[] = ConstructorParameters<C>> =
    new (...args: TArgs) => Refined;
