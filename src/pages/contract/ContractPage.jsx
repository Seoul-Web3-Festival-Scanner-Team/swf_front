import Header from "components/global/Header";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import TabLayout from "components/layouts/TabLayout";
import { useState } from "react";
import Step1 from "./Step1";
import styled from "@emotion/styled";
import { setVw } from "styles/global/globalScreen";
import GlobalFont from "styles/global/globalFonts";
import { COLORS } from "styles/global/globalColors";
import { useTabLayout } from "hooks/useTabLayout";

export const StepText = styled.p`
    ${GlobalFont({
        color: COLORS.black_op_1,
        size: 14,
        weight: 700,
        height: 16.7,
    })}
`;

export const QuestionText = styled.p`
    ${GlobalFont({
        color: COLORS.black,
        size: 20,
        weight: 700,
        height: 23.87,
    })}
`;

function ContractPage() {
    const { position, maxPosition, backHandler } = useTabLayout();

    return (
        <BasicLayout>
            <InnerLayout>
                <Header title={"내 계약서 등록"} onBackClick={backHandler} />
                <TabLayout tabList={[<Step1 />, <Step1 />]} />
            </InnerLayout>
        </BasicLayout>
    );
}

export default ContractPage;
