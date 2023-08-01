import styled from "@emotion/styled";
import { initVwViewport, setVw } from "styles/global/globalScreen";
import { ReactComponent as Back } from "assets/icons/ic-left_arrow.svg";
import Spacer from "components/utils/Spacer";
import ElasticBlock from "components/utils/ElasticBlock";
import Visibility from "components/utils/Visibility";

function Header({ title, onBackClick }) {
    return (
        <>
            <Container>
                <ElasticBlock w={20} />
                <BackIcon onClick={onBackClick} />
                <Spacer />
                <Title>{title}</Title>
            </Container>
            <ElasticBlock h={56} />
        </>
    );
}

export default Header;

const Container = styled.div`
    position: fixed;
    z-index: 999;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ${setVw("width", initVwViewport)}
    ${setVw("height", 56)};

    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
    position: absolute;

    ${setVw("font-size", 17)};
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
`;

const BackIcon = styled(Back)`
    cursor: pointer;
    ${setVw("width", 24)}
    ${setVw("height", 24)}
`;
