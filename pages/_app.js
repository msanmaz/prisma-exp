import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '/theme'
import { SessionProvider } from 'next-auth/react'
function MyApp({ Component, pageProps}){
  return <SessionProvider     refetchInterval={2 * 60} session={pageProps.session}>
    <ChakraProvider theme={theme}> <Component {...pageProps} /></ChakraProvider>
  </SessionProvider>
}

export default MyApp
