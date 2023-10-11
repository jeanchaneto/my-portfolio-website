import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import { ModalProvider } from "@/store/ModalContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Layout>
        <Component {...pageProps} />
        <Modal />
      </Layout>
    </ModalProvider>
  );
}
