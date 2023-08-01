import styled from "@emotion/styled";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import { COLORS } from "styles/global/globalColors";
import GlobalFont from "styles/global/globalFonts";
import BasicInput from "./BasicInput";
import ElasticBlock from "components/utils/ElasticBlock";
import ElasticText from "components/utils/ElasticText";
import { setVw } from "styles/global/globalScreen";
import AllFullRow from "components/utils/AllFullRow";
import { LayerAlign } from "components/utils/WidgetUtils";

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

const UnitWrapper = styled(ElasticText)`
    white-space: nowrap;
`;
function LabeledInput({
    type = "text",
    value,
    setValue,
    placeholder = "Basic Input",
    title = "계약서 제목",
    subTitle = "",
    unit = "",
    isImportant = false,
    active,
    onClick = () => {},
    ...props
}) {
    return (
        <Container {...props}>
            <Label>
                {title}
                <p>{subTitle}</p>
                <span>{isImportant && " *"}</span>
            </Label>

            <ElasticBlock h={12} />
            <ElasticSizedBox w={316} h={48}>
                <AllFullRow
                    cross={LayerAlign.center}
                    onClick={onClick}
                    styles={{ cursor: "pointer" }}>
                    <BasicInput
                        type={type}
                        value={value}
                        setValue={setValue}
                        placeholder={placeholder}
                        round={"10px"}
                        disabled={!active}
                    />
                    {unit === "" ? null : <ElasticBlock w={8} />}
                    <UnitWrapper weight={600}>{unit}</UnitWrapper>
                </AllFullRow>
            </ElasticSizedBox>
        </Container>
    );
}

export default LabeledInput;
