import Footer from '../components/Footer';
import Header from '../components/Header'; 
import '../src/app/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
