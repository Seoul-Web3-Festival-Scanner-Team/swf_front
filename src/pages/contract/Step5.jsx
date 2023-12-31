import SimpleBtn from "components/global/btns/SimpleBtn";
import AllFullColumn from "components/utils/AllFullColumn";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import { LayerAlign } from "components/utils/WidgetUtils";
import { QuestionText, StepText, } from "./ContractPage";
import { useTabLayout } from "hooks/useTabLayout";
import ElasticBlock from "components/utils/ElasticBlock";
import FileUploadInput from "components/global/inputs/FileUploadInput";
import Back from 'assets/imgs/등기부등본.png';

function Step5({file, setFile}) {
    const { position, maxPosition, forwardHandler } = useTabLayout();

    return (
        <AllFullColumn cross={LayerAlign.center}>
            <ElasticBlock h={59} />
            <StepText>
                {position + 1}/{maxPosition + 1}
            </StepText>

            <ElasticBlock h={9} />
            <QuestionText>
                등기부등본 혹은 등기사항
                <br />
                전부증명을 첨부해주세요
            </QuestionText>

            <ElasticBlock h={74} />
            <FileUploadInput file={file} setFile={setFile} back={Back}/>

            <ElasticBlock h={68} />
            <ElasticSizedBox w={320} h={48}>
                <SimpleBtn onClick={forwardHandler} active={file}>
                    다음
                </SimpleBtn>
            </ElasticSizedBox>
        </AllFullColumn>
    );
}

export default Step5;
