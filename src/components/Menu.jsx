import Link from "next/link";
import { MenuToggle } from "./MenuToggle";
import { useState } from "react";
import { useRouter } from "next/router";

const mobileNavItems = [
  { page: "About", link: "/about" },
  { page: "Portfolio", link: "/portfolio" },
  { page: "Services", link: "/services" },
  // { page: "Blog", link: "/blog" },
  { page: "Download my CV", link: "#" },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();
  return (
    <div className="mx-auto max-w-fit rounded-2xl  backdrop-blur-2xl border border-white/10 bg-white/5 px-4  fixed bottom-2 left-1/2 -translate-x-1/2 z-50 lg:hidden">
      {/* Opened Menu */}
      {isOpen && <ul className="  w-[87vw] h-[87vh] pt-6 ">
        {mobileNavItems.map((item, i) => (
          <li
            className=" h-12 hover:opacity-50 border-b border-white/10 flex items-center "
            key={i}
          >
            <Link href={item.link}>
              <div className="flex gap-2 items-center text-gray-100 ">
                <p>{item.page}</p>
                {pathname === item.link && (
                  <div className="w-1 h-1 bg-sky-200 rounded-full " />
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>}
      {/* Persistent bottom nav menu */}
      <div className="  h-16 items-center gap-4  flex justify-center ">
        <div className="aspect-square w-10 rounded-xl bg-gradient-radial from-sky-800/40 to-transparent  backdrop-blur-2xl border-white/10 border relative group ">
          <Link
            href="/"
            className="w-full h-full flex justify-center items-center"
          >
            <img
              src="/images/house-solid.svg"
              alt="Home"
              className=" w-9/12 h-9/12 object-scale-down  "
            />
          </Link>
          {pathname === "/" && (
            <div className="w-1 h-1 bg-sky-200 rounded-full absolute right-1/2 translate-x-1/2 -bottom-2" />
          )}
          <div className="py-1 px-1.5 bg-gray-900 border border-white/5 rounded-lg text-xs text-center absolute -top-8 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            Home
          </div>
        </div>
        <div className="aspect-square w-10 rounded-xl bg-gradient-radial   backdrop-blur-2xl border-white/10 border relative group ">
          <div className="w-full h-full flex justify-center items-center">
            <MenuToggle setIsOpen={setIsOpen} />
          </div>
        </div>
        <div className="aspect-square w-10 rounded-xl bg-gradient-radial from-sky-800/40 to-transparent  backdrop-blur-2xl border-white/10 border relative group ">
          <Link
            href="/contact"
            className="w-full h-full flex justify-center items-center"
          >
            <img
              src="/images/envelope-solid.svg"
              alt="Contact"
              className=" w-9/12 h-9/12 object-scale-down  "
            />
          </Link>
          {pathname === "/contact" && (
            <div className="w-1 h-1 bg-sky-200 rounded-full absolute right-1/2 translate-x-1/2 -bottom-2" />
          )}
          <div className="py-1 px-1.5 bg-gray-900 border border-white/5 rounded-lg text-xs text-center absolute -top-8 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
