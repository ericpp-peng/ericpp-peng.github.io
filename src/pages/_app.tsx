import type { AppProps } from "next/app";
import Analytics from "../components/Analytics";
import "../styles.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
