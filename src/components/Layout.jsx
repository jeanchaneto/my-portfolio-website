import Header from "./Header";
import Menu from "./Menu";
import NavBar from "./NavBar";

import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

const Layout = ({ children }) => {
  return (
    <div
      className={`${sora.variable} font-sora w-full  overflow-hidden text-white relative bg-gray-950 scroll-smooth `}
    >
      <Header />
      <NavBar />
      {children}
      <Menu />
    </div>
  );
};

export default Layout;
