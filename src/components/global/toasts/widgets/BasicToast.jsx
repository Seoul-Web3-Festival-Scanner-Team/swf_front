import styled from "@emotion/styled";
import ToastWrapper from "./ToastWrapper";
import { setVw } from "styles/global/globalScreen";
import { COLORS } from "styles/global/globalColors";
import { useEffect } from "react";
import { FadeInKf, FadeOutKf, TopToBottomKf, TopToBottomPlusKf } from "utils/animations/BasicAnimations";
import { useToast } from "components/providers/ToastProvider";

const BackBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    ${setVw("width", 320)}
    height: max-content;

    ${setVw("margin-top", 512)}
    ${setVw("padding-top", 12)}
    ${setVw("padding-bottom", 12)}
    ${setVw("padding-left", 18)}
    ${setVw("padding-right", 18)}
    ${setVw("border-radius", 10)}

    background-color: ${COLORS.simple_gray_op_5};
    color: ${COLORS.white};

    animation: ${FadeInKf} 800ms ease-in-out,
        ${FadeOutKf} 1500ms ease-in-out 4700ms,
        ${TopToBottomPlusKf} 1500ms ease-in-out 4700ms;
`;

function BasicToast() {
    const { params } = useToast();

    return (
        <ToastWrapper>
            <BackBoard>{params?.content}</BackBoard>
        </ToastWrapper>
    );
}

export default BasicToast;
