import { css } from "@emotion/react";
import { COLORS } from "./globalColors";
import { setVw } from "./globalScreen";

// 500  - Thin
// 600  - Regular
// 700  - Bold

function GlobalFont({ color, size, weight, height, align }) {
    return css`
        color: ${color ? color : COLORS.black};
        ${size ? setVw("font-size", size) : ""};
        font-weight: ${weight ? weight : "normal"};
        ${height ? setVw("line-height", height) : ""};
        text-align: ${align ? align : "start"};
    `;
}

export default GlobalFont;