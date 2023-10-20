import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="">
            <Logo />
          </Link>
        </div>
        <motion.div
          initial={{ y: -60 }}
          animate={{
            y: 0,
            transition: {
              duration: 0.5,
              delay: 3.2,
              type: "spring",
              bounce: "0.5",
            },
          }}
          delay="3.1"
          className="hidden min-[351px]:flex lg:flex-1 lg:justify-end gap-4"
        >
          <motion.a
            href="https://github.com/jeanchaneto"
            target="_blank"
            className=" self-center "
            whileTap={{ scale: 0.8 }}
            whileHover={{ opacity: 0.5, duration: 0.3 }}
          >
            <img
              src="/images/github-logo.svg"
              alt="Github logo"
              className="h-6"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jean-chane-to/"
            target="_blank"
            className=" self-center "
            whileTap={{ scale: 0.8 }}
            whileHover={{ opacity: 0.5, duration: 0.3 }}
          >
            <img
              src="/images/linkedin-logo.svg"
              alt="Linkedin logo"
              className="h-6"
            />
          </motion.a>
        </motion.div>
      </nav>
    </header>
  );
}
