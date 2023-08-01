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
import { ModalType } from "components/providers/ModalProvider";
import StoreLoading from "./StoreLoading";
import { ToastType, useToast } from "components/providers/ToastProvider";
import { useNavigate } from "react-router-dom";
import NotValidUser from "./NotValidUser";
import DummyResult from "./DummyResult";

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
        align: "center",
    })}
`;

function ContractPage() {
    const { backHandler } = useTabLayout();
    const { openModal, closeModal } = useModal();
    const { showToast } = useToast();
    const history = window.history;
    const location = window.location;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isVaildUser, setIsVaildUser] = useState(true); // [true: 유효한 유저, false: 유효하지 않은 유저

    // Step1
    const [selectIndex1, setSelectIndex1] = useState(1);

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

    useEffect(() => {
        window.onpopstate = function (e) {
            history.pushState(null, null, location.href);
            history.go(1);
            backHandler({
                backAction: () => {
                    openModal({
                        type: ModalType.Confirm,
                        params: {
                            title: "정말 나가시겠어요? :(",
                            content: "지금 나가면 계약 내용이 저장되지 않아요",
                            confirmText: "나가기",
                            cancelText: "이어 등록하기",
                            onConfirm: () => {
                                history.go(-2);
                            },
                            onCancel: () => {
                                closeModal();
                            },
                        },
                    });
                },
            });
        };
    }, []);

    useEffect(() => {
        if (loading) {
            showToast({
                type: ToastType.Basic,
                params: {
                    content: "본인 인증 완료!",
                },
            });

            setTimeout(() => {
                navigate("/search/map?status=new", {state: DummyResult});
            }, 6000);
        }
    }, [loading]);

    return (
        <BasicLayout>
            {loading ? (
                <InnerLayout>
                    <StoreLoading />
                </InnerLayout>
            ) : !isVaildUser ? (
                <InnerLayout>
                    <NotValidUser setIsVaildUser={setIsVaildUser} backHandler={backHandler}/>
                </InnerLayout>
            ) : (
                <>
                    <InnerLayout>
                        <Header
                            title={"내 계약서 등록"}
                            onBackClick={() =>
                                backHandler({
                                    backAction: () => {
                                        openModal({
                                            type: ModalType.Confirm,
                                            params: {
                                                title: "정말 나가시겠어요? :(",
                                                content:
                                                    "지금 나가면 계약 내용이 저장되지 않아요",
                                                confirmText: "나가기",
                                                cancelText: "이어 등록하기",
                                                onConfirm: () => {
                                                    history.go(-2);
                                                },
                                                onCancel: () => {
                                                    closeModal();
                                                },
                                            },
                                        });
                                    },
                                })
                            }
                        />
                        <TabLayout
                            tabList={[
                                <Step1
                                    selectIndex={selectIndex1}
                                    setSelectIndex={setSelectIndex1}
                                    onNext={() => {
                                        if (selectIndex1 === 0) {
                                            setIsVaildUser(false);
                                        }
                                    }}
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
                                        setLoading(true);
                                    }}
                                />,
                            ]}
                        />
                    </InnerLayout>
                </>
            )}
        </BasicLayout>
    );
}

export default ContractPage;
