import styled from "@emotion/styled";
import { useTabLayout } from "hooks/useTabLayout";
import { useEffect } from "react";

const Container = styled.div`
    display: flex;
    overflow: hidden;

    width: 100%;
    height: 100%;
`;

const Tab = styled.div`
    min-width: 100%;
    transition: all 0.3s ease-in-out;
`;

function TabLayout({ tabList }) {
    const { setMaxPosition, position } = useTabLayout();

    const getSlideStyle = () => {
        const offset = -position * 100;
        return {
            transform: `translateX(${offset}%)`,
        };
    };

    useEffect(() => {
        setMaxPosition(tabList.length - 1);
    }, []);

    return (
        <Container>
            {tabList.map((content, index) => (
                <Tab key={index} style={getSlideStyle()}>
                    {content}
                </Tab>
            ))}
        </Container>
    );
}

export default TabLayout;