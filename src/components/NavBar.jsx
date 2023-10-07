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
      className="mx-auto max-w-fit flex h-16 items-end gap-4 rounded-2xl bg-gray-700/50 backdrop-blur-xl px-4 pb-3 fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
    >
      {[...Array(8).keys()].map((i) => (
        <AppIcon mouseX={mouseX} key={i} />
      ))}
    </motion.div>
  )
}

export default NavBar

function AppIcon({ mouseX }) {
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
      className="aspect-square w-10 rounded-full bg-gray-400"
    />
  );
}