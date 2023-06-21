import '../styles/globals.css'
import Layout from '../components/layout/Layout'
function MyApp({ Component, pageProps }) {
  return <Layout><div className="main"><Component {...pageProps} /></div></Layout> 
}

export default MyApp
