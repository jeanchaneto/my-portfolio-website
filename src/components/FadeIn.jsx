import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeIn = ({  className, children, duration = 0.5, delay, from = 24, view=0.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once:true });

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: from},
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: duration, delay:delay },
        },
      }}
      initial="hidden"
      animate={ isInView && "visible"}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
