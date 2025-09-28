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
        own_prop_example?: string;
    };
}

export type MarkersExtension = import("../index.local").Extension<
    "Markers",
    typeof Markers,
    MarkersOwnProps,
    MarkersExtraChessboardProps
>;
