import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const NavBar = () => {
  let mouseX = useMotionValue(Infinity);

  return (

    
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto max-w-fit flex h-16 items-end gap-4 rounded-2xl  backdrop-blur border border-white/10 px-4 pb-3 fixed bottom-10 left-1/2 -translate-x-1/2 z-50 "
    >
      {[...Array(5).keys()].map((i) => (
        <NavItem mouseX={mouseX} key={i} />
      ))}

    </motion.div>
  );
};

export default NavBar;

function NavItem({ mouseX }) {
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
      className="aspect-square w-10 rounded-xl bg-gray-800 hover:bg-cyan-300  flex justify-center items-center "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className=" w-10/12 h-10/12 object text-sky-200 hover:text-sky-800"
      >
        <path
          fillRule="evenodd"
          d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
          clipRule="evenodd"
        />
      </svg>
      
    </motion.div>
  );
}
