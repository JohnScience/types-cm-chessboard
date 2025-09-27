import type { ConcatTuples } from "../helpers.local";
import type { MarkersExtension } from "./markers/Markers.local";

export type OwnProps = {
    props?: Record<string, any>;
}

export type DefaultOwnProps = {
    props?: Record<string, any>;
}

export type ChessboardExtraProps = Record<string, any>;

export type DefaultExtraChessboardProps = {};

/**
 * An extension for the `cm-chessboard`.
 */
// ChessboardExtraProps are the props that are added to the Chessboard type by the extension
export type Extension<
    Class,
    OP extends OwnProps = DefaultOwnProps,
    EP extends ChessboardExtraProps = DefaultExtraChessboardProps
> = {
    /**
     * The class of the extension.
     */
    class: Class;
} & OP;

type KnownExtensions = [
    MarkersExtension,
];

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
    ? Extension<C, DefaultOwnProps, DefaultExtraChessboardProps>
    : ExtensionByClass<C, ExtraExts>;

export type InferredExtensions<
    Classes extends any[],
    ExtraExts extends Extension<any, any, any>[] = []
> = {
        [K in keyof Classes]: InferredExtension<Classes[K], ExtraExts>;
    };

