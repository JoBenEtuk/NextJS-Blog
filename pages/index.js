import { server } from '../config'
import ArticleList from '../components/ArticleList'
import HomeHeader from '../components/HomeHeader'
import { Container } from '../styles/Container'
import LoadMore from '../components/LoadMore'
import Footer from '../components/Footer'

export default function Home({ articles }) {
  return (
    <main>
      <Container>
        <HomeHeader />
        <ArticleList articles={articles} />
        <LoadMore />
        <Footer />
      </Container>
    </main>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
