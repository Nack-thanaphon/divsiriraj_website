import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Router from "next/router";
import { useState } from "react";
import Loader from "./components/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    // setTimeout(function () {
      setLoading(true);
    // }, 300);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setInterval(function () {
      setLoading(false);
    }, 3000);
  });
  return (
    <>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
