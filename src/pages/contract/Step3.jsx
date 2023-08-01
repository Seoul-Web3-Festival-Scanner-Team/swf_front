import SimpleBtn from "components/global/btns/SimpleBtn";
import AllFullColumn from "components/utils/AllFullColumn";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import { LayerAlign } from "components/utils/WidgetUtils";
import { QuestionText, StepText } from "./ContractPage";
import { useTabLayout } from "hooks/useTabLayout";
import ElasticBlock from "components/utils/ElasticBlock";
import LabeledInput from "components/global/inputs/LabeledInput";

let dateStr = "";
function Step3({
    deposit,
    setDeposit,
    monthPay,
    setMonthPay,
    termDate,
    setTermDate,
    name,
    setName,
    socialNumber,
    setSocialNumber,
    allComplete,
    setAllComplete,
}) {
    const { position, maxPosition, forwardHandler } = useTabLayout();

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

    const termDateHandler = (value) => {
        console.log(value.length);
        if (value.length == 1) {
            dateStr = value;
            setTermDate(`${value}0.00.00 - 00.00.00`);
            return;
        }
        if (value.length < 19) {
            console.log("delete");
            // delete
            if (dateStr.length > 0) {
                dateStr = dateStr.slice(0, -1);
                setTermDate(
                    `
                    ${
                        dateStr.slice(0, 2).length == 0
                            ? "00"
                            : dateStr.slice(0, 2).length == 1
                            ? dateStr.slice(0, 2) + "0"
                            : dateStr.slice(0, 2)
                    }.${
                        dateStr.slice(2, 4).length == 0
                            ? "00"
                            : dateStr.slice(2, 4).length == 1
                            ? dateStr.slice(2, 4) + "0"
                            : dateStr.slice(2, 4)
                    }.${
                        dateStr.slice(4, 6).length == 0
                            ? "00"
                            : dateStr.slice(4, 6).length == 1
                            ? dateStr.slice(4, 6) + "0"
                            : dateStr.slice(4, 6)
                    } - ${
                        dateStr.slice(6, 8).length == 0
                            ? "00"
                            : dateStr.slice(6, 8).length == 1
                            ? dateStr.slice(6, 8) + "0"
                            : dateStr.slice(6, 8)
                    }.${
                        dateStr.slice(8, 10).length == 0
                            ? "00"
                            : dateStr.slice(8, 10).length == 1
                            ? dateStr.slice(8, 10) + "0"
                            : dateStr.slice(8, 10)
                    }.${
                        dateStr.slice(10, 12).length == 0
                            ? "00"
                            : dateStr.slice(10, 12).length == 1
                            ? dateStr.slice(10, 12) + "0"
                            : dateStr.slice(10, 12)
                    }
                `.trim()
                );
            } else {
                setTermDate("");
            }
        } else {
            console.log("add");
            // add
            const lastNumberString = value.slice(-1);
            if (lastNumberString.match(/^[0-9,]+$/)) {
                if (dateStr.length > -1 && dateStr.length < 12) {
                    dateStr = dateStr + lastNumberString;
                    setTermDate(
                        `
                    ${
                        dateStr.slice(0, 2).length == 0
                            ? "00"
                            : dateStr.slice(0, 2).length == 1
                            ? dateStr.slice(0, 2) + "0"
                            : dateStr.slice(0, 2)
                    }.${
                            dateStr.slice(2, 4).length == 0
                                ? "00"
                                : dateStr.slice(2, 4).length == 1
                                ? dateStr.slice(2, 4) + "0"
                                : dateStr.slice(2, 4)
                        }.${
                            dateStr.slice(4, 6).length == 0
                                ? "00"
                                : dateStr.slice(4, 6).length == 1
                                ? dateStr.slice(4, 6) + "0"
                                : dateStr.slice(4, 6)
                        } - ${
                            dateStr.slice(6, 8).length == 0
                                ? "00"
                                : dateStr.slice(6, 8).length == 1
                                ? dateStr.slice(6, 8) + "0"
                                : dateStr.slice(6, 8)
                        }.${
                            dateStr.slice(8, 10).length == 0
                                ? "00"
                                : dateStr.slice(8, 10).length == 1
                                ? dateStr.slice(8, 10) + "0"
                                : dateStr.slice(8, 10)
                        }.${
                            dateStr.slice(10, 12).length == 0
                                ? "00"
                                : dateStr.slice(10, 12).length == 1
                                ? dateStr.slice(10, 12) + "0"
                                : dateStr.slice(10, 12)
                        }
                `.trim()
                    );
                }
            }
        }
    };

    const nameHandler = (value) => {
        setName(value);
    };

    const socialNumberHandler = (value) => {
        if (value.match(/^[0-9,]+$/)) {
            if (value.length > 0) {
                setSocialNumber(value);
            } else {
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
                value={deposit}
                setValue={depositHandler}
                title={"보증금"}
                placeholder={"3,000 만원"}
                isImportant
            />

            <ElasticBlock h={28} />
            <LabeledInput
                value={monthPay}
                setValue={monthPayHandler}
                title={"월세"}
                subTitle={"(전세인 경우 미기입)"}
                placeholder={"50 만원"}
            />

            <ElasticBlock h={28} />
            <LabeledInput
                value={termDate}
                setValue={termDateHandler}
                title={"계약 기간"}
                placeholder={"00.00.00 - 00.00.00"}
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
