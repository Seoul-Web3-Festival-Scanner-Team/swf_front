import SimpleBtn from "components/global/btns/SimpleBtn";
import AllFullColumn from "components/utils/AllFullColumn";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import { LayerAlign } from "components/utils/WidgetUtils";
import { QuestionText, StepText } from "./ContractPage";
import { useTabLayout } from "hooks/useTabLayout";
import ElasticBlock from "components/utils/ElasticBlock";
import LabeledInput from "components/global/inputs/LabeledInput";
import { ModalType, useModal } from "components/providers/ModalProvider";

let dateStr = "";
function Step3({
    detailInfo,
    setDetailInfo,
    deposit,
    setDeposit,
    monthPay,
    setMonthPay,
    termStartDate,
    setTermStartDate,
    termEndDate,
    setTermEndDate,
    contractDate,
    setContractDate,
    name,
    setName,
    socialNumber,
    setSocialNumber,
    allComplete,
    selectIndex,
}) {
    const { openModal } = useModal();
    const { position, maxPosition, forwardHandler } = useTabLayout();

    const detailHandler = (value) => {
        setDetailInfo(value);
    }

    const depositHandler = (value) => {
        if (value.match(/^[0-9,]+$/)) {
            if (value.length > 0) {
                setDeposit(
                    parseInt(value.replaceAll(",", "")).toLocaleString()
                );
            } else {
                setDeposit("");
            }
        } else {
            if (value.length < 1) {
                setDeposit("");
            }
        }
    };

    const monthPayHandler = (value) => {
        if (value.match(/^[0-9,]+$/)) {
            if (value.length > 0) {
                setMonthPay(
                    parseInt(value.replaceAll(",", "")).toLocaleString()
                );
            } else {
                setMonthPay("");
            }
        } else {
            if (value.length < 1) {
                setMonthPay("");
            }
        }
    };

    const nameHandler = (value) => {
        setName(value);
    };

    const socialNumberHandler = (value) => {
        if (value.match(/^[0-9,]+$/)) {
            if (value.length >= 0) {
                setSocialNumber(value);
            } else {
                setSocialNumber("");
            }
        } else {
            if (value.length < 1) {
                setSocialNumber("");
            }
        }
    };

    // useEffect(() => {
    //     if (deposit.length > 0 && l &&
    //         setAllComplete(true);
    //     } else {
    //         setAllComplete(false);
    //     }
    // }, [deposit, monthPay]);

    return (
        <AllFullColumn cross={LayerAlign.center}>
            <ElasticBlock h={59} />
            <StepText>
                {position + 1}/{maxPosition + 1}
            </StepText>

            <ElasticBlock h={9} />
            <QuestionText>계약의 상세 내역을 입력해주세요</QuestionText>

            <ElasticBlock h={59} />
            <LabeledInput
                value={detailInfo}
                setValue={setDetailInfo}
                title={"상세 주소"}
                placeholder={"상세 주소"}
                isImportant
            />

            <ElasticBlock h={28} />
            <LabeledInput
                value={deposit}
                setValue={depositHandler}
                title={"보증금"}
                unit={"만원"}
                placeholder={"3,000 만원"}
                isImportant
            />

            {selectIndex === 0 && (
                <>
                    <ElasticBlock h={28} />
                    <LabeledInput
                        value={monthPay}
                        setValue={monthPayHandler}
                        title={"월세"}
                        unit={"만원"}
                        subTitle={"(전세인 경우 미기입)"}
                        placeholder={"50 만원"}
                    />
                </>
            )}

            <ElasticBlock h={28} />
            <LabeledInput
                onClick={() => {
                    openModal({
                        type: ModalType.Date,
                        params: {
                            date: termStartDate,
                            onChange: (date) => {
                                setTermStartDate(date);
                            },
                        },
                    });
                }}
                value={`${termStartDate.getFullYear()}.${
                    termStartDate.getMonth() + 1 < 10
                        ? `0${termStartDate.getMonth() + 1}`
                        : termStartDate.getMonth() + 1
                }.${
                    termStartDate.getDate() < 10
                        ? `0${termStartDate.getDate()}`
                        : termStartDate.getDate()
                }`}
                title={"계약 기간"}
                subTitle={"(시작일)"}
                placeholder={"00.00.00"}
                active={false}
                isImportant
            />

            <ElasticBlock h={28} />
            <LabeledInput
                onClick={() => {
                    openModal({
                        type: ModalType.Date,
                        params: {
                            date: termEndDate,
                            onChange: (date) => {
                                setTermEndDate(date);
                            },
                        },
                    });
                }}
                value={`${termEndDate.getFullYear()}.${
                    termEndDate.getMonth() + 1 < 10
                        ? `0${termEndDate.getMonth() + 1}`
                        : termEndDate.getMonth() + 1
                }.${
                    termEndDate.getDate() < 10
                        ? `0${termEndDate.getDate()}`
                        : termEndDate.getDate()
                }`}
                title={"계약 기간"}
                subTitle={"(만료일)"}
                placeholder={"00.00.00"}
                active={false}
                isImportant
            />

            <ElasticBlock h={28} />
            <LabeledInput
                onClick={() => {
                    openModal({
                        type: ModalType.Date,
                        params: {
                            date: contractDate,
                            onChange: (date) => {
                                setContractDate(date);
                            },
                        },
                    });
                }}
                value={`${contractDate.getFullYear()}.${
                    contractDate.getMonth() + 1 < 10
                        ? `0${contractDate.getMonth() + 1}`
                        : contractDate.getMonth() + 1
                }.${
                    contractDate.getDate() < 10
                        ? `0${contractDate.getDate()}`
                        : contractDate.getDate()
                }`}
                title={"계약 일자"}
                placeholder={"00.00.00"}
                active={false}
                isImportant
            />

            <ElasticBlock h={28} />
            <LabeledInput
                value={name}
                setValue={nameHandler}
                title={"임차인 이름"}
                placeholder={"이름"}
                isImportant
            />

            <ElasticBlock h={28} />
            <LabeledInput
                value={socialNumber}
                setValue={socialNumberHandler}
                title={"임차인 주민번호 앞자리"}
                placeholder={"000000"}
                maxLength={6}
                isImportant
            />

            <ElasticBlock h={90} />
            <ElasticSizedBox w={320} h={48}>
                <SimpleBtn onClick={forwardHandler} active={allComplete}>
                    다음
                </SimpleBtn>
            </ElasticSizedBox>
        </AllFullColumn>
    );
}

export default Step3;
