export class ChessboardState {
    position: import("./Position.local").Position;
    orientation: import("../cm-chessboard.local").Color | undefined;
    inputWhiteEnabled: boolean;
    inputBlackEnabled: boolean;
    squareSelectEnabled: boolean;
    moveInputCallback: any;
    extensionPoints: { [key: string]: any };
    moveInputProcess: Promise<void>;
}

declare module "cm-chessboard/src/model/ChessboardState.js" {
    export { ChessboardState };
}
