import { server } from '../../../config'
import Meta from '../../../components/Meta'
import Footer from '../../../components/Footer'
import Image from 'next/image'
import { HighlightButton } from '../../../styles/StyledButton'
import { ContainerTwo } from '../../../styles/Container'
import { StyledAside, StyledNewTwo } from '../../../styles/StyledParagraphs'
import { StyledHeadingTwo } from '../../../styles/StyledHeadingTags'
import HeaderMain from '../../../components/HeaderMain'

const article = ({ article }) => {
  function createMarkup() {
    return { __html: `${article.body}` }
  }
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <ContainerTwo>
        <HeaderMain />
        <StyledHeadingTwo>{article.title}</StyledHeadingTwo>
        <Image
          src={article.images}
          width={738}
          height={446}
        />
        <StyledAside>
          <span>{article.date}</span> &bull;
            <StyledNewTwo>NEW</StyledNewTwo> &bull;
            <HighlightButton>{article.highlight}</HighlightButton>
        </StyledAside>
        <section className="articleSection" dangerouslySetInnerHTML={createMarkup()}></section>
        <br />
        <Footer />
      </ContainerTwo>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}
export default article
