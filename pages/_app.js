import "../styles/globals.css";
import GlobalStyle from "../styles/globalStyles";
import Theme from "../styles/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
