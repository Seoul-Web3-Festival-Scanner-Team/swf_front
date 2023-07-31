import Header from "components/global/Header";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import TabLayout from "components/layouts/TabLayout";
import { useEffect, useState } from "react";
import Step1 from "./Step1";
import styled from "@emotion/styled";
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
    const { position, backHandler, forwardHandler } = useTabLayout();
    const history = window.history;
    const location = window.location;

    // const backFucntion = () => {
    //     console.log("backFucntion");
    //     if (position > 0) {
    //         backHandler({ backAction: () => {} });
    //     } else {
    //         history.go(-2);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener("popstate", backFucntion);
    //     return () => {
    //         window.removeEventListener("popstate", backFucntion);
    //     };
    // });

    return (
        <BasicLayout>
            <InnerLayout>
                <Header
                    title={"내 계약서 등록"}
                    onBackClick={() =>
                        backHandler({
                            backAction: () => {
                                history.go(-1);
                            },
                        })
                    }
                />
                <TabLayout tabList={[<Step1 />, <Step1 />]} />
            </InnerLayout>
        </BasicLayout>
    );
}

export default ContractPage;