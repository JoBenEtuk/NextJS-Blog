import GlobalStyle from '../styles/GlobalStyle'
import "../styles/article.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
