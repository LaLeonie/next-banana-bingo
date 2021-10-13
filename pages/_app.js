import "../styles/globals.css";
import GlobalStyle from "../styles/globalStyles";
import Theme from "../styles/Theme";
import Layout from "../components/shared/Layout";
import { wrapper } from "../store/store";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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

export default wrapper.withRedux(MyApp);
