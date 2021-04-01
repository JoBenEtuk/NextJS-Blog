import Image from 'next/image'
import Link from 'next/link'
import StyledHomeHeader from '../styles/StyledHomeHeader'
import { StyledHomeHeadingOne } from '../styles/StyledHeadingTags'
import { StyledButton, StyledBtnText } from '../styles/StyledButton'

const HomeHeader = () => {
    return (
        <>
            <StyledHomeHeader>
                <Image
                    src="/assets/images/Logo.png"
                    width={100}
                    height={65}
                />
                <StyledHomeHeadingOne>
                    Learn Outspoken Details about Programing Like you’ve never heard before
                </StyledHomeHeadingOne>
                <Link href="/newArticle/newArticle">
                    <StyledButton style={{ width: "173px", padding: "20px 30px" }}>
                        <StyledBtnText>
                            <span>
                                Add New
                            </span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="black" />
                            </svg>
                        </StyledBtnText>
                    </StyledButton>
                </Link>
            </StyledHomeHeader>
        </>
    )
}

export default HomeHeader
