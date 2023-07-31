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
                    selected={selectIndex === 0}
                    onClick={() => {
                        setSelectIndex(0);
                    }}>
                    월세
                </SquareBtn>
                <ElasticBlock w={16} />
                <SquareBtn
                    selected={selectIndex === 1}
                    onClick={() => {
                        setSelectIndex(1);
                    }}>
                    전세
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
