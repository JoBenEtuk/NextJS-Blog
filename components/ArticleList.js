import Row from '../styles/Row'
import ArticleItem from './ArticleItem'

const ArticleList = ({ articles }) => {
  return (
    <Row>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </Row>
  )
}

export default ArticleList
