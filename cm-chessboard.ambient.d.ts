declare module "cm-chessboard" {

    export const PIECE: typeof import("./cm-chessboard.local").PIECE;
    export const PIECE_TYPE: typeof import("./cm-chessboard.local").PIECE_TYPE;
    export const PIECES_FILE_TYPE: typeof import("./cm-chessboard.local").PIECES_FILE_TYPE;
    export const COLOR: typeof import("./view/ChessboardView.local").COLOR;
    export const INPUT_EVENT_TYPE: typeof import("./view/ChessboardView.local").INPUT_EVENT_TYPE;
    export const POINTER_EVENTS: typeof import("./view/ChessboardView.local").POINTER_EVENTS;
    export const BORDER_TYPE: typeof import("./view/ChessboardView.local").BORDER_TYPE;
    export const FEN: typeof import("./model/Position.local").FEN;

    export const Chessboard: import("./helpers.local").ClassOf<typeof import("./cm-chessboard.local").Chessboard>;
    export type Chessboard<
        Classes extends any[] = [],
        ExtraKnownExts extends import("./cm-chessboard.local").Extension<any, any, any>[] = [],
    > = import("./cm-chessboard.local").Chessboard<Classes, ExtraKnownExts>;
}