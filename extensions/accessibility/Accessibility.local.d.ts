export class Accessibility {
    _brand: "Accessibility";
    [key: string]: any;
}

export type SupportedLanguage = "en" | "de";

export type AccessibilityOwnProps = {
    props?: {
        language?: SupportedLanguage;
        brailleNotationInAlt?: boolean;
        movePieceForm?: boolean;
        boardAsTable?: boolean;
        piecesAsList?: boolean;
        visuallyHidden?: boolean;
    };
}

export type AccessibilityExtension = import("../index.local").Extension<
    "Accessibility",
    typeof Accessibility,
    AccessibilityOwnProps,
    import("../index.local").DefaultExtraChessboardProps,
>;

