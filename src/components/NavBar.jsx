import { motion, useMotionValue } from "framer-motion";
import NavItem from "./NavItem";


const navItems = [
  { icon: "/images/house-solid.svg", link: "/", alt: "Home" },
  { icon: "/images/user-solid.svg", link: "/about", alt: "About" },
  { icon: "/images/briefcase-solid.svg", link: "/portfolio", alt: "Portfolio" },
  {
    icon: "/images/screwdriver-wrench-solid.svg",
    link: "/services",
    alt: "Services",
  },
  // { icon: "/images/newspaper-solid.svg", link: "/blog", alt: "Blog" },
  { icon: "/images/envelope-solid.svg", link: "/contact", alt: "Contact" },
];

const navBarVariants = {
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

const NavBar = () => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto max-w-fit  h-16 items-end gap-4 rounded-2xl  backdrop-blur border border-white/10 bg-white/5 px-4 pb-3 fixed bottom-10 left-1/2 -translate-x-1/2 z-50 hidden lg:flex "
      variants={navBarVariants}
      initial="hidden"
      animate="visible"
    >
      {navItems.map((navItem, i) => (
        <NavItem
          mouseX={mouseX}
          key={i}
          icon={navItem.icon}
          link={navItem.link}
          alt={navItem.alt}
        />
      ))}
    </motion.div>
  );
};

export default NavBar;
