import '../styles/globals.css'
// import "../styles/bootstrap2.css"
import "../styles/bootstrap.css";
import "../styles/custom.css"
import Layout from '../components/Layout';




function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
  </Layout>
    
  )
}

export default MyApp
