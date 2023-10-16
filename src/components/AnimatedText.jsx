import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedText = ({
  el: Wrapper = "p",
  className,
  children,
  delay,
  duration,
  stagger,
}) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const defaultAnimations = {
    hidden: {
      opacity: 0,
      scale: 0.35,
      x: 40,
      transition: { duration: duration },
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: duration },
    },
  };

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setStartAnimation(true);
      }, delay * 1000);
    }
  }, [isInView]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{children}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        animate={startAnimation ? "visible" : "hidden"}
        transition={{ staggerChildren: stagger }}
        ref={ref}
        className=" inline-block"
      >
        {children.split(" ").map((word, i) => (
          <motion.span className=" inline-block " key={i}>
            {word.split("").map((character, j) => (
              <motion.span
                className="inline-block"
                variants={defaultAnimations}
                key={j}
              >
                {character}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
