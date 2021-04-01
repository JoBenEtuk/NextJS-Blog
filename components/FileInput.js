import React, { useState, useRef } from 'react'
import styled from "styled-components"

const StyledInputTag = styled.div`
    width: 100%
`

const FileInput = ({ children }) => {
    const hiddenFileInput = useRef(null);
    const defaultPreview = useRef(null);

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };
    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src)
        }
        defaultPreview.current.style.display = "none";
    };
    return (
        <>
            <label htmlFor="inputImage">
                <StyledInputTag onClick={handleClick}>
                    <img
                        id="output"
                        style={{ width: "100%" }} />
                    <img
                        ref={defaultPreview}
                        src="/assets/images/Group543.svg"
                        style={{ width: "100%" }}
                    />
                    <input
                        type="file"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{ display: 'none' }} name="inputImage"
                        id="input-image"
                        accept="image/*" />
                    {children}
                </StyledInputTag>
            </label>
        </>
    )
}

export default FileInput
