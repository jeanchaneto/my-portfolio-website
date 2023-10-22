import Link from "next/link";
import { MenuToggle } from "./MenuToggle";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const mobileNavItems = [
  { page: "About", link: "/about", icon: "/images/user-solid.svg" },
  {
    page: "Portfolio",
    link: "/portfolio",
    icon: "/images/briefcase-solid.svg",
  },
  {
    page: "Services",
    link: "/services",
    icon: "/images/screwdriver-wrench-solid.svg",
  },
  // { page: "Blog", link: "/blog", icon: "/images/newspaper-solid.svg" },
  { page: "Download my CV", link: "", icon: "/images/download.svg" },
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

const openedItemsVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    transition: { duration: 0.2, type: "spring" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: "spring", bounce: 0.5 },
  },
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState("87vh");
  const { pathname } = useRouter();

  const handleBottomMenuClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const updateMenuHeight = () => {
      if (window.innerWidth < 640) {
        setMenuHeight("87vh");
      } else {
        setMenuHeight("60vh");
      }
    };
    window.addEventListener("resize", updateMenuHeight);

    updateMenuHeight();

    return () => {
      window.removeEventListener("resize", updateMenuHeight);
    };
  }, []);

  const openedMenuVariants = {
    hidden: {
      width: 0,
      height: 0,
      paddingTop: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 150,
        damping: 20,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    visible: {
      width: "87vw",
      height: menuHeight,
      paddingTop: 64,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 150,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-fit rounded-2xl  backdrop-blur-2xl border border-white/10 bg-white/5 px-4  fixed bottom-2 left-1/2  z-30 lg:hidden"
    >
      <motion.div className="">
        {/* Opened Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.ul
            key="opened-menu"
              variants={openedMenuVariants}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              exit="hidden"
            >
              {mobileNavItems.map((item, i) => (
                <motion.li
                  variants={openedItemsVariants}
                  className=" h-16 hover:opacity-50 border-b border-white/10 flex items-center "
                  whileTap={{ scale: 0.95 }}
                  key={i}
                >
                  <Link href={item.link} onClick={() => setIsOpen(false)}>
                    <div className="flex gap-2 items-center text-gray-100 ">
                      <img src={item.icon} alt="" className="w-9" />
                      <p>{item.page}</p>
                      {pathname === item.link && (
                        <div className="w-1 h-1 bg-sky-200 rounded-full " />
                      )}
                    </div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
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
              onClick={handleBottomMenuClick}
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
                key="responsive-home"
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
              <MenuToggle setIsOpen={setIsOpen} isOpen={isOpen} />
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
              onClick={handleBottomMenuClick}
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
                key="responsive-contact"
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
    </motion.div>
  );
};

export default Menu;
