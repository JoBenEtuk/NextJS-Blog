import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { StyledButton, StyledBtnText } from '../styles/StyledButton'
import { articles } from '../data'

const Form = () => {
    const articlesContent = articles
    const hiddenFileInput = useRef(null);
    const defaultPreview = useRef(null);
    const [imgData, setImgData] = useState(null);
    const [form, setForm] = useState({ title: "Awesome Blog Article", name: '', date: '', highlight: '', excerpt: '', body: '', images: '' });

    //Handle Change
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, id: new Date().getTime(), [name]: value });
    };

    //Hide Default Preview
    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    //Handle Image Change
    const handleImgChange = (e) => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
            setForm({ ...form, images: e.target.value })
        }
        defaultPreview.current.style.display = "none";
    };
    //Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        articlesContent.push(form)
        console.log(articlesContent)
        localStorage.setItem('BlogArticle', JSON.stringify(articlesContent));
    };
    //Persist State With Local Storage
    useEffect(() => {
        localStorage.getItem('BlogArticle');
        localStorage.setItem('BlogArticle', JSON.stringify(articlesContent));
    })

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledFormField>
                <label htmlFor="inputImage">
                    <StyledInputTag onClick={handleClick}>
                        <img
                            src={imgData}
                            style={{ width: "100%" }} />
                        <img
                            ref={defaultPreview}
                            src="/assets/images/Group543.svg"
                            style={{ width: "100%" }}
                        />
                        <input
                            type="file"
                            ref={hiddenFileInput}
                            onChange={handleImgChange}
                            style={{ display: 'none' }}
                            name="inputImage"
                            id="inputImage"
                            accept="image/*" />
                    </StyledInputTag>
                </label>
            </StyledFormField>

            <StyledFormField>
                <StyledLabel htmlFor="title">
                    <StyledLabelSpan>
                        Article Title
                    </StyledLabelSpan>
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.6 0.259995H4.14L4.08 2.62L6.24 1.81999L6.74 3.27999L4.52 3.95999L5.96 5.83999L4.72 6.73999L3.38 4.84L2.06 6.73999L0.82 5.83999L2.22 4L0 3.29999L0.48 1.83999L2.66 2.62L2.6 0.259995Z" fill="#FF6961" />
                    </svg>
                </StyledLabel>
                <StyledInput
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Your article title"
                    value={form.title}
                    onChange={handleChange}
                />
            </StyledFormField>

            <StyledFormField>
                <StyledLabel htmlFor="name">
                    <StyledLabelSpan>
                        Author's Name
                    </StyledLabelSpan>
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.6 0.259995H4.14L4.08 2.62L6.24 1.81999L6.74 3.27999L4.52 3.95999L5.96 5.83999L4.72 6.73999L3.38 4.84L2.06 6.73999L0.82 5.83999L2.22 4L0 3.29999L0.48 1.83999L2.66 2.62L2.6 0.259995Z" fill="#FF6961" />
                    </svg>
                </StyledLabel>
                <StyledInput
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                />
            </StyledFormField>

            <StyledFormField>
                <StyledLabel htmlFor="highlight">
                    <StyledLabelSpan>
                        Article Tag
                    </StyledLabelSpan>
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.6 0.259995H4.14L4.08 2.62L6.24 1.81999L6.74 3.27999L4.52 3.95999L5.96 5.83999L4.72 6.73999L3.38 4.84L2.06 6.73999L0.82 5.83999L2.22 4L0 3.29999L0.48 1.83999L2.66 2.62L2.6 0.259995Z" fill="#FF6961" />
                    </svg>
                </StyledLabel>
                <StyledInput
                    type="text"
                    name="highlight"
                    id="highlight"
                    placeholder="Enter tag e.g UX Writing"
                    value={form.highlight}
                    onChange={handleChange}
                />
            </StyledFormField>

            <StyledFormField>
                <StyledLabel htmlFor="excerpt">
                    <StyledLabelSpan>
                        Caption
                    </StyledLabelSpan>
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.6 0.259995H4.14L4.08 2.62L6.24 1.81999L6.74 3.27999L4.52 3.95999L5.96 5.83999L4.72 6.73999L3.38 4.84L2.06 6.73999L0.82 5.83999L2.22 4L0 3.29999L0.48 1.83999L2.66 2.62L2.6 0.259995Z" fill="#FF6961" />
                    </svg>
                </StyledLabel>
                <StyledTextarea
                    style={{ height: "170px" }}
                    type="text"
                    name="excerpt"
                    id="excerpt"
                    placeholder="Your caption"
                    value={form.excerpt}
                    onChange={handleChange}
                />
            </StyledFormField>

            <StyledFormField>
                <StyledLabel htmlFor="body">
                    <StyledLabelSpan>
                        Content
                    </StyledLabelSpan>
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.6 0.259995H4.14L4.08 2.62L6.24 1.81999L6.74 3.27999L4.52 3.95999L5.96 5.83999L4.72 6.73999L3.38 4.84L2.06 6.73999L0.82 5.83999L2.22 4L0 3.29999L0.48 1.83999L2.66 2.62L2.6 0.259995Z" fill="#FF6961" />
                    </svg>
                </StyledLabel>
                <StyledTextarea
                    style={{ height: "254px" }}
                    type="text"
                    name="body"
                    placeholder="Your awesome article"
                    value={form.body}
                    onChange={handleChange}
                />
            </StyledFormField>

            <StyledFormButton
                type="submit">
                <StyledBtnText>
                    <span>
                        Save & Publish
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 7.05303V8.94697H11.8636L6.6553 14.1553L8 15.5L15.5 8L8 0.5L6.6553 1.8447L11.8636 7.05303H0.5Z" fill="black" />
                    </svg>
                </StyledBtnText>
            </StyledFormButton>
        </StyledForm>
    )
}

export default Form

const StyledFormButton = styled(StyledButton)`
    width: 222px;
    margin: auto;
    display: block;
    padding: 20px 30px;
`

const StyledForm = styled.form`
    padding: 3rem 0;
    border-radius: 15px;
    border: 1px solid #ffd540;
    margin-bottom: 300px;
`

const StyledFormField = styled.div`
    width: 75%;
    margin: auto;
    margin-bottom: 23px;
`

const StyledLabelSpan = styled.span`
    margin-right: 7px;
`

const StyledLabel = styled.label`
    font-weight: 500;
    font-size: 0.875rem;
    color: rgba(32, 36, 42, 0.4);
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 7px;
`

const StyledInput = styled.input`
    width: 100%;
    background: rgba(32, 36, 42, 0.05);
    border-radius: 10px;
    outline: none !important;
    height: 50px;
    border: 1px solid transparent;
    padding-left: 20px;
    &::placeholder {
    font-weight: 500;
    font-size: 1rem;
    }
    &:hover,
    &:focus-within,
    &:active,
    &.active,
    &:focus {
    background: #fff;
    border: 1px solid rgba(255, 139, 95, 0.5);
    }
`

const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 15px 0 0 20px;
    background: rgba(32, 36, 42, 0.05);
    border-radius: 10px;
    outline: none !important;
    height: 50px;
    border: 1px solid transparent;
    &::placeholder {
    font-weight: 500;
    font-size: 1rem;
    }
    &:hover,
    &:focus-within,
    &:active,
    &.active,
    &:focus {
    background: #fff;
    border: 1px solid rgba(255, 139, 95, 0.5);
    }
`

const StyledInputTag = styled.div`
    width: 100%
`

