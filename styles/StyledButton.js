import styled from 'styled-components'

export const StyledButton = styled.button`
    color: #000;
    width: 173px;
    height: 58px;
    background: #FFDA68;
    border-radius: 60px;
    outline: none;
    border: none;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 18px;
    color: #231F20;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-decoration: none;
    &:hover {
        background: #FFD540;
  }
`
export const HighlightButton = styled(StyledButton)`
    color: #000;
    width: 84px;
    height: 18px;
    background: #FFD540;
    border-radius: 40px; 
    font-size: 10px;
    color: #111111;   
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: #FFDA68;
  }
`
export const StyledBtnText = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
