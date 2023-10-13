import Header from "./Header";
import Menu from "./Menu";
import NavBar from "./NavBar";

import { Inter, Sora } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

const Layout = ({ children }) => {
  return (
    <div
      className={`${inter.variable} ${sora.variable} font-sora w-full  overflow-hidden text-white relative bg-gray-950 `}
    >
      <Header />
      <NavBar />
      {children}
      <Menu />
    </div>
  );
};

export default Layout;
