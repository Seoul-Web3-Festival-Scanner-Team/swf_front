import styled from "@emotion/styled";
import ModalWrapper from "./ModalWrapper";
import { useEffect, useRef } from "react";
import AllFullColumn from "components/utils/AllFullColumn";
import { LayerAlign } from "components/utils/WidgetUtils";
import { useModal } from "components/providers/ModalProvider";
import { FadeInKf, TopToBottomKf } from "utils/animations/BasicAnimations";
import { setVw } from "styles/global/globalScreen";
import GlobalFont from "styles/global/globalFonts";
import { COLORS } from "styles/global/globalColors";
import ElasticText from "components/utils/ElasticText";
import ElasticBlock from "components/utils/ElasticBlock";
import Row from "components/utils/Row";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import SimpleBtn, { BUTTON_MODE } from "components/global/btns/SimpleBtn";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${setVw("width", 320)}
    ${setVw("height", 188)}

    background-color: #fff;
    ${setVw("border-radius", 10)}

    overflow: hidden;

    animation: ${TopToBottomKf} 0.3s ease-in-out, ${FadeInKf} 0.3s ease-in-out;
`;

const Title = styled.p`
    ${GlobalFont({
        color: COLORS.black,
        size: 20,
        weight: 700,
    })}
`;

function ConfirmModal() {
    const { closeModal, params } = useModal();
    const innerRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (innerRef.current && !innerRef.current.contains(e.target)) {
                closeModal();
            }
        };

        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler); // 모바일 대응

        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler); // 모바일 대응
        };
    });

    return (
        <ModalWrapper>
            <Container ref={innerRef}>
                <AllFullColumn
                    main={LayerAlign.center}
                    cross={LayerAlign.center}>
                    <Title>{params?.title}</Title>

                    <ElasticBlock h={12} />
                    <ElasticText
                        color={COLORS.black_op_1}
                        size={16}
                        weight={500}>
                        {params?.content}
                    </ElasticText>

                    <ElasticBlock h={28} />
                    <Row fullWidth={true}>
                        <ElasticSizedBox w={136} h={48}>
                            <SimpleBtn onClick={params?.onConfirm}>
                                {params?.confirmText}
                            </SimpleBtn>
                        </ElasticSizedBox>

                        <ElasticBlock w={16} />
                        <ElasticSizedBox w={136} h={48}>
                            <SimpleBtn
                                onClick={params?.onCancel}
                                mode={BUTTON_MODE.FILLED}>
                                {params?.cancelText}
                            </SimpleBtn>
                        </ElasticSizedBox>
                    </Row>
                </AllFullColumn>
            </Container>
        </ModalWrapper>
    );
}

export default ConfirmModal;
