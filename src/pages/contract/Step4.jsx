import SimpleBtn from "components/global/btns/SimpleBtn";
import AllFullColumn from "components/utils/AllFullColumn";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import { LayerAlign } from "components/utils/WidgetUtils";
import { QuestionText, StepText, SubText } from "./ContractPage";
import { useTabLayout } from "hooks/useTabLayout";
import ElasticBlock from "components/utils/ElasticBlock";
import FileUploadInput from "components/global/inputs/FileUploadInput";
import Back from 'assets/imgs/임대차계약서.png';

function Step4({file, setFile}) {
    const { position, maxPosition, forwardHandler } = useTabLayout();

    return (
        <AllFullColumn cross={LayerAlign.center}>
            <ElasticBlock h={59} />
            <StepText>
                {position + 1}/{maxPosition + 1}
            </StepText>

            <ElasticBlock h={9} />
            <QuestionText>
                부동산 임대차계약서
                <br />
                파일을 첨부해주세요
            </QuestionText>

            <ElasticBlock h={12} />
            <SubText>주민번호 뒷자리를 가린 후 올려주세요</SubText>

            <ElasticBlock h={48} />
            <FileUploadInput file={file} setFile={setFile} back={Back} />

            <ElasticBlock h={68} />
            <ElasticSizedBox w={320} h={48}>
                <SimpleBtn onClick={forwardHandler} active={file}>
                    다음
                </SimpleBtn>
            </ElasticSizedBox>
        </AllFullColumn>
    );
}

export default Step4;
