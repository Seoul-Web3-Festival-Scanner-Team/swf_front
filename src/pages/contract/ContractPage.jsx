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
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

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

    const [allComplete3, setAllComplete3] = useState(false);
    const [deposit, setDeposit] = useState("");
    const [monthPay, setMonthPay] = useState("");
    const [termDate, setTermDate] = useState("");

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
                <TabLayout
                    tabList={[
                        <Step1 />,
                        <Step2 />,
                        <Step3
                            deposit={deposit}
                            setDeposit={setDeposit}
                            monthPay={monthPay}
                            setMonthPay={setMonthPay}
                            termDate={termDate}
                            setTermDate={setTermDate}
                            allComplete={allComplete3}
                            setAllComplete={setAllComplete3}
                        />,
                        <Step4 />,
                        <Step5 />,
                        <Step6 />,
                    ]}
                />
            </InnerLayout>
        </BasicLayout>
    );
}

export default ContractPage;
