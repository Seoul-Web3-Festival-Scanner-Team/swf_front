import styled from "@emotion/styled";
import React, { useState, useRef } from "react";
import { COLORS } from "styles/global/globalColors";
import { setVw } from "styles/global/globalScreen";
import { ReactComponent as InactiveCircle } from "assets/icons/ic-inactive_circle_plus.svg";
import { ReactComponent as ActiveCircle } from "assets/icons/ic-active_circle_plus.svg";

const UploadButton = styled.button`
    cursor: pointer;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${COLORS.simple_gray_op_3};

    ${setVw("width", 316)}
    ${setVw("height", 210)}

    ${setVw("border-radius", 10)}
`;

const FileName = styled.span`
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90px;
`;

const InactiveCircleIcon = styled(InactiveCircle)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ActiveCircleIcon = styled(ActiveCircle)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

function FileUploadInput({file, setFile}) {
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        if (event.target.files[0]) {
            setFile(event.target.files[0].name);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <UploadButton onClick={handleClick}>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            {file ? <InactiveCircleIcon /> : <ActiveCircleIcon />}
            {file && <FileName>{file}</FileName>}
        </UploadButton>
    );
}

export default FileUploadInput;
