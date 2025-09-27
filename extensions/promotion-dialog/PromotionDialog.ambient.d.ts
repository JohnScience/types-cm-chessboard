type Piece = import("../../cm-chessboard.local").Piece;
type Square = import("../../cm-chessboard.local").Square;
type Color = import("../../view/ChessboardView.local").Color;

declare module "cm-chessboard/src/extensions/promotion-dialog/PromotionDialog.js" {
    export class PromotionDialog {
        _brand: "PromotionDialog";
        [key: string]: any;
    }

    export type PromotionDialogOwnProps = {
        props?: Record<string, any>;
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

    export type PromotionDialogExtension = import("../index.local").Extension<typeof PromotionDialog, PromotionDialogOwnProps, PromotionDialogExtraChessboardProps>;

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
}