import {
  AnimatePresence,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

const NavItem = ({ mouseX, icon, link, alt }) => {
  const { pathname } = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  let ref = useRef();

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [48, 100, 48]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });


  const borderVariants = {
    hover: {
      border: "1px solid rgba(255, 255, 255, 0.7)",
      transition: { duration: 0.3 },
    },
    initial: {
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
  };


  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.8 }}
      variants={borderVariants}
      animate={isHovered ? "hover" : "initial"}
      className="aspect-square w-10 rounded-xl bg-gradient-radial from-sky-800/40 to-transparent backdrop-blur-2xl  relative group box-content  "
    >
      <Link
        href={link}
        className="w-full h-full flex justify-center items-center hover:bg-gray-950 transition-color  rounded-xl duration-300"
      >
        <img
          src={icon}
          alt={alt}
          className=" w-9/12 h-9/12 object-scale-down "
        />
      </Link>
      <AnimatePresence>
        {pathname === link && (
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
            className="w-1 h-1 bg-cyan-200 rounded-full absolute right-1/2  -bottom-2"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: "50%" }}
            animate={{ opacity: 1, scale: 1, x: "50%" }}
            exit={{
              opacity: 0,
              scale: 0.5,
              transition: {
                duration: 0.5,
                type: "spring",
              },
            }}
            transition={{
              duration: 0.3,
              type: "spring",
              bounce: "0.3",
            }}
            className="py-1 px-1.5 bg-gray-900 border border-white/5 rounded-lg text-xs text-center absolute -top-8 right-1/2 translate-x-1/2  "
          >
            {alt}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavItem;
