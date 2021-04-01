import styled from 'styled-components'

export const StyledHeadingOne = styled.h1`
    font-weight: 800;
    font-size: 2.75rem;
    line-height: 140%;
`

export const StyledHomeHeadingOne = styled(StyledHeadingOne)`
    text-align: center;
    height: 186px;
    position: relative;
    margin: 25px 0;
    padding: 5px 0;
    &::after {
        position: absolute;
        content: '';
        background: url(/assets/images/double-quotes.svg);
        width: 241px;
        height: 172px;
        left: 0;
        bottom: 0;
    }
`

export const StyledHeadingTwo = styled.h2`
    line-height: 140%;
    font-weight: bold;
    font-size: 2.375rem;
`

export const StyledHeadingTwoCenter = styled(StyledHeadingTwo)`
    text-align: center;
`

export const StyledHeadingThree = styled.h3`
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 140%;
    margin: 1rem 0;
`
