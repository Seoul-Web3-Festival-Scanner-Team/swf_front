import SimpleBtn from "components/global/btns/SimpleBtn";
import AllFullColumn from "components/utils/AllFullColumn";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import { LayerAlign } from "components/utils/WidgetUtils";
import { QuestionText, StepText } from "./ContractPage";
import { useTabLayout } from "hooks/useTabLayout";
import { useEffect } from "react";
import ElasticBlock from "components/utils/ElasticBlock";

function Step1() {
    const { position, maxPosition, forwardHandler } = useTabLayout();

    useEffect(() => {
        console.log("maxPosition", maxPosition);
    }, []);

    return (
        <AllFullColumn cross={LayerAlign.center}>
            <ElasticBlock h={59}/>
            <StepText>
                {position + 1}/{maxPosition + 1}
            </StepText>

            <ElasticBlock h={9} />
            <QuestionText>
                둘 중 하나를 골라주세요
            </QuestionText>

            <ElasticBlock h={55} />
            <ElasticSizedBox w={320} h={48}>
                <SimpleBtn onClick={forwardHandler}>다음</SimpleBtn>
            </ElasticSizedBox>
        </AllFullColumn>
    );
}

export default Step1;
