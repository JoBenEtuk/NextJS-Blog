import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'

const HeaderMain = ({ children }) => {
    return (
        <>
            <StyledHeaderMain>
                <BackArrow>
                    <Link href='/'>
                        <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37 21.399V16.601L8.96973 16.601L21.8169 3.40657L18.5 0L3.05176e-05 19L18.5 38L21.8169 34.5934L8.96973 21.399L37 21.399Z" fill="#FF9A02" />
                        </svg>
                    </Link>
                </BackArrow>

                <Image
                    src="/assets/images/Logo.png"
                    width={100}
                    height={65}
                />
            </StyledHeaderMain>
            {children}
        </>
    )
}

export default HeaderMain

const StyledHeaderMain = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3rem auto;
`
const BackArrow = styled.a`
    cursor: pointer;
`
