import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";
import { setVw } from "styles/global/globalScreen";
import { FadeColorKf } from "utils/animations/BasicAnimations";
import ElasticBlock from "components/utils/ElasticBlock";

const BigCircle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${setVw("width", 134)};
    ${setVw("height", 134)};
    border-radius: 100%;

    background-color: ${COLORS.simple_blue_op};
`;

const SmallCircle = styled.div`
    ${setVw("width", 12)};
    ${setVw("height", 12)};
    border-radius: 100%;

    background-color: ${COLORS.simple_blue};

    animation: ${FadeColorKf} 1.2s ease-in-out infinite alternate;
    ${({ delay }) => css`
        animation-delay: ${delay}ms;
    `}
`;

function CircleOpWaveLoading() {
    return (
        <BigCircle>
            <SmallCircle delay={0} />
            <ElasticBlock w={11} />
            <SmallCircle delay={200} />
            <ElasticBlock w={11} />
            <SmallCircle delay={400} />
        </BigCircle>
    );
}

export default CircleOpWaveLoading;