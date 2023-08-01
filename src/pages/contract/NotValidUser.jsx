import AllFullColumn from "components/utils/AllFullColumn";
import { LayerAlign } from "components/utils/WidgetUtils";
import { ReactComponent as NotValid } from "assets/icons/ic-not_valid_circle.svg";
import styled from "@emotion/styled";
import ElasticBlock from "components/utils/ElasticBlock";
import { setVw } from "styles/global/globalScreen";
import { QuestionText, SubText } from "./ContractPage";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import SimpleBtn from "components/global/btns/SimpleBtn";

const NotValidIcon = styled(NotValid)`
    ${setVw("width", 134)}
    ${setVw("height", 134)}
`;

function NotValidUser({ setIsVaildUser, backHandler }) {
    return (
        <AllFullColumn cross={LayerAlign.center}>
            <ElasticBlock h={160} />
            <NotValidIcon />

            <ElasticBlock h={42} />
            <QuestionText>세입자만 등록할 수 있어요</QuestionText>

            <ElasticBlock h={8} />
            <SubText>
                죄송해요 :( 아직까지 전세 스캐너에서는
                <br />
                세입자만 계약을 등록할 수 있어요
            </SubText>

            <ElasticBlock h={155} />
            <ElasticSizedBox w={320} h={48}>
                <SimpleBtn
                    onClick={() => {
                        setIsVaildUser(true);
                        backHandler({});
                    }}>
                    돌아가기
                </SimpleBtn>
            </ElasticSizedBox>
        </AllFullColumn>
    );
}

export default NotValidUser;
