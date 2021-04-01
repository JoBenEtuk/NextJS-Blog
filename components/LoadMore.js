import Link from "next/link"
import styled from 'styled-components'

const LoadMore = () => {
    return (
        <Link href='/'>
            <StyledLoadMore>
                <span>Load More</span>
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7.05303V8.94697H11.3636L6.1553 14.1553L7.5 15.5L15 8L7.5 0.5L6.1553 1.8447L11.3636 7.05303H0Z" fill="#FF9A02" />
                </svg>
            </StyledLoadMore>
        </Link>
    )
}

export default LoadMore

const StyledLoadMore = styled.a`
    font-family: Raleway;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 100%;
    color: #FF9A02;
    width: 116px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 7rem auto;
`
