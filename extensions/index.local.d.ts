import type { ConcatTuples } from "../helpers.local";
import type { AccessibilityExtension } from "./accessibility/Accessibility.local";
import type { MarkersExtension } from "./markers/Markers.local";
import type { PromotionDialogExtension } from "./promotion-dialog/PromotionDialog.local";
import { RightClickAnnotatorExtension } from "./right-click-annotator/RightClickAnnotator.local";

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
    AccessibilityExtension,
    MarkersExtension,
    PromotionDialogExtension,
    RightClickAnnotatorExtension,
];

// The union of all known extensions, with a generic parameter to add more known extensions
type AnyExtension<ExtraExts extends Extension<any, any, any, any>[] = []> = ConcatTuples<ExtraExts, KnownExtensions>[number];

// type TestAnyExtension0 = AnyExtension<[]>;

type ExtensionByClass<
    C extends abstract new (...args: any) => any,
    ExtraExts extends Extension<any, any, any, any>[] = []
> = Extract<
    AnyExtension<ExtraExts>,
    Extension<any, C, any, any>
>;

// type TestExtensionByClass0 = ExtensionByClass<MarkersExtension["_phantomClass"]>;
// type TestExtensionByClass1 = ExtensionByClass<AccessibilityExtension["_phantomClass"]>;

type InferredExtension<
    C extends abstract new (...args: any) => any,
    ExtraExts extends Extension<any, any, any, any>[] = []
> = [ExtensionByClass<C, ExtraExts>] extends [never]
    ? Extension<"Unknown", C, DefaultOwnProps, DefaultExtraChessboardProps>
    : ExtensionByClass<C, ExtraExts>;

// type TestInferredExtension0 = InferredExtension<typeof import("../helpers.local").SomeUnknownClass>;
// type TestInferredExtension1 = InferredExtension<MarkersExtension["_phantomClass"]>;

export type InferredExtensions<
    Classes extends any[],
    ExtraExts extends Extension<any, any, any, any>[] = []
> = {
        [K in keyof Classes]: InferredExtension<Classes[K], ExtraExts>;
    };

