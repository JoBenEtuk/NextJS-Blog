import styled from 'styled-components'

const Footer = () => {
    return (
        <StyledFooter>
            2020 | Sunbeam | All Rights Reserved
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    font-weight: bold;
    font-size: 0.875rem;
    text-align: center;
    color: #000000;
    opacity: 0.6;
    margin: 100px auto 40px auto;
`
