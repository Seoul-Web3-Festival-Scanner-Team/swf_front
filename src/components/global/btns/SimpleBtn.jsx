import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { COLORS } from "styles/global/globalColors";
import { setVw } from 'styles/global/globalScreen';

const Container = styled.button`
    cursor: pointer;
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    transition: all 0.2s ease-in-out;

    font-style: normal;
    font-weight: 700;
    line-height: normal;

    ${({ disabled, mode, fontSize, round }) => css`
        cursor: ${disabled ? "auto" : "pointer"};
        background-color: ${BACK_COLOR[mode]};
        border-radius: ${round};

        color: ${FONT_COLOR[mode]};
        ${fontSize};
    `}
`;

export const BUTTON_MODE = {
    OPACITY: "opacity",
    FILLED: "filled",
    DISABLED: "disabled",
};

const BACK_COLOR = {
    [BUTTON_MODE.OPACITY]: COLORS.simple_blue_op,
    [BUTTON_MODE.FILLED]: COLORS.simple_blue,
    [BUTTON_MODE.DISABLED]: COLORS.simple_gray_op_2,
};

const FONT_COLOR = {
    [BUTTON_MODE.OPACITY]: COLORS.simple_blue,
    [BUTTON_MODE.FILLED]: COLORS.white,
    [BUTTON_MODE.DISABLED]: COLORS.simple_gray_op_1,
};
function SimpleBtn({
    children,
    onClick,
    mode = BUTTON_MODE.OPACITY,
    active = true,
    fontSize = 16,
    round = "10px",
}) {
    return (
        <Container
            onClick={onClick}
            disabled={!active}
            mode={active ? mode : BUTTON_MODE.DISABLED}
            fontSize={setVw('font-size', fontSize)}
            round={round}>
            {children}
        </Container>
    );
}

export default SimpleBtn;
