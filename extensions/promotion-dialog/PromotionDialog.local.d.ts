import { Color, Piece, Square } from "../../cm-chessboard.local";
import { Extension } from "../index.local";


export class PromotionDialog {
    _brand: "PromotionDialog";
    [key: string]: any;
}

export type PromotionDialogOwnProps = {
    props?: undefined;
}

export type PromotionDialogExtraChessboardProps = {
    showPromotionDialog: (
        square: Square,
        color: Color,
        callback: (
            promotionDialogResult: PromotionDialogResult
        ) => void,
    ) => void;
    isPromotionDialogShown: () => boolean;
}

export type PromotionDialogExtension = Extension<
    "PromotionDialog",
    typeof PromotionDialog,
    PromotionDialogOwnProps,
    PromotionDialogExtraChessboardProps
>;

export const PROMOTION_DIALOG_RESULT_TYPE: {
    pieceSelected: "pieceSelected",
    canceled: "canceled"
};

export type PromotionDialogResult = {
    type: typeof PROMOTION_DIALOG_RESULT_TYPE.pieceSelected;
    piece: Piece;
} | {
    type: typeof PROMOTION_DIALOG_RESULT_TYPE.canceled;
}
