import { Extension } from "../cm-chessboard";

type Markers =
    import("./markers/Markers").Markers;
type MarkersExtension =
    import("./markers/Markers").MarkersExtension;

// This type maps known extension classes to their corresponding Extension types.
// This way, we can construct the associated types for the extension
// classes that we know about.
export type KnownTypedExtension<Class> =
    Class extends Markers ? MarkersExtension :
    never;

// This interface is a way to accept types that would act like
// KnownTypedExtension, but can be user-defined.
export interface GenericExtensionTypeConstructor<
    Exts extends Extension<any, any, any>[]
> {
    <Class>(): Exts[number] extends Extension<
        infer C,
        infer OwnProps,
        infer ExtraChessboardProps
    >
        ? (C extends Class
            ? Extension<C, OwnProps, ExtraChessboardProps>
            : never)
        : never;
}

export type DefaultGenericExtensionTypeConstructor =
    GenericExtensionTypeConstructor<[MarkersExtension]>;
