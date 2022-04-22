import '../styles/globals.css'

import 'tailwindcss/tailwind.css'
import Router from 'next/router'
import { useState } from "react"
import Loader from './components/Loader'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on('routeChangeStart', (url) => {
    console.log('Router was Update')
    setLoading(true);
  })
  Router.events.on('routeChangeComplete', (url) => {
    console.log('Router was Update');
    setLoading(false);

  });
  return (
    <>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}
export default MyApp
