import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";

const Backboard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 14px 0px 14px 16px;
    gap: 8px;

    border-radius: 10px;
    background: var(--gray-20, rgba(213, 219, 229, 0.20));

    width: 316px;
    height: 100%;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;

    padding: 0 16px 0 0;

    font-size: 16px;

    color: ${COLORS.dark_1};

    &::placeholder {
        color: ${COLORS.gray_1};
    }
`;

function FrontIconInput({  
    type = "text",
    value,
    setValue,
    onSearch = () => {},
    iconComponent,
    placeholder = "Basic Icon Input",
}) {
    return (
        <Backboard onClick={onSearch}>
            <button style={{ display: "flex", alignItems: "center" }} onClick={onSearch}>
                {iconComponent}
            </button>
            <Input
                value={value}
                type={type}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSearch()
                  }
                }}
                placeholder={placeholder}
            />
        </Backboard>
    );
}

export default FrontIconInput;
