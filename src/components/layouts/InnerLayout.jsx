import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";
import { initVwViewport } from "styles/global/globalScreen";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 100%;
    max-width: ${initVwViewport}px;
    min-height: 100vh;
    max-height: max-content;

    padding-bottom: 12px;

    background-color: ${COLORS.white};

    transition: all 0.2s ease-in-out;

    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;
function InnerLayout({ children, ...props }) {
    return <Container {...props}>{children}</Container>;
}

export default InnerLayout;
