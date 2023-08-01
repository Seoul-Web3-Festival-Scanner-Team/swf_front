import React from "react";
import { LayerAlign } from "./WidgetUtils";

function AllFullRow({
    main = LayerAlign.start,
    cross = LayerAlign.start,
    children,
    ...props
}) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: main,
                alignItems: cross,
                width: "100%",
                height: "100%",
            }}
            {...props}>
            {children}
        </div>
    );
}

export default AllFullRow;
