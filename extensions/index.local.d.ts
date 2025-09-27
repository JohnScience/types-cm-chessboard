export type OwnProps = {
    props?: Record<string, any>;
}

export type DefaultOwnProps = {
    props?: Record<string, any>;
}

/**
 * An extension for the `cm-chessboard`.
 */
// ChessboardExtraProps are the props that are added to the Chessboard type by the extension
export type Extension<
    Class,
    OP extends OwnProps = DefaultOwnProps,
    ChessboardExtraProps extends Record<string, any> = {}
> = {
    /**
     * The class of the extension.
     */
    class: Class;
} & OP;

type Markers =
    typeof import("./markers/Markers.local").Markers;
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

