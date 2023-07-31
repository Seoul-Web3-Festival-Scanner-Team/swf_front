import styled from "@emotion/styled";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import { COLORS } from "styles/global/globalColors";
import GlobalFont from "styles/global/globalFonts";
import BasicInput from "./BasicInput";
import ElasticBlock from "components/utils/ElasticBlock";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    ${GlobalFont({
        size: 16,
        weight: 500,
        color: COLORS.black,
    })}

    span {
        color: ${COLORS.simple_blue};
    }

    p {
        display: inline-block;
        color: ${COLORS.black_op_1};
    }
`;
function LabeledInput({
    type = "text",
    value,
    setValue,
    placeholder = "Basic Input",
    title = "계약서 제목",
    subTitle = "",
    isImportant = false,
}) {
    return (
        <Container>
            <Label>
                {title}
                <span>{isImportant && " *"}</span>
                <p>{subTitle}</p>
            </Label>

            <ElasticBlock h={12} />
            <ElasticSizedBox w={316} h={48}>
                <BasicInput
                    type={type}
                    value={value}
                    setValue={setValue}
                    placeholder={placeholder}
                    round={"10px"}
                />
            </ElasticSizedBox>
        </Container>
    );
}

export default LabeledInput;
