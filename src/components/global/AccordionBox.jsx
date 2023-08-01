import styled from "@emotion/styled";
import ElasticBlock from "components/utils/ElasticBlock";
import Row from "components/utils/Row";
import { useCallback, useRef, useState } from "react";
import { COLORS } from "styles/global/globalColors";
import { setVw, setVwMulti } from "styles/global/globalScreen";
import { ReactComponent as ArrowDown } from "assets/icons/ic-down_arrow.svg";
import Spacer from "components/utils/Spacer";

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;

    ${setVw("width", 320)}

    border-top: 1px solid rgba(31, 49, 78, 0.05);
    border-bottom: 1px solid rgba(31, 49, 78, 0.05);
`;

const Header = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    height: max-content;
    ${setVwMulti("padding", [14, 0])}
`;

const ContentsWrapper = styled.div`
    cursor: pointer;
    height: 0;
    width: inherit;
    overflow: hidden;
    transition: height 0.35s ease, background 0.35s ease;
`;

const Contents = styled.div`
    ${setVwMulti("padding", [5, 0, 12, 0])}
`;

const Address = styled.p`
    ${setVw("font-size", 16)}
    font-weight: 600;
`;

const Badge = styled.div`
    width: max-content;
    height: max-content;

    ${setVwMulti("padding", [3, 7])}

    ${setVw("border-radius", 8)}
    ${setVw("font-size", 12)}
    font-weight: 600;

    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
`;

const SubTitle = styled.p`
    ${setVw("font-size", 13)}
    color: rgba(31, 49, 78, 0.40);
`;

const SubText = styled.p`
    ${setVw("font-size", 12)}
    color: rgba(31, 49, 78, 0.60);
`;

const ArrowIcon = styled(ArrowDown)`
    ${setVw("width", 24)}
    ${setVw("height", 24)}

    transition: transform 0.35s ease;
`;

const BADGE_TYPE = {
    blue: {
        color: COLORS.simple_blue,
        backgroundColor: COLORS.simple_blue_op,
    },
    green: {
        color: "#06C168",
        backgroundColor: "rgba(61, 226, 147, 0.15)",
    },
    yellow: {
        color: "#FFA800",
        backgroundColor: "rgba(255, 209, 92, 0.25)",
    },
    red: {
      color: "#ff5c70",
      backgroundColor: "rgba(255, 92, 112, 0.15)",
    }
};

function AccordionBox({
    selected,
    setSelected,
    title,
    liveType = "전세",
    nowLiving = false,
    isNew = false,
    termStartDate = "2021.01.01",
    termEndDate = "2021.01.01",
    contractDate = "2021.01.01",
    deposit = "100,000,000",
    monthPay = "100,000",
    children,
}) {
    const parentRef = useRef();
    const childRef = useRef();
    const arrowRef = useRef();
    let type;
    switch (liveType) {
        case "전세":
            type = BADGE_TYPE.blue;
            break;
        case "월세":
            type = BADGE_TYPE.yellow;
            break;
        default:
            type = BADGE_TYPE.blue;
            break;
    }

    const handleExpand = useCallback(
        (e) => {
            e.stopPropagation();
            if (parentRef.current === null || childRef.current === null) {
                return;
            }
            if (parentRef.current.clientHeight > 0) {
                parentRef.current.style.height = "0";
                arrowRef.current.style.transform = "rotate(0deg)";
            } else {
                parentRef.current.style.height = `${childRef.current.clientHeight}px`;
                arrowRef.current.style.transform = "rotate(-180deg)";
            }
            setSelected(!selected);
        },
        [selected]
    );

    return (
        <Container>
            <Header onClick={handleExpand}>
                <Row fullWidth>
                    <Address>{title}</Address>

                    <ElasticBlock w={5} />
                    <Badge color={type.color} bgColor={type.backgroundColor}>
                        {liveType}
                    </Badge>

                    {nowLiving && (
                        <>
                            <ElasticBlock w={5} />
                            <Badge
                                color={BADGE_TYPE.green.color}
                                bgColor={BADGE_TYPE.green.backgroundColor}>
                                거주중
                            </Badge>
                        </>
                    )}

                    {isNew && (
                        <>
                            <ElasticBlock w={5} />
                            <Badge
                                color={BADGE_TYPE.red.color}
                                bgColor={BADGE_TYPE.red.backgroundColor}>
                                New
                            </Badge>
                        </>
                    )}

                    <Spacer />
                    <ArrowIcon ref={arrowRef} />
                </Row>

                <ElasticBlock h={5} />

                <Row>
                    <SubTitle>계약기간</SubTitle>
                    <ElasticBlock w={5} />
                    <SubText>
                        {termStartDate} ~ {termEndDate}
                    </SubText>
                </Row>
            </Header>
            <ContentsWrapper ref={parentRef} onClick={handleExpand}>
                <Contents ref={childRef}>
                    <Row>
                        <SubTitle>계약 일자</SubTitle>
                        <ElasticBlock w={5} />
                        <SubText>{contractDate}</SubText>
                    </Row>
                    <ElasticBlock h={5} />
                    <Row>
                        <SubTitle>보증금</SubTitle>
                        <ElasticBlock w={5} />
                        <SubText>{deposit}</SubText>

                        {type.color !== BADGE_TYPE.blue.color && (<>
                          <ElasticBlock w={5} />
                        <SubTitle>월세</SubTitle>
                        <ElasticBlock w={5} />
                        <SubText>{monthPay}</SubText>
                        </>)}
                    </Row>
                </Contents>
            </ContentsWrapper>
        </Container>
    );
}

export default AccordionBox;
