export class Markers {
    _brand: "Markers";
    [key: string]: any;
}

export type MarkersExtraChessboardProps = {
    addMarker: any;
    getMarkers: any;
    removeMarkers: any;
    addLegalMovesMarkers: any;
    removeLegalMovesMarkers: any;
}

export type MarkersOwnProps = {
    props: {

    };
}

export type MarkersExtension = import("../../cm-chessboard.local").Extension<typeof Markers, MarkersOwnProps, MarkersExtraChessboardProps>;
