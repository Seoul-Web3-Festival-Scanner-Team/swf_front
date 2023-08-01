import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { COLORS } from "styles/global/globalColors";
import { setVw } from "styles/global/globalScreen";
import ElasticBlock from "components/utils/ElasticBlock";

const Container = styled.button`
    cursor: pointer;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${setVw("width", 152)}
    ${setVw("height", 152)}

    font-style: normal;
    font-weight: 700;
    line-height: normal;

    ${({ selected }) => css`
        cursor: pointer;
        background-color: ${selected
            ? COLORS.simple_blue_op
            : COLORS.simple_gray_op_3};
        border-radius: 10px;

        color: ${COLORS.black};
    `}

    &:hover {
        background-color: ${COLORS.simple_blue_op};

        div {
            background-color: ${COLORS.simple_blue};
        }
    }
`;

const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${setVw("width", 80)}
    ${setVw("height", 80)}

    border-radius: 100%;

    ${({ selected }) => css`
        background-color: ${selected
            ? COLORS.simple_blue
            : COLORS.simple_gray_op_4};
    `}
`;
function SquareBtn({
    icon,
    children,
    onClick = () => {},
    selected = true,
}) {
    return (
        <Container onClick={onClick} selected={selected}>
            <Circle selected={selected}>{icon}</Circle>
            <ElasticBlock h={15} />
            {children}
        </Container>
    );
}

export default SquareBtn;
