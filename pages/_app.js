import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "../styles/globals.css";
import { gsap } from "gsap";

export default function App({ Component, pageProps }) {
  gsap.registerPlugin(ScrollTrigger);

  return <Component {...pageProps} />;
}
