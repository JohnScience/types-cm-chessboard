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

export const MARKER_TYPE: {
    frame: { class: "marker-frame", slice: "markerFrame" },
    framePrimary: { class: "marker-frame-primary", slice: "markerFrame" },
    frameDanger: { class: "marker-frame-danger", slice: "markerFrame" },
    circle: { class: "marker-circle", slice: "markerCircle" },
    circlePrimary: { class: "marker-circle-primary", slice: "markerCircle" },
    circleDanger: { class: "marker-circle-danger", slice: "markerCircle" },
    circleDangerFilled: { class: "marker-circle-danger-filled", slice: "markerCircleFilled" },
    square: { class: "marker-square", slice: "markerSquare" },
    dot: { class: "marker-dot", slice: "markerDot", position: 'above' },
    bevel: { class: "marker-bevel", slice: "markerBevel" }
};

export type MarkersOwnProps = {
    props?: {
        autoMarkers?: typeof MARKER_TYPE[keyof typeof MARKER_TYPE] | null;
        sprite?: string;
    };
}

export type MarkersExtension = import("../index.local").Extension<
    "Markers",
    typeof Markers,
    MarkersOwnProps,
    MarkersExtraChessboardProps
>;
