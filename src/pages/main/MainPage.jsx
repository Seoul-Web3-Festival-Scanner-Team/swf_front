import styled from "@emotion/styled";
import Header from "components/global/Header";
import SimpleBtn, { BUTTON_MODE } from "components/global/btns/SimpleBtn";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import { COLORS } from "styles/global/globalColors";
import { setVw } from "styles/global/globalScreen";
import {ReactComponent as Landing1} from "assets/imgs/img-landing_1.svg";
import {ReactComponent as Landing2} from "assets/imgs/img-landing_2.svg";
import {ReactComponent as Landing3} from "assets/imgs/img-landing_3.svg";
import BasicCarousel from "components/global/carousel/BasicCarousel";
import { useModal } from "components/providers/ModalProvider";

const ButtonWrapper = styled.div`
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    ${setVw("width", 360)}
    ${setVw("height", 72)}

    bottom: 0;

    background-color: ${COLORS.white};
`;

const LandingImg1 = styled(Landing1)`
    ${setVw("width", 360)}
`;

const LandingImg2 = styled(Landing2)`
    ${setVw("width", 360)}
`;

const LandingImg3 = styled(Landing3)`
    ${setVw("width", 360)}
`;

const CaroucelWrapper = styled.div`
    position: absolute;

    ${setVw("bottom", 220)}
`;

function MainPage() {
    const { openModal } = useModal();
    return (
        <BasicLayout>
            <InnerLayout>
                <LandingImg1/>
                <LandingImg2/>
                <LandingImg3/>
                <ButtonWrapper>
                    <ElasticSizedBox w={320} h={48}>
                        <SimpleBtn mode={BUTTON_MODE.FILLED} onClick={() => {
                            // window.location.href = "/search";
                            openModal({params: {title: "잠시만요!"}});
                        }}>시작하기</SimpleBtn>
                    </ElasticSizedBox>
                </ButtonWrapper>
            </InnerLayout>
        </BasicLayout>
    );
}

export default MainPage;
