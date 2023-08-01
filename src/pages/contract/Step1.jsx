import SimpleBtn from "components/global/btns/SimpleBtn";
import AllFullColumn from "components/utils/AllFullColumn";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import { LayerAlign } from "components/utils/WidgetUtils";
import { QuestionText, StepText } from "./ContractPage";
import { useTabLayout } from "hooks/useTabLayout";
import ElasticBlock from "components/utils/ElasticBlock";
import SquareBtn from "components/global/btns/SquareBtn";
import Row from "components/utils/Row";
import {ReactComponent as RenterIcon} from "assets/icons/ic-renter.svg";
import {ReactComponent as RenterActiveIcon} from "assets/icons/ic-renter-active.svg";
import {ReactComponent as RenteeIcon} from "assets/icons/ic-rentee.svg";
import {ReactComponent as RenteeActiveIcon} from "assets/icons/ic-rentee-active.svg";

function Step1({ selectIndex, setSelectIndex, onNext = () => {} }) {
    const { position, maxPosition, forwardHandler } = useTabLayout();

    return (
        <AllFullColumn cross={LayerAlign.center}>
            <ElasticBlock h={59} />
            <StepText>
                {position + 1}/{maxPosition + 1}
            </StepText>

            <ElasticBlock h={9} />
            <QuestionText>둘 중 하나를 골라주세요</QuestionText>

            <ElasticBlock h={55} />
            <Row fullWidth={true}>
                <SquareBtn
                    icon={selectIndex === 0 ? <RenterActiveIcon/> : <RenterIcon/>}
                    selected={selectIndex === 0}
                    onClick={() => {
                        setSelectIndex(0);
                    }}>
                    집주인이에요
                </SquareBtn>
                <ElasticBlock w={16} />
                <SquareBtn
                    icon={selectIndex === 1 ? <RenteeActiveIcon/> : <RenteeIcon/>}
                    selected={selectIndex === 1}
                    onClick={() => {
                        setSelectIndex(1);
                    }}>
                    세입자에요
                </SquareBtn>
            </Row>

            <ElasticBlock h={184} />
            <ElasticSizedBox w={320} h={48}>
                <SimpleBtn onClick={() => {
                    forwardHandler({});
                    onNext();
                }} active={selectIndex !== -1}>
                    다음
                </SimpleBtn>
            </ElasticSizedBox>
        </AllFullColumn>
    );
}

export default Step1;
