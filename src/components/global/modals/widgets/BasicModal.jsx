import styled from "@emotion/styled";
import ModalWrapper from "./ModalWrapper";
import { useEffect, useRef } from "react";
import AllFullColumn from "components/utils/AllFullColumn";
import { LayerAlign } from "components/utils/WidgetUtils";
import { useModal } from "components/providers/ModalProvider";
import { FadeInKf, TopToBottomKf } from "utils/animations/BasicAnimations";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 150px;

    background-color: #fff;
    border-radius: 10px;

    overflow: hidden;

    animation: ${TopToBottomKf} 0.3s ease-in-out, ${FadeInKf} 0.3s ease-in-out;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`;

function BasicModal() {
    const { closeModal, params } = useModal();
    const innerRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (innerRef.current && !innerRef.current.contains(e.target)) {
                closeModal();
            }
        };

        document.addEventListener("mousedown", handler);
        // document.addEventListener('touchstart', handler); // 모바일 대응

        return () => {
            document.removeEventListener("mousedown", handler);
            // document.removeEventListener('touchstart', handler); // 모바일 대응
        };
    });

    return (
        <ModalWrapper>
            <Container ref={innerRef}>
                <AllFullColumn main={LayerAlign.start} cross={LayerAlign.start}>

                </AllFullColumn>
            </Container>
        </ModalWrapper>
    );
}

export default BasicModal;
