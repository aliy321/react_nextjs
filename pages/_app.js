import Header from '../components/header';
import Footer from '../components/footer';

import { AnimatePresence } from "framer-motion";

import '../styles/global.scss';

export default function App({ Component, pageProps }) {
    return (
        <>
            {/* <Header/> */}
            <Component {...pageProps} />
            {/* <Footer/> */}
        </>
    )
}