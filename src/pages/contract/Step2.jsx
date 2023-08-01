import SimpleBtn from "components/global/btns/SimpleBtn";
import AllFullColumn from "components/utils/AllFullColumn";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import { LayerAlign } from "components/utils/WidgetUtils";
import { QuestionText, StepText } from "./ContractPage";
import { useTabLayout } from "hooks/useTabLayout";
import ElasticBlock from "components/utils/ElasticBlock";
import SquareBtn from "components/global/btns/SquareBtn";
import Row from "components/utils/Row";
import { ReactComponent as MonthlyIcon } from "assets/icons/ic-monthly.svg";
import { ReactComponent as MonthlyActiveIcon } from "assets/icons/ic-monthly-active.svg";
import { ReactComponent as RentIcon } from "assets/icons/ic-rent.svg";
import RentActiveIcon from "assets/icons/ic-rent-active.png";

function Step2({ selectIndex, setSelectIndex }) {
    const { position, maxPosition, forwardHandler } = useTabLayout();

    return (
        <AllFullColumn cross={LayerAlign.center}>
            <ElasticBlock h={59} />
            <StepText>
                {position + 1}/{maxPosition + 1}
            </StepText>

            <ElasticBlock h={9} />
            <QuestionText>어떤 형태의 계약인가요?</QuestionText>

            <ElasticBlock h={55} />
            <Row fullWidth={true}>
                <SquareBtn
                    icon={
                        selectIndex === 0 ? (
                            <img src={RentActiveIcon} />
                        ) : (
                            <RentIcon />
                        )
                    }
                    selected={selectIndex === 0}
                    onClick={() => {
                        setSelectIndex(0);
                    }}>
                    전세
                </SquareBtn>

                <ElasticBlock w={16} />
                <SquareBtn
                    icon={
                        selectIndex === 1 ? (
                            <MonthlyActiveIcon />
                        ) : (
                            <MonthlyIcon />
                        )
                    }
                    selected={selectIndex === 1}
                    onClick={() => {
                        setSelectIndex(1);
                    }}>
                    월세
                </SquareBtn>
            </Row>

            <ElasticBlock h={184} />
            <ElasticSizedBox w={320} h={48}>
                <SimpleBtn onClick={forwardHandler} active={selectIndex !== -1}>
                    다음
                </SimpleBtn>
            </ElasticSizedBox>
        </AllFullColumn>
    );
}

export default Step2;
