import '../styles/globals.css'
import Head from 'next/head'
// import "../styles/bootstrap2.css"
import "../styles/bootstrap.css";
import "../styles/custom.css"
import '../styles/responsive.css'
import Layout from '../components/Layout';




function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
  </Layout>
    
  )
}

export default MyApp
