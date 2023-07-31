import { css } from "@emotion/react";
import { COLORS } from "./globalColors";

class GlobalFonts {
    l1620 = ({ color = COLORS.black }) => {
        return css`
            font-size: 16px;
            font-weight: lighter;
            line-height: 20px;
            color: ${color};
        `;
    };

    r1620 = ({ color = COLORS.black }) => {
        return css`
            font-size: 16px;
            font-weight: normal;
            line-height: 20px;
            color: ${color};
        `;
    }

    b1620 = ({ color = COLORS.black }) => {
        return css`
            font-size: 16px;
            font-weight: bold;
            line-height: 20px;
            color: ${color};
        `;
    };
}

export default GlobalFonts;
