import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../stylesheets/styles.scss'
import '../stylesheets/utils.scss'
import '../stylesheets/reset.scss'

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>SEO Experiment</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <>
        <CssBaseline />
        <Component {...pageProps} />
      </>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};