import styled from "@emotion/styled";
import { useState } from "react";
import { COLORS } from "styles/global/globalColors";
import { setVw } from "styles/global/globalScreen";

const Container = styled.div`
    display: flex;
    overflow-y: scroll;

    width: 100%;
    ${setVw("height", 175)}

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    min-width: 100%;

    transition: all 0.3s ease-in-out;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 80%;

    border-radius: 10px;
    background-color: ${COLORS.white};
    box-shadow: 0px 6px 20px 0px rgba(31, 49, 78, 0.1);
`;

function BasicCarousel({ dataList = [{ title: "1", content: "1" }] }) {
    const [position, setPosition] = useState(0);

    return (
        <Container>
            {dataList.map((data, index) => (
                <ItemWrapper key={index}>
                    <Item>
                        <div>{data.title}</div>
                        <div>{data.content}</div>
                    </Item>
                </ItemWrapper>
            ))}
        </Container>
    );
}

export default BasicCarousel;
