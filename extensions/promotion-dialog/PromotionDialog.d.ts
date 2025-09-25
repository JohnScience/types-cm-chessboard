type Piece = import("../../cm-chessboard").Piece;
type Square = import("../../cm-chessboard").Square;
type Color = import("../../view/ChessboardView").Color;

declare module "cm-chessboard/src/extensions/promotion-dialog/PromotionDialog.js" {
    export class PromotionDialog {
        [key: string]: any;
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

    export type PromotionDialogExtension = import("../../cm-chessboard").Extension<PromotionDialogExtraChessboardProps>;

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