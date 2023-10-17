import Link from "next/link";
import { MenuToggle } from "./MenuToggle";
import { useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const mobileNavItems = [
  { page: "About", link: "/about" },
  { page: "Portfolio", link: "/portfolio" },
  { page: "Services", link: "/services" },
  // { page: "Blog", link: "/blog" },
  { page: "Download my CV", link: "#" },
];

const menuVariants = {
  hidden: { opacity: 0, y: "100%", x: "-50%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
      x: "-50%",
      type: "spring",
      bounce: "0.5",
    },
  },
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();
  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-fit rounded-2xl  backdrop-blur-2xl border border-white/10 bg-white/5 px-4  fixed bottom-2 left-1/2  z-50 lg:hidden"
    >
      {/* Opened Menu */}
      {isOpen && (
        <ul className="  w-[87vw] h-[87vh] pt-6 ">
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
        </ul>
      )}
      {/* Persistent bottom nav menu */}
      <div className="  h-16 items-center gap-4  flex justify-center ">
        <motion.div
          whileTap={{
            scale: 0.8,
            backgroundColor: "#030712",
            border: "1px solid rgba(255, 255, 255, 0.7)",
          }}
          className="aspect-square w-12 rounded-xl bg-gradient-radial from-sky-800/40 to-transparent  backdrop-blur-2xl border-white/10 border relative group box-content "
        >
          <Link
            href="/"
            className="w-full h-full flex justify-center items-center "
          >
            <img
              src="/images/house-solid.svg"
              alt="Home"
              className=" w-9/12 h-9/12 object-scale-down  "
            />
          </Link>
          <AnimatePresence>
            {pathname === "/" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: "50%",
                  transition: { duration: 1, type: "spring", bounce: "0.5" },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  x: "50%",
                  transition: { duration: 0.3, type: "spring" },
                }}
                className="w-1 h-1 bg-sky-200 rounded-full absolute right-1/2 translate-x-1/2 -bottom-2"
              />
            )}
          </AnimatePresence>
        </motion.div>
        <div className="aspect-square w-12 rounded-xl bg-gradient-radial   backdrop-blur-2xl border-white/10 border relative group ">
          <div className="w-full h-full flex justify-center items-center">
            <MenuToggle setIsOpen={setIsOpen} />
          </div>
        </div>
        <motion.div
          whileTap={{
            scale: 0.8,
            backgroundColor: "#030712",
            border: "1px solid rgba(255, 255, 255, 0.7)",
          }}
          className="aspect-square w-12 rounded-xl bg-gradient-radial from-sky-800/40 to-transparent  backdrop-blur-2xl border-white/10 border relative group box-content"
        >
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
          <AnimatePresence>
            {pathname === "/contact" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: "50%",
                  transition: { duration: 1, type: "spring", bounce: "0.5" },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  x: "50%",
                  transition: { duration: 0.3, type: "spring" },
                }}
                className="w-1 h-1 bg-sky-200 rounded-full absolute right-1/2 translate-x-1/2 -bottom-2"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Menu;
