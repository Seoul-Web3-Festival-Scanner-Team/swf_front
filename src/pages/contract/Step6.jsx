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

function Step6({ selectIndex, setSelectIndex, lastAction }) {
    const { position, maxPosition, forwardHandler } = useTabLayout();

    return (
        <AllFullColumn cross={LayerAlign.center}>
            <ElasticBlock h={59} />
            <StepText>
                {position + 1}/{maxPosition + 1}
            </StepText>

            <ElasticBlock h={9} />
            <QuestionText>본인인증을 진행해주세요</QuestionText>

            <ElasticBlock h={83} />
            <Row fullWidth={true}>
                <SquareBtn
                    selected={selectIndex === 0}
                    onClick={() => {
                        setSelectIndex(0);
                        lastAction();
                    }}>
                    토스
                </SquareBtn>
                <ElasticBlock w={16} />
                <SquareBtn
                    selected={selectIndex === 1}
                    onClick={() => {
                        setSelectIndex(1);
                        lastAction();
                    }}>
                    카카오
                </SquareBtn>
            </Row>
        </AllFullColumn>
    );
}

export default Step6;
