export const MOVE_CANCELED_REASON: {
    secondClick: "secondClick", // clicked the same piece
    secondaryClick: "secondaryClick", // right click while moving
    movedOutOfBoard: "movedOutOfBoard",
    draggedBack: "draggedBack", // dragged to the start square
    clickedAnotherPiece: "clickedAnotherPiece" // of the same color
};

export type MoveCanceledReason = typeof MOVE_CANCELED_REASON[keyof typeof MOVE_CANCELED_REASON];
