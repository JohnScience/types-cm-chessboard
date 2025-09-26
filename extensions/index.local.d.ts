import { Extension } from "../cm-chessboard.local";

type Markers =
    import("./markers/Markers.local").Markers;
type MarkersExtension =
    import("./markers/Markers.local").MarkersExtension;

type KnownExtensions = [
    MarkersExtension,
];

type ConcatTuples<T extends any[], U extends any[]> = [...T, ...U];

type ExtensionByClass<
    C,
    ExtraExts extends Extension<any, any, any>[] = []
> = ConcatTuples<ExtraExts, KnownExtensions>[number] extends Extension<infer Class, infer OwnProps, infer ExtraChessboardProps>
    ? [C] extends [Class] // wrap in tuple to avoid union distribution
    ? Extension<Class, OwnProps, ExtraChessboardProps>
    : never
    : never;

type InferredExtension<
    C,
    ExtraExts extends Extension<any, any, any>[] = []
> = [ExtensionByClass<C, ExtraExts>] extends [never]
    ? Extension<C, any, any>
    : ExtensionByClass<C, ExtraExts>;

export type InferredExtensions<
    Classes extends any[],
    ExtraExts extends Extension<any, any, any>[] = []
> = {
        [K in keyof Classes]: InferredExtension<Classes[K], ExtraExts>;
    };

