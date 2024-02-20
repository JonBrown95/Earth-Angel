import Header from '../components/Header'; 
import '../src/app/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
