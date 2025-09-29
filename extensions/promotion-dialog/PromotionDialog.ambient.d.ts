declare module "cm-chessboard/src/extensions/promotion-dialog/PromotionDialog.js" {
    export type PromotionDialog = import("./PromotionDialog.local").PromotionDialog;
    export const PromotionDialog: typeof import("./PromotionDialog.local").PromotionDialog;

    export type PromotionDialogExtension = import("./PromotionDialog.local").PromotionDialogExtension;
    export const PROMOTION_DIALOG_RESULT_TYPE: typeof import("./PromotionDialog.local").PROMOTION_DIALOG_RESULT_TYPE;
    export type PromotionDialogResult = import("./PromotionDialog.local").PromotionDialogResult;
}