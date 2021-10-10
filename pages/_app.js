import "../styles/globals.css";
import GlobalStyle from "../styles/globalStyles";
import Theme from "../styles/Theme";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}

export default MyApp;
