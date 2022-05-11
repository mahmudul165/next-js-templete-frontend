import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script"; 
import Layout from "../component/layout/Layout";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";
import Meta from "../component/Meta";

function MyApp({ Component, pageProps }) {
  //const getLayout = Component.getLayout || ((page) => page);
  //console.log("page is",getLayout)
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <Meta/>
      </Head>
      {/* font awesome   */}
      <Script
        src="https://kit.fontawesome.com/61a6132c09.js"
        crossOrigin="anonymous"
      ></Script>
        {/* Bootstrap Bundle with Popper   */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
