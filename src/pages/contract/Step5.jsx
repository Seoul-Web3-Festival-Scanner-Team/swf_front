import SimpleBtn from "components/global/btns/SimpleBtn";
import AllFullColumn from "components/utils/AllFullColumn";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import { LayerAlign } from "components/utils/WidgetUtils";
import { QuestionText, StepText } from "./ContractPage";
import { useTabLayout } from "hooks/useTabLayout";
import { useState } from "react";
import ElasticBlock from "components/utils/ElasticBlock";
import SquareBtn from "components/global/btns/SquareBtn";
import Row from "components/utils/Row";

function Step5() {
    const { position, maxPosition, forwardHandler } = useTabLayout();
    const [selectIndex, setSelectIndex] = useState(-1);

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
                    selected={selectIndex === 0}
                    onClick={() => {
                        setSelectIndex(0);
                    }}>
                    집주인이에요
                </SquareBtn>
                <ElasticBlock w={16} />
                <SquareBtn
                    selected={selectIndex === 1}
                    onClick={() => {
                        setSelectIndex(1);
                    }}>
                    세입자에요
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

export default Step5;
