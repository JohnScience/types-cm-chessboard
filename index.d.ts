import { COLOR } from "./view/ChessboardView";

/**
 * Forsyth-Edwards Notation (FEN) string that
 * describes a particular board position of a chess game.
 * @see https://www.chess.com/terms/fen-chess
 */
export type FenPosition = string;

/**
 * Color of a chess piece or player.
 * 
 * @see COLOR
 */
export type Color = typeof COLOR[keyof typeof COLOR];

/**
 * An extension for the `cm-chessboard`.
 */
export interface Extension {
    /**
     * The class of the extension.
     */
    class: any;
    /**
     * The properties passed to the extension.
     */
    props?: any;
}

/**
 * The type of border around the chessboard.
 */
export type BorderType = "none" | "thin" | "frame";

/**
 * Configuration for chess pieces.
 */
export type ChessPiecesConfig = {
    /**
     * The type of chess pieces styling.
     */
    type: "svg";
    /**
     * The filename of the SVG sprite in `assets/pieces/` or an absolute url like `https://…` or `/…`. 
     */
    file: string;
    /**
     * The tile size in the sprite.
     */
    tileSize: number;
};

export interface ChessboardOptions {
    /**
     * The initial position of the chess pieces on the board in Forsyth-Edwards Notation (FEN).
     * 
     * @see https://www.chess.com/terms/fen-chess
     * 
     * Default: The empty board.
     */
    position?: FenPosition;
    orientation?: Color;
    responsive?: boolean;
    assetsUrl: string;
    assetsCache: boolean;
    style?: {
        cssClass: string;
        showCoordinates: boolean;
        borderType: BorderType;
        aspectRatio: number;
        pieces: ChessPiecesConfig,
        animationDuration: number;
    },
    extensions: [Extension];
}

declare module "cm-chessboard" {
    export class Chessboard {
        constructor(context: HTMLElement, opts: ChessboardOptions);
        [key: string]: any;
    }

    export const INPUT_EVENT_TYPE: typeof import("./view/ChessboardView").INPUT_EVENT_TYPE;
    export const COLOR: typeof import("./view/ChessboardView").COLOR;
}
