import Header from "./Header";
import NavBar from "./NavBar";

import { Inter, Sora } from "next/font/google";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

const Layout = ({ children }) => {
  return (
    <div
      className={`${inter.variable} ${sora.variable} font-sans w-full  overflow-hidden text-white relative`}
    >

      <Header />

      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
