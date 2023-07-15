import "./style.css";
import React from "react";
import { AppWrapper } from '../context/state'; // import based on where you put it

export default function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
