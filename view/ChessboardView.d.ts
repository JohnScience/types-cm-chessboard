import { Chessboard, Color, FenPosition, Piece, Square } from "../cm-chessboard";
import { MoveCanceledReason } from "./VisualViewInput";

export declare const INPUT_EVENT_TYPE: {
    moveInputStarted: "moveInputStarted",
    movingOverSquare: "movingOverSquare", // while dragging or hover after click
    validateMoveInput: "validateMoveInput",
    moveInputCanceled: "moveInputCanceled",
    moveInputFinished: "moveInputFinished"
};

export declare const COLOR: {
    white: "w",
    black: "b"
};

export interface Move {
    after: FenPosition;
    from: FenPosition;
    captured: any;
    color: Color;
    flags: any;
    lan: any;
    san: any;
    piece: Piece;
    promotion: any;
}

export type MoveInputStartedEvent<C extends Chessboard> = {
    chessboard: C,
    type: typeof INPUT_EVENT_TYPE.moveInputStarted,
    squareFrom: Square,
    piece: Piece,
};

export type MovingOverSquareEvent<C extends Chessboard> = {
    chessboard: C,
    type: typeof INPUT_EVENT_TYPE.movingOverSquare,
    squareFrom: Square,
    squareTo: Square | null,
    piece: Piece,
};

export type ValidateMoveInputEvent<C extends Chessboard> = {
    chessboard: C,
    type: typeof INPUT_EVENT_TYPE.validateMoveInput,
    squareFrom: Square,
    squareTo: Square,
    piece: Piece,
};

export type MoveInputCanceledEvent<C extends Chessboard> = {
    chessboard: C,
    type: typeof INPUT_EVENT_TYPE.moveInputCanceled,
    reason: MoveCanceledReason;
    squareFrom: Square,
    squareTo: Square | null,
};

export type MoveInputFinishedEvent<C extends Chessboard> = {
    chessboard: C,
    type: typeof INPUT_EVENT_TYPE.moveInputFinished,
    squareFrom: Square | null,
    squareTo: Square | null,
    legalMove: Move | undefined,
};

export type ChessboardEvent<C extends Chessboard> =
    MoveInputStartedEvent<C> |
    MovingOverSquareEvent<C> |
    ValidateMoveInputEvent<C> |
    MoveInputCanceledEvent<C> |
    MoveInputFinishedEvent<C>;

