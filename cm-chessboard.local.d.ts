import type { UnionToIntersection } from "./helpers.local";

import type { Extension } from "./extensions/index.local";
import type { ChessboardState } from "./model/ChessboardState.local";
import type { Color } from "./view/ChessboardView.local";

import type { InferredExtension } from "./extensions/index.local";
import { Markers } from "./extensions/markers/Markers.local";

export type { ChessboardEvent, Color } from "./view/ChessboardView.local"

/**
 * Forsyth-Edwards Notation (FEN) string that
 * describes a particular board position of a chess game.
 * @see https://www.chess.com/terms/fen-chess
 */
export type FenPosition = string;

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

type ExtensionOption<E extends Extension<any, any, any, any>> =
    E extends Extension<any, infer C, infer P, any>
    ? { class: C } & P
    : never;

type ExtensionsExtension<
    Classes extends (abstract new (...args: any) => any)[] = [],
    ExtraKnownExts extends Extension<any, any, any, any>[] = [],
> = Classes extends [any, ...any[]] ? {
    extensions: {
        [K in keyof Classes]:
        InferredExtension<Classes[K], ExtraKnownExts> extends Extension<infer Name, Classes[K], infer OP, infer EP>
        ? ExtensionOption<Extension<Name, Classes[K], OP, EP>>
        : never;
    };
} : {};

// type TestExtensionsExtension0 = ExtensionsExtension<[]>;
// type TestExtensionsExtension1 = ExtensionsExtension<[typeof Markers]>;

declare class TestClass {
    [key: string]: any;
}

export type ChessboardOptions<
    Classes extends (abstract new (...args: any) => any)[] = [],
    ExtraKnownExts extends Extension<any, any, any, any>[] = [],
> = {
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
        pieces: ChessPiecesConfig;
        animationDuration: number;
    };
} & ExtensionsExtension<Classes, ExtraKnownExts>;

export type File = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
export type Rank = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
export type Square = `${File}${Rank}`;

export const PIECE: {
    wp: "wp", wb: "wb", wn: "wn", wr: "wr", wq: "wq", wk: "wk",
    bp: "bp", bb: "bb", bn: "bn", br: "br", bq: "bq", bk: "bk"
};

export type Piece = typeof PIECE[keyof typeof PIECE];

export const PIECE_TYPE: {
    pawn: "p", knight: "n", bishop: "b", rook: "r", queen: "q", king: "k"
};

export const PIECES_FILE_TYPE: {
    svgSprite: "svgSprite"
};

export class Chessboard<
    Classes extends (abstract new (...args: any) => any)[] = [],
    ExtraKnownExts extends Extension<any, any, any, any>[] = [],
> {
    constructor(context: HTMLElement, opts: ChessboardOptions<Classes, ExtraKnownExts>);
    state: ChessboardState;
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
    addExtension<E extends Extension<any, any, any, any>>(extension: E): void;
    getExtension(classRef: any): any;
    destroy(): void;
}

/**
 * Maps a tuple of classes to a tuple of their respective ChessboardExtraProps.
 */
type ChessboardExtraPropsTuple<
    Classes extends (abstract new (...args: any) => any)[],
    ExtraKnownExts extends Extension<any, any, any, any>[] = []
> = {
        [K in keyof Classes]: InferredExtension<Classes[K], ExtraKnownExts> extends Extension<
            any,
            any,
            any,
            infer EP
        >
        ? EP
        : {};
    };

type ChessboardExtraProps<
    Classes extends (abstract new (...args: any) => any)[] = [],
    ExtraKnownExts extends Extension<any, any, any, any>[] = []
> = UnionToIntersection<ChessboardExtraPropsTuple<Classes, ExtraKnownExts>[number]>;

export type ChessboardWithExtensions<
    Classes extends (abstract new (...args: any) => any)[] = [],
    ExtraKnownExts extends Extension<any, any, any, any>[] = []
> = Chessboard<Classes, ExtraKnownExts> & ChessboardExtraProps<Classes, ExtraKnownExts>; 
