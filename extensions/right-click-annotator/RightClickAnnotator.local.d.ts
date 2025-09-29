import { Extension } from "../index.local";

export class RightClickAnnotator {
    _brand: "RightClickAnnotator";
    [key: string]: any;
}

export type RightClickAnnotatorOwnProps = {
    props?: undefined;
}

export type RightClickAnnotatorExtraChessboardProps = {
    getAnnotations: any;
    setAnnotations: any;
}

export type RightClickAnnotatorExtension = Extension<
    "RightClickAnnotator",
    typeof RightClickAnnotator,
    RightClickAnnotatorOwnProps,
    RightClickAnnotatorExtraChessboardProps
>;