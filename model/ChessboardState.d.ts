export class ChessboardState {
    position: import("./Position").Position;
    orientation: import("../cm-chessboard").Color | undefined;
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
