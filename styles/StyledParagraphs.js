import styled from 'styled-components'

export const StyledParagraph = styled.p`
    font-size: 1rem;
    line-height: 180%;
    color: #000000;
    opacity: 0.6;
    margin: 0;
    width: 100%;
    max-width: 324px;

`
export const StyledAside = styled.span`
    max-width: 243px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.813rem;
    margin-top: 14px;
    color: rgba(1, 1, 1, 0.5);
`
export const StyledNew = styled.span`
    font-weight: bold;
    color: #FF9A02;
`
export const StyledNewTwo = styled(StyledNew)`
    font-size: 13px;
    color: #FF9F9F;
`

export const StyledReadMore = styled.div`
        color: #000;
        font-weight: bold;
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        width: 100px;
        justify-content: space-between;
        position: relative;
        margin-top: 35px;
`
export const StyledMore = styled.span`
        width: 74px;
        border-bottom: 4px #FFD540 solid;
        z-index: -1;
        position: absolute;
        top: 8px;
`
