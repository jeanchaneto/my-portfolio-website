import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import { ModalProvider } from "@/store/ModalContext";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Script from "next/script";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75 } },
  exit: { opacity: 0, transition: { duration: 0.75 } },
};

const isProduction = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ModalProvider>
      <Layout>
        {isProduction && (
          <>
            <Script
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-0YMSG07Z9V"
            ></Script>
            <Script strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); 
          gtag('config','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
  `}
            </Script>
          </>
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <Modal />
      </Layout>
    </ModalProvider>
  );
}
