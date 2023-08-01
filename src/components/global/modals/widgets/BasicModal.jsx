import styled from "@emotion/styled";
import ModalWrapper from "./ModalWrapper";
import { useEffect, useRef } from "react";
import AllFullColumn from "components/utils/AllFullColumn";
import { LayerAlign } from "components/utils/WidgetUtils";
import { useModal } from "components/providers/ModalProvider";
import { FadeInKf, TopToBottomKf } from "utils/animations/BasicAnimations";
import { setVw } from "styles/global/globalScreen";
import ElasticText from "components/utils/ElasticText";
import { COLORS } from "styles/global/globalColors";
import ElasticBlock from "components/utils/ElasticBlock";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import SimpleBtn, { BUTTON_MODE } from "components/global/btns/SimpleBtn";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${setVw("width", 320)}
    ${setVw("height", 206)}

    background-color: #fff;
    border-radius: 10px;

    overflow: hidden;

    animation: ${TopToBottomKf} 0.3s ease-in-out, ${FadeInKf} 0.3s ease-in-out;
`;

const Title = styled(ElasticText)``;
const SubText = styled(ElasticText)``;

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
                <Title color={COLORS.black} size={20} weight={700}>
                    {params.title}
                </Title>

                <ElasticBlock h={12} />
                <SubText color={COLORS.black_op_1} size={16} weight={500}>
                    최근 7일 내에 계약이 있었던 매물이예요.<br/>
                    이중 / 중복 계약은 아닌지 유의해주세요.
                </SubText>

                <ElasticBlock h={28} />
                <ElasticSizedBox w={280} h={48}>
                    <SimpleBtn onClick={closeModal} mode={BUTTON_MODE.FILLED}>
                        확인했어요
                    </SimpleBtn>
                </ElasticSizedBox>
            </Container>
        </ModalWrapper>
    );
}

export default BasicModal;
