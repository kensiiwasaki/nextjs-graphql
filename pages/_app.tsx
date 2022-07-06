import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'

function MyApp({ Component, pageProps }: AppProps) {
  // クライアントを作成してApolloProviderのpropsに渡すことで全てのコンポーネントでApolloClientが使えるようなる
  const client = initializeApollo()
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
