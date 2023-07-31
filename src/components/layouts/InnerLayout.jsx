import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";
import { initVwViewport } from "styles/global/globalScreen";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 100%;
    height: 100vh;

    max-width: ${initVwViewport}px;

    background-color: ${COLORS.white};

    transition: all 0.2s ease-in-out;
`;
function InnerLayout({ children, ...props }) {
    return <Container {...props}>{children}</Container>;
}

export default InnerLayout;
