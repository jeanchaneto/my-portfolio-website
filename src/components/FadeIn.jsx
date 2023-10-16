import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeIn = ({ el: Wrapper = "motion.div", className, children, duration, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once:true });
  const MotionElement = motion[Wrapper];

  return (
    <MotionElement
      className={className}
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: duration, delay:delay }}
      initial="hidden"
      animate={ isInView && "visible"}
    >
      {children}
    </MotionElement>
  );
};

export default FadeIn;
