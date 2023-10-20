import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import { ModalProvider } from "@/store/ModalContext";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75 } },
  exit: { opacity: 0, transition: { duration: 0.75 } },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ModalProvider>
      <Layout>
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
