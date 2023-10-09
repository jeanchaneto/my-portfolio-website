import Header from "./Header";
import MobileNav from "./MobileNav";
import NavBar from "./NavBar";

import { Inter, Sora } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

const Layout = ({ children }) => {
  return (
    <div
      className={`${inter.variable} ${sora.variable} font-sans w-full  overflow-hidden text-white relative bg-gray-950 `}
    >
      <Header />
      <MobileNav />
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
