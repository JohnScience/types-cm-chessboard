declare module "cm-chessboard/src/extensions/markers/Markers.js" {
    export type Markers = import("./Markers.local").Markers;
    export const Markers: typeof import("./Markers.local").Markers;

    export type MarkersExtension = import("./Markers.local").MarkersExtension;

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
}