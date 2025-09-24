/// <reference path="extensions/markers/Markers.d.ts" />
/// <reference path="extensions/promotion-dialog/PromotionDialog.d.ts" />
/// <reference path="extensions/accessibility/Accessibility.d.ts" />
/// <reference path="extensions/right-click-annotator/RightClickAnnotator.d.ts" />

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
    assetsCache?: boolean;
    style?: {
        cssClass: string;
        showCoordinates: boolean;
        borderType: BorderType;
        aspectRatio: number;
        pieces: ChessPiecesConfig,
        animationDuration: number;
    },
    extensions?: Extension[];
}

export type File = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
export type Rank = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
export type Square = `${File}${Rank}`;

export const PIECE: {
    wp: "wp", wb: "wb", wn: "wn", wr: "wr", wq: "wq", wk: "wk",
    bp: "bp", bb: "bb", bn: "bn", br: "br", bq: "bq", bk: "bk"
};

export type Piece = typeof PIECE[keyof typeof PIECE];

export class Chessboard {
    constructor(context: HTMLElement, opts: ChessboardOptions);
    setPiece(square: Square, piece: Piece, animated: boolean): Promise<any>;
    movePiece(squareFrom: Square, squareTo: Square, animated: boolean): Promise<any>;
    setPosition(fen: FenPosition, animated: boolean): Promise<any>;
    setOrientation(color: Color, animated: boolean): Promise<any>;
    getPiece(square: Square): any;
    getPosition(): any;
    getOrientation(): any;
    enableMoveInput(eventHandler: (event: any) => boolean, color?: Color): void;
    disableMoveInput(): void;
    isMoveInputEnabled(): boolean;
    enableSquareSelect(eventType: any, eventHandler: (event: any) => any): void;
    disableSquareSelect(): void;
    isSquareSelectEnabled(): boolean;
    addExtension(extension: Extension): void;
    getExtension(classRef: any): any;
    destroy(): void;
}

declare module "cm-chessboard" {
    export const Chessboard: typeof import(".").Chessboard;

    export const INPUT_EVENT_TYPE: typeof import("./view/ChessboardView").INPUT_EVENT_TYPE;
    export const COLOR: typeof import("./view/ChessboardView").COLOR;
}
