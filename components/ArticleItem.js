import Link from 'next/link'
import Image from 'next/image'
import { StyledHeadingThree } from '../styles/StyledHeadingTags'
import { HighlightButton } from '../styles/StyledButton'
import { StyledParagraph, StyledAside, StyledNew, StyledReadMore, StyledMore } from '../styles/StyledParagraphs'


const ArticleItem = ({ article }) => {
  return (
    <div>
      <Link href={`/article/${article.id}`}>
        <a>
          <Image
            width={360}
            height={110}
            src={article.images}
          />
          <StyledHeadingThree>{article.title}</StyledHeadingThree>
          <StyledParagraph>{article.excerpt + '...'}</StyledParagraph>
          <StyledAside>
            <span>{article.date}</span> &bull;
              <StyledNew>NEW</StyledNew> &bull;
              <HighlightButton>{article.highlight}</HighlightButton>
          </StyledAside>
          <StyledReadMore>
            <span>Read More</span>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.37602 6.07425H0V4.92575H8.37602L4.76226 1.31199L5.57425 0.5L10.5743 5.5L5.57425 10.5L4.76226 9.68801L8.37602 6.07425Z" fill="black" />
            </svg>
            <StyledMore />
          </StyledReadMore>
        </a>
      </Link>
    </div>
  )
}

export default ArticleItem
