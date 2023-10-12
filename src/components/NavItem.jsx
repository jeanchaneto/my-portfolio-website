import { motion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";

const NavItem = ({ mouseX, icon, link, alt }) => {
  const { pathname } = useRouter();

  let ref = useRef();

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-xl bg-gradient-radial from-cyan-800/40 to-transparent  backdrop-blur-2xl border-white/10 border relative group "
    >
      <Link
        href={link}
        className="w-full h-full flex justify-center items-center"
      >
        <img
          src={icon}
          alt={alt}
          className=" w-9/12 h-9/12 object-scale-down  "
        />
      </Link>
      {pathname === link && (
        <div className="w-1 h-1 bg-cyan-200 rounded-full absolute right-1/2 translate-x-1/2 -bottom-3" />
      )}
      <div className="py-1 px-1.5 bg-gray-900 border border-white/5 rounded-lg text-xs text-center absolute -top-8 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 " >{alt}</div>
    </motion.div>
  );
};

export default NavItem;
