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
    Name extends string,
    Class extends abstract new (...args: any) => any,
    OP extends OwnProps /*= DefaultOwnProps */,
    EP extends ChessboardExtraProps /*= DefaultExtraChessboardProps */
> = {
    _phantomName: Name;
    _phantomClass: Class;
    _phantomOwnProps: OP;
    _phantomExtraChessboardProps: EP;
};

type KnownExtensions = [
    MarkersExtension,
];

type ExtensionByClass<
    C extends abstract new (...args: any) => any,
    ExtraExts extends Extension<any, any, any, any>[] = []
> = ConcatTuples<ExtraExts, KnownExtensions>[number] extends Extension<infer Name, infer Class, infer OwnProps, infer ExtraChessboardProps>
    ? [C] extends [Class] // wrap in tuple to avoid union distribution
    ? Extension<Name, Class, OwnProps, ExtraChessboardProps>
    : never
    : never;

// type TestExtensionByClass0 = ExtensionByClass<typeof import("../helpers.local").SomeUnknownClass>;
// type TestExtensionByClass1 = ExtensionByClass<typeof import("./markers/Markers.local").Markers>;

type InferredExtension<
    C extends abstract new (...args: any) => any,
    ExtraExts extends Extension<any, any, any, any>[] = []
> = [ExtensionByClass<C, ExtraExts>] extends [never]
    ? Extension<"Unknown", C, DefaultOwnProps, DefaultExtraChessboardProps>
    : ExtensionByClass<C, ExtraExts>;

export type InferredExtensions<
    Classes extends any[],
    ExtraExts extends Extension<any, any, any, any>[] = []
> = {
        [K in keyof Classes]: InferredExtension<Classes[K], ExtraExts>;
    };

