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
import { useModal } from "components/providers/ModalProvider";

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

export const SubText = styled.p`
    ${GlobalFont({
        color: COLORS.black_op_1,
        size: 16,
        weight: 500,
        height: 21,
    })}
`;

function ContractPage() {
    const { backHandler} = useTabLayout();
    const { modal, openModal } = useModal();
    const history = window.history;
    // const location = window.location;

    // Step1
    const [selectIndex1, setSelectIndex1] = useState(0);

    // Step2
    const [selectIndex2, setSelectIndex2] = useState(0);

    // Step3
    const [allComplete3, setAllComplete3] = useState(true);
    const [deposit, setDeposit] = useState("");
    const [monthPay, setMonthPay] = useState("");
    const [termDate, setTermDate] = useState("");
    const [name, setName] = useState("");
    const [socialNumber, setSocialNumber] = useState("");

    // Step4
    const [file1, setFile1] = useState(true);

    // Step5
    const [file2, setFile2] = useState(true);

    // Step6
    const [selectIndex3, setSelectIndex3] = useState(0);

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
                        <Step1
                            selectIndex={selectIndex1}
                            setSelectIndex={setSelectIndex1}
                        />,
                        <Step2
                            selectIndex={selectIndex2}
                            setSelectIndex={setSelectIndex2}
                        />,
                        <Step3
                            deposit={deposit}
                            setDeposit={setDeposit}
                            monthPay={monthPay}
                            setMonthPay={setMonthPay}
                            termDate={termDate}
                            setTermDate={setTermDate}
                            name={name}
                            setName={setName}
                            socialNumber={socialNumber}
                            setSocialNumber={setSocialNumber}
                            allComplete={allComplete3}
                            setAllComplete={setAllComplete3}
                        />,
                        <Step4 file={file1} setFile={setFile1} />,
                        <Step5 file={file2} setFile={setFile2} />,
                        <Step6
                            selectIndex={selectIndex3}
                            setSelectIndex={setSelectIndex3}
                            lastAction={() => {
                                openModal({
                                    text: "계약서가 등록되었습니다.",
                                    onConfirm: () => {
                                        history.go(-1);
                                    },
                                });
                            }}
                        />,
                    ]}
                />
            </InnerLayout>
        </BasicLayout>
    );
}

export default ContractPage;
